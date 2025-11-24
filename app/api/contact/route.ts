import { NextResponse } from "next/server"
import { ZodError } from "zod"
import { contactFormSchema } from "@/lib/validation/contact-schema"
import { createEmailTransporter } from "@/lib/email/config"
import {
  generateContactEmailHtml,
  generateContactEmailText,
  generateContactSubject,
  generateConfirmationEmailHtml,
  generateConfirmationEmailText,
  generateConfirmationSubject,
} from "@/lib/email/templates"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.SMTP_USER || "support@rolofleets.com"
const FROM_EMAIL = process.env.SMTP_FROM || process.env.SMTP_USER || "support@rolofleets.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate with Zod schema
    const validatedData = contactFormSchema.parse(body)

    // Check honeypot field
    if (validatedData.website) {
      return NextResponse.json(
        { error: "Invalid submission detected" },
        { status: 400 }
      )
    }

    // Create email transporter
    const transporter = createEmailTransporter()

    // Generate email content for support team
    const subject = generateContactSubject(validatedData.name)
    const emailHtml = generateContactEmailHtml(validatedData)
    const emailText = generateContactEmailText(validatedData)

    // Generate confirmation email content for user
    const confirmationSubject = generateConfirmationSubject()
    const confirmationHtml = generateConfirmationEmailHtml(validatedData.name)
    const confirmationText = generateConfirmationEmailText(validatedData.name)

    // Send email to support team
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: validatedData.email,
      subject: subject,
      html: emailHtml,
      text: emailText,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: validatedData.email,
      subject: confirmationSubject,
      html: confirmationHtml,
      text: confirmationText,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Contact form error:", error)

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
          error: "Failed to send message. Please try again later.",
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
