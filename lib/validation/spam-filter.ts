/**
 * Spam detection and validation utilities
 */

// Common spam keywords and patterns
const SPAM_KEYWORDS = [
  "viagra",
  "casino",
  "lottery",
  "prize",
  "winner",
  "click here",
  "buy now",
  "limited time",
  "act now",
  "free money",
  "make money fast",
  "work from home",
  "no experience",
  "bitcoin",
  "crypto",
  "investment opportunity",
] as const

// Suspicious patterns
const SUSPICIOUS_PATTERNS = [
  /https?:\/\/[^\s]+/gi, // Multiple URLs
  /\b[A-Z]{10,}\b/g, // Excessive caps
  /(.)\1{4,}/g, // Repeated characters
] as const

/**
 * Checks if message contains spam keywords
 */
export function containsSpamKeywords(text: string): boolean {
  const lowerText = text.toLowerCase()
  return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword))
}

/**
 * Checks for suspicious patterns in message
 */
export function hasSuspiciousPatterns(text: string): {
  isSpam: boolean
  reason?: string
} {
  // Check for excessive URLs (more than 3)
  const urlMatches = text.match(/https?:\/\/[^\s]+/gi)
  if (urlMatches && urlMatches.length > 3) {
    return { isSpam: true, reason: "Too many URLs" }
  }

  // Check for excessive capitalization (more than 30% caps)
  const capsCount = (text.match(/[A-Z]/g) || []).length
  const letterCount = (text.match(/[a-zA-Z]/g) || []).length
  if (letterCount > 0 && capsCount / letterCount > 0.3) {
    return { isSpam: true, reason: "Excessive capitalization" }
  }

  // Check for repeated characters
  if (/(.)\1{5,}/.test(text)) {
    return { isSpam: true, reason: "Repeated characters" }
  }

  return { isSpam: false }
}

/**
 * Validates email is not from temporary/disposable domains
 */
export function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    "tempmail.com",
    "throwaway.email",
    "guerrillamail.com",
    "10minutemail.com",
    "mailinator.com",
    "trashmail.com",
  ]

  const domain = email.split("@")[1]?.toLowerCase()
  return disposableDomains.some((disposable) => domain?.includes(disposable))
}

/**
 * Comprehensive spam check
 */
export function isSpamMessage(data: {
  name: string
  email: string
  message: string
}): { isSpam: boolean; reason?: string } {
  // Check for spam keywords
  if (containsSpamKeywords(data.message) || containsSpamKeywords(data.name)) {
    return { isSpam: true, reason: "Contains spam keywords" }
  }

  // Check for suspicious patterns
  const patternCheck = hasSuspiciousPatterns(data.message)
  if (patternCheck.isSpam) {
    return patternCheck
  }

  // Check for disposable email
  if (isDisposableEmail(data.email)) {
    return { isSpam: true, reason: "Disposable email address" }
  }

  // Check message length (too short or suspiciously long)
  if (data.message.length < 10) {
    return { isSpam: true, reason: "Message too short" }
  }

  if (data.message.length > 5000) {
    return { isSpam: true, reason: "Message too long" }
  }

  return { isSpam: false }
}

/**
 * Generate unique reference ID for email tracking
 * Format: LOGIGLOBE-YYYYMMDD-XXXXX
 */
export function generateReferenceId(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  // Generate random 5-digit number
  const random = Math.floor(10000 + Math.random() * 90000)

  return `LOGIGLOBE-${year}${month}${day}-${random}`
}
