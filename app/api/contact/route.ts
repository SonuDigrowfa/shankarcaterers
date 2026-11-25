import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EVENT_TYPE_LABELS: Record<string, string> = {
  wedding: 'Wedding / Reception',
  birthday: 'Birthday Party',
  corporate: 'Corporate Event',
  'chaat-counter': 'Live Chaat Counter',
  'puja-kitty': 'Puja / Housewarming / Kitty Party',
  anniversary: 'Anniversary',
  other: 'Custom Celebration',
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatEventDate(rawDate: string): string {
  const parsed = new Date(`${rawDate}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return rawDate
  return parsed.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function wrapEmailLayout(badge: string, heading: string, bodyHtml: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <body style="margin:0;padding:0;background-color:#fdf6ec;font-family:'Segoe UI',Arial,sans-serif;color:#23120b;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf6ec;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #f2dcc2;box-shadow:0 6px 24px rgba(124,29,24,0.08);">
                <!-- Brand Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#7c1d18 0%,#c94a18 58%,#d97706 100%);padding:28px 28px 24px;text-align:center;border-bottom:4px solid #f4c465;">
                    <div style="display:inline-block;background-color:rgba(255,255,255,0.16);color:#fef3c7;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:5px 14px;border-radius:999px;margin-bottom:10px;">
                      ${badge}
                    </div>
                    <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;font-family:Georgia,'Times New Roman',serif;">
                      Shankar Caterers &amp; Sweets
                    </h1>
                    <p style="margin:6px 0 0;color:#fde68a;font-size:13px;">
                      Authentic North Indian Catering &bull; Karkardooma, East Delhi
                    </p>
                  </td>
                </tr>

                <!-- Main Body -->
                <tr>
                  <td style="padding:28px;">
                    <h2 style="margin:0 0 16px;font-size:20px;color:#7c1d18;font-family:Georgia,'Times New Roman',serif;">
                      ${heading}
                    </h2>
                    ${bodyHtml}
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color:#2b0f0e;padding:20px 28px;text-align:center;color:#f3e8dc;font-size:12px;line-height:1.6;">
                    <strong style="color:#fbbf24;">Shankar Caterers &amp; Sweets</strong><br />
                    Shop No 115, Street No 13, near Shiv Mandir, Karkardooma, East Delhi 110092<br />
                    Phone: <a href="tel:+919818079174" style="color:#fbbf24;text-decoration:none;font-weight:600;">+91 98180 79174</a> &bull; Open 7 Days (8:00 AM – 11:00 PM)
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, eventDate, guestCount, message } = body

    if (!name || !email || !phone || !eventType || !eventDate || !guestCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER?.trim()
    const gmailPass = process.env.GMAIL_PASSWORD?.trim()

    if (!gmailUser || !gmailPass) {
      console.error('Contact form error: GMAIL_USER or GMAIL_PASSWORD is not configured.')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    })

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safePhone = escapeHtml(String(phone))
    const cleanPhoneDigits = String(phone).replace(/[^\d+]/g, '')
    const whatsappDigits = cleanPhoneDigits.replace(/^\+/, '')
    const formattedEventType = escapeHtml(
      EVENT_TYPE_LABELS[String(eventType)] || String(eventType)
    )
    const formattedDate = escapeHtml(formatEventDate(String(eventDate)))
    const safeGuestCount = escapeHtml(String(guestCount))
    const safeMessage = escapeHtml(String(message || 'No additional message provided'))

    const detailsTable = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#fffaf3;border:1px solid #f2dcc2;border-radius:12px;overflow:hidden;margin:16px 0 22px;">
        <tr>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:13px;color:#785443;width:38%;"><strong>Customer Name</strong></td>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:14px;color:#23120b;font-weight:600;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:13px;color:#785443;"><strong>Phone Number</strong></td>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:14px;font-weight:600;">
            <a href="tel:${cleanPhoneDigits}" style="color:#c94a18;text-decoration:none;">${safePhone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:13px;color:#785443;"><strong>Email Address</strong></td>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:14px;">
            <a href="mailto:${safeEmail}" style="color:#c94a18;text-decoration:none;">${safeEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:13px;color:#785443;"><strong>Event Type</strong></td>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:14px;color:#23120b;font-weight:600;">${formattedEventType}</td>
        </tr>
        <tr>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:13px;color:#785443;"><strong>Event Date</strong></td>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:14px;color:#23120b;font-weight:600;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:13px;color:#785443;"><strong>Guest Count</strong></td>
          <td style="padding:11px 16px;border-bottom:1px solid #f2dcc2;font-size:14px;color:#23120b;font-weight:600;">${safeGuestCount} Guests</td>
        </tr>
        <tr>
          <td style="padding:11px 16px;font-size:13px;color:#785443;vertical-align:top;"><strong>Location / Notes</strong></td>
          <td style="padding:11px 16px;font-size:14px;color:#23120b;line-height:1.5;">${safeMessage}</td>
        </tr>
      </table>
    `

    const ownerHtml = wrapEmailLayout(
      'New Catering Lead',
      'New Booking Request Received',
      `
        <p style="margin:0 0 8px;font-size:14px;color:#5c4033;line-height:1.6;">
          You have received a new catering inquiry from your website. Details are below:
        </p>
        ${detailsTable}
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px;">
          <tr>
            <td style="padding-right:10px;">
              <a href="tel:${cleanPhoneDigits}" style="display:inline-block;background-color:#c94a18;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:11px 20px;border-radius:999px;">
                Call ${safeName}
              </a>
            </td>
            <td>
              <a href="https://wa.me/${whatsappDigits}" style="display:inline-block;background-color:#1a8f48;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:11px 20px;border-radius:999px;">
                WhatsApp Customer
              </a>
            </td>
          </tr>
        </table>
      `
    )

    const customerHtml = wrapEmailLayout(
      'Booking Confirmation',
      `Namaste ${safeName}, Thank You for Contacting Us!`,
      `
        <p style="margin:0 0 12px;font-size:14px;color:#5c4033;line-height:1.6;">
          We have received your catering inquiry for <strong>${formattedEventType}</strong> on <strong>${formattedDate}</strong> (${safeGuestCount} guests). Our catering team will call you shortly on <strong>${safePhone}</strong> to discuss menu options and pricing.
        </p>
        ${detailsTable}
        <p style="margin:0 0 16px;font-size:14px;color:#5c4033;line-height:1.6;">
          Need an immediate quote or tasting? Reach us directly via phone or WhatsApp:
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-right:10px;">
              <a href="tel:+919818079174" style="display:inline-block;background-color:#c94a18;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:11px 20px;border-radius:999px;">
                Call +91 98180 79174
              </a>
            </td>
            <td>
              <a href="https://wa.me/919818079174" style="display:inline-block;background-color:#1a8f48;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:11px 20px;border-radius:999px;">
                Chat on WhatsApp
              </a>
            </td>
          </tr>
        </table>
      `
    )

    const sender = `"Shankar Caterers & Sweets" <${gmailUser}>`

    // Send lead notification to business owner
    await transporter.sendMail({
      from: sender,
      to: 'sonunishad.digrowfa@gmail.com',
      subject: `New Catering Lead: ${formattedEventType} (${safeGuestCount} guests) - ${formattedDate}`,
      html: ownerHtml,
      replyTo: String(email),
    })

    // Best-effort confirmation email to customer
    try {
      await transporter.sendMail({
        from: sender,
        to: String(email),
        subject: 'Booking Request Received - Shankar Caterers & Sweets',
        html: customerHtml,
      })
    } catch (confirmError) {
      console.warn('Customer confirmation email failed (lead was still delivered):', confirmError)
    }

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    )
  }
}
