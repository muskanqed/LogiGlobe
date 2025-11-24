import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer"

/**
 * Email configuration settings from environment variables
 */
export const emailConfig = {
  host: process.env.SMTP_HOST || "smtp.zoho.in",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
  from: process.env.SMTP_FROM || process.env.SMTP_USER || "",
  to: process.env.CONTACT_EMAIL || process.env.SMTP_USER || "",
} as const

/**
 * Creates and returns a configured nodemailer transporter
 * @returns Nodemailer transporter instance
 */
export function createEmailTransporter(): Transporter {
  return nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: emailConfig.auth,
  })
}

/**
 * Validates email configuration
 * @throws Error if required environment variables are missing
 */
export function validateEmailConfig(): void {
  const requiredVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"]
  const missing = requiredVars.filter((varName) => !process.env[varName])

  if (missing.length > 0) {
    throw new Error(
      `Missing required email configuration: ${missing.join(", ")}`
    )
  }
}
