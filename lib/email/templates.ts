import type { ContactFormData } from "@/lib/validation/contact-schema"

/**
 * Generates HTML email template for contact form submissions
 */
export function generateContactEmailHtml(data: ContactFormData): string {
  return `
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
            <p>LogiGlobe - Landing Page</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Name:</div>
              <div class="field-value">${data.name}</div>
            </div>

            <div class="field">
              <div class="field-label">Email:</div>
              <div class="field-value">
                <a href="mailto:${data.email}">${data.email}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Phone:</div>
              <div class="field-value">
                <a href="tel:${data.phone}">${data.phone}</a>
              </div>
            </div>

            ${data.company ? `
            <div class="field">
              <div class="field-label">Company:</div>
              <div class="field-value">${data.company}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="field-label">Message:</div>
              <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>

            <div class="footer">
              <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              <p>This email was sent from the LogiGlobe contact form</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Generates plain text email for contact form submissions
 */
export function generateContactEmailText(data: ContactFormData): string {
  return `
New Contact Form Submission - LogiGlobe

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}

Message:
${data.message}

---
Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
  `.trim()
}

/**
 * Generates email subject line for contact form
 * Includes [LOGIGLOBE-CONTACT] tag for easy filtering in inbox
 */
export function generateContactSubject(name: string): string {
  return `[LOGIGLOBE-CONTACT] New Inquiry from ${name}`
}

/**
 * Generates HTML confirmation email template for users
 */
export function generateConfirmationEmailHtml(name: string): string {
  return `
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
            padding: 30px 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
          }
          .header p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
          }
          .content {
            background-color: #f9f9f9;
            padding: 40px 30px;
            border: 1px solid #ddd;
            border-radius: 0 0 5px 5px;
          }
          .message {
            background-color: white;
            padding: 20px;
            border-left: 4px solid #1e3a5f;
            margin: 20px 0;
          }
          .contact-info {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            margin-top: 30px;
          }
          .contact-info h3 {
            color: #1e3a5f;
            margin-top: 0;
          }
          .contact-item {
            margin: 10px 0;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 12px;
          }
          .checkmark {
            width: 60px;
            height: 60px;
            background-color: #4CAF50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: white;
            font-size: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Us!</h1>
            <p>LogiGlobe - Your Trusted Logistics Partner</p>
          </div>
          <div class="content">
            <div class="checkmark">✓</div>

            <h2 style="text-align: center; color: #1e3a5f; margin-bottom: 10px;">
              Hi ${name},
            </h2>

            <div class="message">
              <p style="margin-top: 0;">
                Thank you for reaching out to LogiGlobe! We have received your message
                and our team will review it shortly.
              </p>
              <p>
                One of our logistics specialists will get back to you within <strong>24-48 hours</strong>
                to discuss your requirements and how we can help optimize your logistics operations.
              </p>
              <p style="margin-bottom: 0;">
                We appreciate your interest in our services and look forward to partnering with you.
              </p>
            </div>

            <div class="contact-info">
              <h3>Need Immediate Assistance?</h3>
              <div class="contact-item">
                <strong>Email:</strong> <a href="mailto:support@logiglobe.com">support@logiglobe.com</a>
              </div>
              <div class="contact-item">
                <strong>Website:</strong> <a href="https://logiglobe.com">www.logiglobe.com</a>
              </div>
            </div>

            <div class="footer">
              <p>This is an automated confirmation email from LogiGlobe.</p>
              <p>Please do not reply to this email. For any queries, contact us at support@logiglobe.com</p>
              <p style="margin-top: 15px;">&copy; ${new Date().getFullYear()} LogiGlobe. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Generates plain text confirmation email for users
 */
export function generateConfirmationEmailText(name: string): string {
  return `
Hi ${name},

Thank you for contacting LogiGlobe!

We have received your message and our team will review it shortly. One of our logistics specialists will get back to you within 24-48 hours to discuss your requirements and how we can help optimize your logistics operations.

We appreciate your interest in our services and look forward to partnering with you.

Need Immediate Assistance?
Email: support@logiglobe.com
Website: www.logiglobe.com

---
This is an automated confirmation email from LogiGlobe.
Please do not reply to this email. For any queries, contact us at support@logiglobe.com

© ${new Date().getFullYear()} LogiGlobe. All rights reserved.
  `.trim()
}

/**
 * Generates subject line for confirmation email
 */
export function generateConfirmationSubject(): string {
  return "Thank You for Contacting LogiGlobe - We'll Be In Touch Soon!"
}
