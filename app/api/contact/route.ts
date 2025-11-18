import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import type { ContactFormData } from "@/types/contact"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation (basic)
const phoneRegex = /^[\d\s\-\+\(\)]+$/

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      )
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      )
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #1e3a5f;
              color: #f5f5dc;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: #f9f9f9;
              padding: 30px;
              border: 1px solid #ddd;
              border-radius: 0 0 5px 5px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: bold;
              color: #1e3a5f;
              margin-bottom: 5px;
            }
            .field-value {
              padding: 10px;
              background-color: white;
              border-left: 3px solid #1e3a5f;
              margin-top: 5px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>ROLO Fleets - Landing Page</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${body.name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">
                  <a href="mailto:${body.email}">${body.email}</a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">
                  <a href="tel:${body.phone}">${body.phone}</a>
                </div>
              </div>

              ${body.company ? `
              <div class="field">
                <div class="field-label">Company:</div>
                <div class="field-value">${body.company}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${body.message.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                <p>This email was sent from the ROLO Fleets contact form</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version
    const emailText = `
New Contact Form Submission - ROLO Fleets

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
${body.company ? `Company: ${body.company}` : ''}

Message:
${body.message}

---
Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"ROLO Fleets Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      text: emailText,
      html: emailHtml,
    })

    console.log("Message sent: %s", info.messageId)

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
