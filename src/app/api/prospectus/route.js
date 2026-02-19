import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Pacific Partnerships <info@momms.co.uk>';

const adminEmails = ['Ayomide@redtechafrica.com', 'Dolapo@redtechafrica.com'];
const ccEmails = ['david.oludepo@gmail.com', 'Olu@redtechafrica.com'];

export async function POST(req) {
  try {
    const { name, email, company, interest } = await req.json();

    // 1. Send to Admins
    await resend.emails.send({
      from: fromEmail,
      to: adminEmails,
      cc: ccEmails,
      subject: `New Partnership Prospectus Request: ${company}`,
      html: `
        <h2>New Prospectus Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Primary Interest:</strong> ${interest || 'General'}</p>
      `
    });

    // 2. Send Auto-Reply to Client with Prospectus
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Your Pacific Hospitality Partnership Prospectus',
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for your interest in partnering with Pacific Hospitality Company.</p>
        <p>We have received your request regarding <strong>${interest}</strong>. A dedicated partnership advisor has been assigned to your inquiry and will be in touch within 48 hours to discuss tailored Joint Development and operational synergies.</p>
        <br/>
        <p>Best Regards,</p>
        <p><strong>The Pacific Partnerships Team</strong><br/>
        Lagos, Nigeria</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Partnership Email Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
