import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
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
    const safeEventType = escapeHtml(String(eventType))
    const safeEventDate = escapeHtml(String(eventDate))
    const safeGuestCount = escapeHtml(String(guestCount))
    const safeMessage = escapeHtml(String(message || 'No message provided'))

    const emailContent = `
      <h2>New Booking Request from Shankar Caterers &amp; Sweets</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Event Type:</strong> ${safeEventType}</p>
      <p><strong>Event Date:</strong> ${safeEventDate}</p>
      <p><strong>Number of Guests:</strong> ${safeGuestCount}</p>
      <p><strong>Location / Message:</strong></p>
      <p>${safeMessage}</p>
      <hr />
      <p><small>Sent from Shankar Caterers &amp; Sweets website booking form.</small></p>
    `

    // Send lead notification to business owner
    await transporter.sendMail({
      from: gmailUser,
      to: 'sonunishad.digrowfa@gmail.com',
      subject: `New Catering Inquiry: ${safeEventType} (${safeGuestCount} guests) on ${safeEventDate}`,
      html: emailContent,
      replyTo: String(email),
    })

    // Best-effort confirmation email to customer
    try {
      await transporter.sendMail({
        from: gmailUser,
        to: String(email),
        subject: 'Booking Request Received - Shankar Caterers & Sweets',
        html: `
          <h2>Thank you for contacting Shankar Caterers &amp; Sweets!</h2>
          <p>Hi ${safeName},</p>
          <p>We have received your catering inquiry for <strong>${safeEventType}</strong> on <strong>${safeEventDate}</strong> (${safeGuestCount} guests).</p>
          <p>Our team will call you shortly at <strong>${safePhone}</strong> to confirm menu details and pricing.</p>
          <p>For urgent inquiries, call us directly at <strong>+91 98180 79174</strong>.</p>
          <p>Best regards,<br/>Shankar Caterers &amp; Sweets Team<br/>Karkardooma, East Delhi</p>
        `,
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
