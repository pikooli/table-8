// import nodemailer from 'nodemailer';

// export async function sendEmail(to: string): Promise<{ success: boolean; message: string }> {
//   if (!process.env.SMTP_USERNAME || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM) {
//     console.error('Missing SMTP environment variables');
//     return { success: false, message: 'Server configuration error' };
//   }

//   const transporter = nodemailer.createTransport({
//     host: 'smtp-relay.brevo.com',
//     port: 587,
//     auth: {
//       user: process.env.SMTP_USERNAME,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_FROM,
//     to: "zhangpas@gmail.com",
//     subject: "New Subscription Notification",
//     text: `New subscription: ${to}`,
//     html: `<p>New subscription: <strong>${to}</strong></p>`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.messageId);
//     return { success: true, message: 'Email sent successfully' };
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return { success: false, message: 'Failed to send email' };
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}