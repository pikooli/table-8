import { NextResponse } from 'next/server';
import { sendEmail } from '../subscription';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send email notification
    const result = await sendEmail(email);

    if (result.success) {
      // Here you would typically also save the email to your database
      // For example: await saveSubscriberToDatabase(email);

      return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}