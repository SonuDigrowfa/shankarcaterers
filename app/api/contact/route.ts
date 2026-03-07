import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, eventDate, guestCount, message } = body

    // Validate required fields
    if (!name || !email || !phone || !eventType || !eventDate || !guestCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailContent = `
      <h2>New Booking Request from Shankar Caterers & Sweets</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Event Date:</strong> ${eventDate}</p>
      <p><strong>Number of Guests:</strong> ${guestCount}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
      <hr />
      <p><small>This email was sent from your website contact form.</small></p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'sonunishad.digrowfa@gmail.com',
      subject: `New Booking Request: ${eventType} for ${eventDate}`,
      html: emailContent,
      replyTo: email
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Booking Request Received - Shankar Caterers & Sweets',
      html: `
        <h2>Thank you for contacting Shankar Caterers & Sweets!</h2>
        <p>Hi ${name},</p>
        <p>We have received your booking request for ${eventType} on ${eventDate}.</p>
        <p>Our team will contact you shortly at ${phone} to confirm the details and provide a customized quote.</p>
        <p><strong>Event Details:</strong></p>
        <ul>
          <li>Event Type: ${eventType}</li>
          <li>Event Date: ${eventDate}</li>
          <li>Number of Guests: ${guestCount}</li>
        </ul>
        <p>Thank you for choosing us!</p>
        <p>Best regards,<br/>Shankar Caterers & Sweets Team</p>
      `
    })

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
