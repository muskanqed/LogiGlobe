/**
 * Email module - Centralized email configuration and utilities
 *
 * This module provides:
 * - Email transporter configuration
 * - Email template generation
 * - Email validation utilities
 */

export {
  emailConfig,
  createEmailTransporter,
  validateEmailConfig,
} from "./config"

export {
  generateContactEmailHtml,
  generateContactEmailText,
  generateContactSubject,
  generateConfirmationEmailHtml,
  generateConfirmationEmailText,
  generateConfirmationSubject,
} from "./templates"
