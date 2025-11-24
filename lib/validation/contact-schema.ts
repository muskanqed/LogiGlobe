import { z } from "zod"

/**
 * Common spam keywords for detection
 */
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
  "bitcoin investment",
  "crypto investment",
]

/**
 * Temporary/disposable email domains to block
 */
const DISPOSABLE_DOMAINS = [
  "tempmail.com",
  "throwaway.email",
  "guerrillamail.com",
  "10minutemail.com",
  "mailinator.com",
  "trashmail.com",
  "temp-mail.org",
  "fakeinbox.com",
]

/**
 * Check if text contains spam keywords
 */
function containsSpam(text: string): boolean {
  const lowerText = text.toLowerCase()
  return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword))
}

/**
 * Check if email is from disposable domain
 */
function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  return DISPOSABLE_DOMAINS.some((disposable) => domain?.includes(disposable))
}

/**
 * Check for excessive URLs in text
 */
function hasExcessiveUrls(text: string): boolean {
  const urlMatches = text.match(/https?:\/\/[^\s]+/gi)
  return (urlMatches?.length || 0) > 3
}

/**
 * Check for excessive capitalization
 */
function hasExcessiveCaps(text: string): boolean {
  const capsCount = (text.match(/[A-Z]/g) || []).length
  const letterCount = (text.match(/[a-zA-Z]/g) || []).length
  return letterCount > 0 && capsCount / letterCount > 0.5
}

/**
 * Contact form validation schema with spam detection
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .refine((name) => !containsSpam(name), {
      message: "Invalid content detected",
    })
    .refine((name) => !/^\d+$/.test(name), {
      message: "Name cannot be only numbers",
    }),

  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email is too long")
    .refine((email) => !isDisposableEmail(email), {
      message: "Please use a valid email address",
    }),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number is too long")
    .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number format"),

  company: z
    .string()
    .max(200, "Company name is too long")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long (max 2000 characters)")
    .refine((msg) => !containsSpam(msg), {
      message: "Invalid content detected",
    })
    .refine((msg) => !hasExcessiveUrls(msg), {
      message: "Too many links in message",
    })
    .refine((msg) => !hasExcessiveCaps(msg), {
      message: "Please avoid excessive capitalization",
    }),

  // Honeypot field - should be empty
  website: z.string().max(0, "Invalid submission").optional().or(z.literal("")),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
