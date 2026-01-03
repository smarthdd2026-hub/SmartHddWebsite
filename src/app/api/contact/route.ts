import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log('📧 Contact form submission received:', { name, email, phone: phone || 'N/A' });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('❌ Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    console.log('📤 Sending email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'SmartHDD Contact <onboarding@resend.dev>',
      to: ['smarthdd2026@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Email sent successfully:', data?.id);
    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully',
      emailId: data?.id
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
