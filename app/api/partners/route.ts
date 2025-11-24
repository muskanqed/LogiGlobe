import { NextResponse } from "next/server"
import { ZodError } from "zod"
import {
  partnerRegistrationSchema,
  fleetDetailSchema,
  type PartnerRegistrationData,
  type FleetDetailData,
} from "@/lib/validation/partner-schemas"
import { createEmailTransporter } from "@/lib/email/config"
import {
  generatePartnerRegistrationSubject,
  generatePartnerRegistrationEmailHtml,
  generatePartnerRegistrationEmailText,
  generatePartnerRegistrationConfirmationHtml,
  generatePartnerRegistrationConfirmationText,
  generateFleetDetailSubject,
  generateFleetDetailEmailHtml,
  generateFleetDetailEmailText,
  generateFleetDetailConfirmationHtml,
  generateFleetDetailConfirmationText,
} from "@/lib/email/partner-templates"

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.SMTP_USER || "support@rolofleets.com"
const FROM_EMAIL = process.env.SMTP_FROM || process.env.SMTP_USER || "support@rolofleets.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const formType = body.formType as "partner" | "fleet"

    if (!formType || (formType !== "partner" && formType !== "fleet")) {
      return NextResponse.json(
        { error: "Invalid form type. Must be 'partner' or 'fleet'" },
        { status: 400 }
      )
    }

    // Validate based on form type
    let validatedData: PartnerRegistrationData | FleetDetailData
    let subject: string
    let htmlContent: string
    let textContent: string
    let confirmationHtml: string
    let confirmationText: string
    let recipientName: string
    let recipientEmail: string

    if (formType === "partner") {
      validatedData = partnerRegistrationSchema.parse(body)

      // Check honeypot field
      if (validatedData.website) {
        return NextResponse.json(
          { error: "Invalid submission detected" },
          { status: 400 }
        )
      }

      recipientName = validatedData.name
      recipientEmail = validatedData.email

      // Generate email content for partner registration
      subject = generatePartnerRegistrationSubject(validatedData.name)
      htmlContent = generatePartnerRegistrationEmailHtml(validatedData)
      textContent = generatePartnerRegistrationEmailText(validatedData)
      confirmationHtml = generatePartnerRegistrationConfirmationHtml(validatedData.name)
      confirmationText = generatePartnerRegistrationConfirmationText(validatedData.name)
    } else {
      validatedData = fleetDetailSchema.parse(body)

      // Check honeypot field
      if (validatedData.website) {
        return NextResponse.json(
          { error: "Invalid submission detected" },
          { status: 400 }
        )
      }

      recipientName = validatedData.fleetName
      recipientEmail = validatedData.email

      // Generate email content for fleet registration
      subject = generateFleetDetailSubject(validatedData.fleetName)
      htmlContent = generateFleetDetailEmailHtml(validatedData)
      textContent = generateFleetDetailEmailText(validatedData)
      confirmationHtml = generateFleetDetailConfirmationHtml(validatedData.fleetName)
      confirmationText = generateFleetDetailConfirmationText(validatedData.fleetName)
    }

    // Create email transporter
    const transporter = createEmailTransporter()

    // Send notification email to support team
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: subject,
      html: htmlContent,
      text: textContent,
    })

    // Send confirmation email to the applicant
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: recipientEmail,
      subject: `Thank You for Your Interest in ROLO Fleets`,
      html: confirmationHtml,
      text: confirmationText,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Partner form submission error:", error)

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
          error: "Failed to send emails. Please try again later.",
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
