import { NextResponse } from 'next/server';
import { sendEmail } from '../subscription';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const result = await sendEmail(email);

  if (result.success) {
    return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
  } else {
    return NextResponse.json({ error: result.message }, { status: 500 });
  }
}