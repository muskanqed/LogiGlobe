export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

export interface ContactEmailTemplate {
  from: string
  to: string
  subject: string
  html: string
  text: string
}
