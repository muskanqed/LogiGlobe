import { NextResponse } from "next/server"
import { ZodError } from "zod"
import {
  careersApplicationSchema,
  validateResumeFile,
  type CareersApplicationData,
} from "@/lib/validation/careers-schema"
import { createEmailTransporter } from "@/lib/email/config"
import {
  generateCareersApplicationSubject,
  generateCareersApplicationEmailHtml,
  generateCareersApplicationEmailText,
  generateCareersApplicationConfirmationHtml,
  generateCareersApplicationConfirmationText,
} from "@/lib/email/careers-templates"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.SMTP_USER || "support@logiglobe.com"
const FROM_EMAIL = process.env.SMTP_FROM || process.env.SMTP_USER || "support@logiglobe.com"

export async function POST(request: Request) {
  try {
    // Parse multipart form data
    const formData = await request.formData()

    // Extract form fields
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      qualification: formData.get("qualification") as string,
      experience: formData.get("experience") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string || "",
      website: formData.get("website") as string || "", // Honeypot
    }

    // Extract resume file
    const resumeFile = formData.get("resume") as File | null

    // Validate resume file
    if (!resumeFile) {
      return NextResponse.json(
        { error: "Resume file is required" },
        { status: 400 }
      )
    }

    const fileValidation = validateResumeFile(resumeFile)
    if (!fileValidation.valid) {
      return NextResponse.json(
        { error: fileValidation.error },
        { status: 400 }
      )
    }

    // Validate form data with Zod
    const validatedData: CareersApplicationData = careersApplicationSchema.parse(data)

    // Check honeypot field
    if (validatedData.website) {
      return NextResponse.json(
        { error: "Invalid submission detected" },
        { status: 400 }
      )
    }

    // Convert file to buffer for email attachment
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())

    // Generate email content
    const subject = generateCareersApplicationSubject(validatedData.firstName, validatedData.lastName)
    const htmlContent = generateCareersApplicationEmailHtml(validatedData, resumeFile.name)
    const textContent = generateCareersApplicationEmailText(validatedData, resumeFile.name)
    const confirmationHtml = generateCareersApplicationConfirmationHtml(validatedData.firstName)
    const confirmationText = generateCareersApplicationConfirmationText(validatedData.firstName)

    // Create email transporter
    const transporter = createEmailTransporter()

    // Send notification email to HR team with resume attachment
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: subject,
      html: htmlContent,
      text: textContent,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
          contentType: resumeFile.type,
        },
      ],
    })

    // Send confirmation email to the applicant (without resume attachment)
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: validatedData.email,
      subject: `Thank You for Your Application to LogiGlobe`,
      html: confirmationHtml,
      text: confirmationText,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Careers application submission error:", error)

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const firstError = error.errors[0]
      return NextResponse.json(
        {
          error: firstError?.message || "Validation failed",
          field: firstError?.path?.join(".") || "unknown",
        },
        { status: 400 }
      )
    }

    // Handle email sending errors
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: "Failed to send application. Please try again later.",
          details: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
