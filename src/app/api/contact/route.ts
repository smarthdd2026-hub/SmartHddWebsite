import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working! Use POST to submit.' });
}

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

    // For now, just log the submission (email integration temporarily disabled)
    console.log('✅ Contact form data:', { name, email, phone, message });

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully (email sending temporarily disabled for testing)',
      data: { name, email }
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
