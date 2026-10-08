import type { CareersApplicationData } from "@/lib/validation/careers-schema"

// ===== CAREERS APPLICATION EMAIL TEMPLATES =====

export function generateCareersApplicationSubject(firstName: string, lastName: string): string {
  return `[LOGIGLOBE-CAREERS] New Job Application from ${firstName} ${lastName}`
}

export function generateCareersApplicationEmailHtml(
  data: CareersApplicationData,
  resumeFileName: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e3a5f; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 18px; font-weight: bold; color: #1e3a5f; margin-bottom: 10px; border-bottom: 2px solid #1e3a5f; padding-bottom: 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #1e3a5f; }
    .resume-info { background-color: #fff4e6; padding: 15px; border-left: 4px solid #ff9800; margin-top: 15px; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Job Application</h1>
    </div>
    <div class="content">
      <p>You have received a new job application through the LogiGlobe careers page.</p>

      <div class="section">
        <div class="section-title">Personal Information</div>

        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${data.firstName} ${data.lastName}</div>
        </div>

        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>

        <div class="field">
          <div class="label">Phone:</div>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Background</div>

        <div class="field">
          <div class="label">Qualification:</div>
          <div class="value">${data.qualification}</div>
        </div>

        <div class="field">
          <div class="label">Work Experience:</div>
          <div class="value">${data.experience}</div>
        </div>
      </div>

      ${data.message ? `
      <div class="section">
        <div class="section-title">Applicant Message</div>
        <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}

      <div class="resume-info">
        <strong>📎 Resume Attached:</strong> ${resumeFileName}
      </div>
    </div>
    <div class="footer">
      <p>This application was submitted through the LogiGlobe careers page.</p>
      <p>Please review the resume and respond within 3-5 business days.</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export function generateCareersApplicationEmailText(
  data: CareersApplicationData,
  resumeFileName: string
): string {
  return `
NEW JOB APPLICATION
===================

You have received a new job application through the LogiGlobe careers page.

PERSONAL INFORMATION
--------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

PROFESSIONAL BACKGROUND
-----------------------
Qualification: ${data.qualification}
Work Experience: ${data.experience}

${data.message ? `APPLICANT MESSAGE
-----------------
${data.message}

` : ''}RESUME ATTACHED
---------------
${resumeFileName}

---
This application was submitted through the LogiGlobe careers page.
Please review the resume and respond within 3-5 business days.
  `.trim()
}

export function generateCareersApplicationConfirmationHtml(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e3a5f; color: white; padding: 30px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .message { font-size: 16px; margin-bottom: 20px; }
    .highlight { color: #1e3a5f; font-weight: bold; }
    .process-box { background-color: white; padding: 20px; margin: 20px 0; border-left: 4px solid #1e3a5f; }
    .process-box ul { margin: 10px 0; padding-left: 20px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Application Received!</h1>
    </div>
    <div class="content">
      <p class="message">Dear <span class="highlight">${firstName}</span>,</p>

      <p class="message">
        Thank you for applying to join the LogiGlobe team. We have successfully received your
        application and resume.
      </p>

      <p class="message">
        Your interest in contributing to India's leading logistics company is greatly appreciated.
        Our HR team will carefully review your qualifications and experience.
      </p>

      <div class="process-box">
        <strong>What Happens Next?</strong>
        <ul>
          <li>Our recruitment team will review your application within 3-5 business days</li>
          <li>If your profile matches our requirements, we'll contact you for the next steps</li>
          <li>You may be invited for an interview or assessment</li>
          <li>We'll keep you updated throughout the selection process</li>
        </ul>
      </div>

      <p class="message">
        We appreciate your patience during the review process. If your qualifications align with
        our current openings, we will reach out to you soon.
      </p>

      <p class="message">
        Best regards,<br>
        <strong>LogiGlobe HR Team</strong>
      </p>
    </div>
    <div class="footer">
      <p>If you have any questions, please contact us at support@logiglobe.com</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export function generateCareersApplicationConfirmationText(firstName: string): string {
  return `
APPLICATION RECEIVED!
=====================

Dear ${firstName},

Thank you for applying to join the LogiGlobe team. We have successfully received your
application and resume.

Your interest in contributing to India's leading logistics company is greatly appreciated.
Our HR team will carefully review your qualifications and experience.

WHAT HAPPENS NEXT?
------------------
- Our recruitment team will review your application within 3-5 business days
- If your profile matches our requirements, we'll contact you for the next steps
- You may be invited for an interview or assessment
- We'll keep you updated throughout the selection process

We appreciate your patience during the review process. If your qualifications align with
our current openings, we will reach out to you soon.

Best regards,
LogiGlobe HR Team

---
If you have any questions, please contact us at support@logiglobe.com
  `.trim()
}
