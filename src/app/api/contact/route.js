import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Pacific Hospitality <onboarding@resend.dev>';

const adminEmails = ['Ayomide@redtechafrica.com', 'Dolapo@redtechafrica.com'];
const ccEmails = ['david.oludepo@gmail.com', 'Olu@redtechafrica.com'];

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // 1. Send to Admins
    await resend.emails.send({
      from: fromEmail,
      to: adminEmails,
      cc: ccEmails,
      subject: `New Contact Form Submission: ${subject || 'General'}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // 2. Send Auto-Reply to Client
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Thank you for contacting Pacific Hospitality Company',
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for reaching out to Pacific Hospitality Company. We have successfully received your inquiry regarding <strong>${subject || 'your request'}</strong>.</p>
        <p>Our team is currently reviewing your message and will get back to you within 24 hours.</p>
        <br/>
        <p>Best Regards,</p>
        <p><strong>The Pacific Hospitality Team</strong><br/>
        Lagos, Nigeria</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact Email Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
