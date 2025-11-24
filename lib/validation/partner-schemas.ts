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

// Partner Registration Form Schema
export const partnerRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .refine((name) => !containsSpam(name), {
      message: "Invalid content detected",
    })
    .refine((name) => !/^\d+$/.test(name), {
      message: "Name cannot be only numbers",
    }),

  organisation: z
    .string()
    .min(2, "Organisation name must be at least 2 characters")
    .max(200, "Organisation name must not exceed 200 characters")
    .refine((org) => !containsSpam(org), {
      message: "Invalid content detected",
    }),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must not exceed 255 characters")
    .refine((email) => !isDisposableEmail(email), {
      message: "Please use a valid business email address",
    }),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must not exceed 20 characters")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),

  msme: z.enum(["yes", "no"], {
    required_error: "Please select MSME Act 2006 status",
  }),

  // Honeypot field for bot detection
  website: z.string().max(0).optional().or(z.literal("")),
})

export type PartnerRegistrationData = z.infer<typeof partnerRegistrationSchema>

// Fleet Detail Form Schema
export const fleetDetailSchema = z.object({
  fleetName: z
    .string()
    .min(2, "Fleet partner name must be at least 2 characters")
    .max(100, "Fleet partner name must not exceed 100 characters")
    .refine((name) => !containsSpam(name), {
      message: "Invalid content detected",
    }),

  organisation: z
    .string()
    .min(2, "Organisation name must be at least 2 characters")
    .max(200, "Organisation name must not exceed 200 characters")
    .refine((org) => !containsSpam(org), {
      message: "Invalid content detected",
    }),

  operationsType: z
    .string()
    .min(2, "Operations type must be at least 2 characters")
    .max(100, "Operations type must not exceed 100 characters"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must not exceed 20 characters")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must not exceed 255 characters")
    .refine((email) => !isDisposableEmail(email), {
      message: "Please use a valid business email address",
    }),

  city: z
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(100, "City name must not exceed 100 characters"),

  state: z
    .string()
    .min(2, "State name must be at least 2 characters")
    .max(100, "State name must not exceed 100 characters"),

  vehicleCount: z
    .number()
    .int("Vehicle count must be a whole number")
    .positive("Vehicle count must be greater than 0")
    .max(10000, "Vehicle count seems unusually high"),

  vehicleType: z
    .string()
    .min(2, "Vehicle type must be at least 2 characters")
    .max(200, "Vehicle type must not exceed 200 characters"),

  primaryRoutes: z
    .string()
    .min(5, "Primary routes must be at least 5 characters")
    .max(500, "Primary routes must not exceed 500 characters")
    .refine((routes) => !containsSpam(routes), {
      message: "Invalid content detected",
    })
    .refine((routes) => !hasExcessiveUrls(routes), {
      message: "Too many URLs detected",
    }),

  // Honeypot field for bot detection
  website: z.string().max(0).optional().or(z.literal("")),
})

export type FleetDetailData = z.infer<typeof fleetDetailSchema>
