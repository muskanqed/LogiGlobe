import { z } from "zod"

// Spam detection utilities
const SPAM_KEYWORDS = [
  "viagra", "casino", "lottery", "prize", "winner", "crypto",
  "investment opportunity", "get rich", "make money fast"
]

const DISPOSABLE_EMAIL_DOMAINS = [
  "tempmail.com", "throwaway.email", "guerrillamail.com",
  "10minutemail.com", "mailinator.com", "trashmail.com"
]

function containsSpam(text: string): boolean {
  const lowerText = text.toLowerCase()
  return SPAM_KEYWORDS.some(keyword => lowerText.includes(keyword))
}

function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  return DISPOSABLE_EMAIL_DOMAINS.some(disposable => domain?.includes(disposable))
}

function hasExcessiveUrls(text: string): boolean {
  const urlRegex = /(https?:\/\/[^\s]+)/gi
  const urls = text.match(urlRegex)
  return (urls?.length || 0) > 3
}

function hasExcessiveCaps(text: string): boolean {
  const capsCount = (text.match(/[A-Z]/g) || []).length
  const totalLetters = (text.match(/[a-zA-Z]/g) || []).length
  return totalLetters > 0 && capsCount / totalLetters > 0.6
}

// Careers Application Form Schema
export const careersApplicationSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .refine((name) => !containsSpam(name), {
      message: "Invalid content detected",
    })
    .refine((name) => !/^\d+$/.test(name), {
      message: "Name cannot be only numbers",
    }),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .refine((name) => !containsSpam(name), {
      message: "Invalid content detected",
    })
    .refine((name) => !/^\d+$/.test(name), {
      message: "Name cannot be only numbers",
    }),

  qualification: z
    .string()
    .min(2, "Qualification must be at least 2 characters")
    .max(200, "Qualification must not exceed 200 characters")
    .refine((qual) => !containsSpam(qual), {
      message: "Invalid content detected",
    }),

  experience: z
    .string()
    .min(1, "Work experience is required")
    .max(500, "Work experience must not exceed 500 characters")
    .refine((exp) => !containsSpam(exp), {
      message: "Invalid content detected",
    }),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must not exceed 255 characters")
    .refine((email) => !isDisposableEmail(email), {
      message: "Please use a valid professional email address",
    }),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must not exceed 20 characters")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),

  message: z
    .string()
    .max(2000, "Message must not exceed 2000 characters")
    .refine((msg) => !msg || !containsSpam(msg), {
      message: "Invalid content detected",
    })
    .refine((msg) => !msg || !hasExcessiveUrls(msg), {
      message: "Too many URLs detected",
    })
    .refine((msg) => !msg || !hasExcessiveCaps(msg), {
      message: "Please use normal capitalization",
    })
    .optional()
    .or(z.literal("")),

  // Honeypot field for bot detection
  website: z.string().max(0).optional().or(z.literal("")),
})

export type CareersApplicationData = z.infer<typeof careersApplicationSchema>

// File validation constants
export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
]

export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export function validateResumeFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: "Resume file is required" }
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: "Only PDF, DOC, and DOCX files are allowed" }
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: "File size must not exceed 5MB" }
  }

  return { valid: true }
}
