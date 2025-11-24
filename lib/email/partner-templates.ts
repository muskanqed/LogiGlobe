import type { PartnerRegistrationData, FleetDetailData } from "@/lib/validation/partner-schemas"

// ===== PARTNER REGISTRATION EMAIL TEMPLATES =====

export function generatePartnerRegistrationSubject(name: string): string {
  return `[ROLO-PARTNER] New Partnership Inquiry from ${name}`
}

export function generatePartnerRegistrationEmailHtml(data: PartnerRegistrationData): string {
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
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1e3a5f; }
    .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #1e3a5f; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Partnership Inquiry</h1>
    </div>
    <div class="content">
      <p>You have received a new partnership inquiry through the ROLO Fleets partner registration form.</p>

      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>

      <div class="field">
        <div class="label">Organisation:</div>
        <div class="value">${data.organisation}</div>
      </div>

      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>

      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>

      <div class="field">
        <div class="label">MSME Act 2006 Registered:</div>
        <div class="value">${data.msme === "yes" ? "Yes" : "No"}</div>
      </div>
    </div>
    <div class="footer">
      <p>This inquiry was submitted through the ROLO Fleets partner registration form.</p>
      <p>Please respond within 24-48 hours to maintain partner engagement.</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export function generatePartnerRegistrationEmailText(data: PartnerRegistrationData): string {
  return `
NEW PARTNERSHIP INQUIRY
========================

You have received a new partnership inquiry through the ROLO Fleets partner registration form.

Name: ${data.name}
Organisation: ${data.organisation}
Email: ${data.email}
Phone: ${data.phone}
MSME Act 2006 Registered: ${data.msme === "yes" ? "Yes" : "No"}

---
This inquiry was submitted through the ROLO Fleets partner registration form.
Please respond within 24-48 hours to maintain partner engagement.
  `.trim()
}

export function generatePartnerRegistrationConfirmationHtml(name: string): string {
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
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Interest!</h1>
    </div>
    <div class="content">
      <p class="message">Dear <span class="highlight">${name}</span>,</p>

      <p class="message">
        Thank you for expressing interest in partnering with ROLO Fleets. We have received your partnership inquiry
        and are excited about the potential opportunity to work together.
      </p>

      <p class="message">
        Our partnership team will carefully review your information and get back to you within
        <span class="highlight">24-48 hours</span> with the next steps.
      </p>

      <p class="message">
        We look forward to exploring how we can grow together and create mutual success in the logistics industry.
      </p>

      <p class="message">
        Best regards,<br>
        <strong>ROLO Fleets Partnership Team</strong>
      </p>
    </div>
    <div class="footer">
      <p>If you have any immediate questions, please don't hesitate to contact us at support@rolofleets.com</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export function generatePartnerRegistrationConfirmationText(name: string): string {
  return `
THANK YOU FOR YOUR INTEREST!
============================

Dear ${name},

Thank you for expressing interest in partnering with ROLO Fleets. We have received your partnership inquiry
and are excited about the potential opportunity to work together.

Our partnership team will carefully review your information and get back to you within 24-48 hours
with the next steps.

We look forward to exploring how we can grow together and create mutual success in the logistics industry.

Best regards,
ROLO Fleets Partnership Team

---
If you have any immediate questions, please don't hesitate to contact us at support@rolofleets.com
  `.trim()
}

// ===== FLEET DETAIL EMAIL TEMPLATES =====

export function generateFleetDetailSubject(fleetName: string): string {
  return `[ROLO-FLEET] New Fleet Registration from ${fleetName}`
}

