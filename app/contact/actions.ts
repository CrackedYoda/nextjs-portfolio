'use server'

import { Resend } from 'resend';

interface ContactFormData {
    name: string;
    email: string;
    inquiryType: string;
    message: string;
}

export async function sendEmail(data: ContactFormData) {
    const { name, email, inquiryType, message } = data;

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
        console.warn("⚠️ RESEND_API_KEY is missing in environment variables.");
        // Simulate delay for consistent UX if key is missing
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: false, message: "Server Error: resend API key missing." };
    }

    try {
        const { data: emailData, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Default testing domain
            to: ['nelsonakalia12@gmail.com'], // User's email
            subject: `New Inquiry: ${inquiryType} from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: #4f46e5; margin: 0;">New Contact Inquiry</h2>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
                        <td style="padding: 8px 0; color: #111827;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                        <td style="padding: 8px 0; color: #111827;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;"><strong>Inquiry Type:</strong></td>
                        <td style="padding: 8px 0; color: #111827;">${inquiryType}</td>
                    </tr>
                </table>

                <div style="margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    <p style="color: #6b7280; margin-bottom: 8px;"><strong>Message:</strong></p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; color: #374151; line-height: 1.5; white-space: pre-wrap;">${message}</div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #9ca3af;">
                <p>This email was sent from your portfolio contact form via Resend.</p>
            </div>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return { success: false, message: "Failed to send email via Resend." };
        }

        console.log("Email sent ID:", emailData?.id);
        return { success: true, message: "Message sent successfully!" };

    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}
