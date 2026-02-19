import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || 'PPM Connect <onboarding@resend.dev>';

const adminEmails = ['david.oludepo@gmail.com', 'Dolapo@redtechafrica.com'];
const ccEmails = ['Ayomide@redtechafrica.com', 'Olu@redtechafrica.com'];

export async function POST(req) {
  try {
    const { email } = await req.json();

    // 1. Send to Admins
    await resend.emails.send({
      from: fromEmail,
      to: adminEmails,
      cc: ccEmails,
      subject: 'New PPM Connect Waitlist Signup',
      html: `
        <h2>New Waitlist Entry</h2>
        <p>A new user has joined the exclusive PPM Connect waitlist:</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    // 2. Send Auto-Reply to Client
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to the PPM Connect Waitlist',
      html: `
        <h3>You're on the list!</h3>
        <p>Thank you for joining the exclusive waitlist for <strong>PPM Connect™</strong>.</p>
        <p>We are building the future of proprietary facility management, bringing you unparalleled transparency, efficiency, and real-time control.</p>
        <p>We will notify you with early access details leading up to our official launch.</p>
        <br/>
        <p>Best Regards,</p>
        <p><strong>Pacific Hospitality Company</strong><br/>
        Lagos, Nigeria</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist Email Error:', error);
    return NextResponse.json({ error: 'Failed to add to waitlist' }, { status: 500 });
  }
}