export function generateFleetDetailEmailHtml(data: FleetDetailData): string {
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
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Fleet Partner Registration</h1>
    </div>
    <div class="content">
      <p>You have received a new fleet partner registration through the ROLO Fleets fleet registration form.</p>

      <div class="section">
        <div class="section-title">Contact Information</div>

        <div class="field">
          <div class="label">Fleet Partner Name:</div>
          <div class="value">${data.fleetName}</div>
        </div>

        <div class="field">
          <div class="label">Organisation:</div>
          <div class="value">${data.organisation}</div>
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
        <div class="section-title">Location Details</div>

        <div class="field">
          <div class="label">City:</div>
          <div class="value">${data.city}</div>
        </div>

        <div class="field">
          <div class="label">State:</div>
          <div class="value">${data.state}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Fleet Information</div>

        <div class="field">
          <div class="label">Operations Type:</div>
          <div class="value">${data.operationsType}</div>
        </div>

        <div class="field">
          <div class="label">Vehicle Count:</div>
          <div class="value">${data.vehicleCount} vehicles</div>
        </div>

        <div class="field">
          <div class="label">Vehicle Type:</div>
          <div class="value">${data.vehicleType}</div>
        </div>

        <div class="field">
          <div class="label">Primary Routes:</div>
          <div class="value">${data.primaryRoutes}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>This registration was submitted through the ROLO Fleets fleet partner registration form.</p>
      <p>Please respond within 24-48 hours to onboard this fleet partner.</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export function generateFleetDetailEmailText(data: FleetDetailData): string {
  return `
NEW FLEET PARTNER REGISTRATION
===============================

You have received a new fleet partner registration through the ROLO Fleets fleet registration form.

CONTACT INFORMATION
-------------------
Fleet Partner Name: ${data.fleetName}
Organisation: ${data.organisation}
Email: ${data.email}
Phone: ${data.phone}

LOCATION DETAILS
----------------
City: ${data.city}
State: ${data.state}

FLEET INFORMATION
-----------------
Operations Type: ${data.operationsType}
Vehicle Count: ${data.vehicleCount} vehicles
Vehicle Type: ${data.vehicleType}
Primary Routes: ${data.primaryRoutes}

---
This registration was submitted through the ROLO Fleets fleet partner registration form.
Please respond within 24-48 hours to onboard this fleet partner.
  `.trim()
}

export function generateFleetDetailConfirmationHtml(fleetName: string): string {
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
    .benefits { background-color: white; padding: 20px; margin: 20px 0; border-left: 4px solid #1e3a5f; }
    .benefits ul { margin: 10px 0; padding-left: 20px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to ROLO Fleets!</h1>
    </div>
    <div class="content">
      <p class="message">Dear <span class="highlight">${fleetName}</span>,</p>

      <p class="message">
        Thank you for registering your fleet with ROLO Fleets. We have received your registration details
        and are thrilled to have you join our extensive network of trusted fleet partners.
      </p>

      <p class="message">
        Our fleet onboarding team will review your information and reach out to you within
        <span class="highlight">24-48 hours</span> to begin the partnership process.
      </p>

      <div class="benefits">
        <strong>What's Next?</strong>
        <ul>
          <li>Our team will verify your fleet details</li>
          <li>You'll receive onboarding documentation and partnership agreements</li>
          <li>We'll schedule a call to discuss operations and integration</li>
          <li>Start receiving consistent business opportunities across our network</li>
        </ul>
      </div>

      <p class="message">
        We look forward to a long and prosperous partnership with you!
      </p>

      <p class="message">
        Best regards,<br>
        <strong>ROLO Fleets Partnership Team</strong>
      </p>
    </div>
    <div class="footer">
      <p>If you have any immediate questions, please don't hesitate to contact us at support@rolofleets.com</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export function generateFleetDetailConfirmationText(fleetName: string): string {
  return `
WELCOME TO ROLO FLEETS!
=======================

Dear ${fleetName},

Thank you for registering your fleet with ROLO Fleets. We have received your registration details
and are thrilled to have you join our extensive network of trusted fleet partners.

Our fleet onboarding team will review your information and reach out to you within 24-48 hours
to begin the partnership process.

WHAT'S NEXT?
------------
- Our team will verify your fleet details
- You'll receive onboarding documentation and partnership agreements
- We'll schedule a call to discuss operations and integration
- Start receiving consistent business opportunities across our network

We look forward to a long and prosperous partnership with you!

Best regards,
ROLO Fleets Partnership Team

---
If you have any immediate questions, please don't hesitate to contact us at support@rolofleets.com
  `.trim()
}
