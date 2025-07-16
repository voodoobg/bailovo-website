import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Моля попълнете всички задължителни полета.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Моля въведете валиден имейл адрес.' },
        { status: 400 }
      );
    }

    // Create transporter with SMTP configuration
    // Note: Configure these values in your environment variables or config file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    });

    // Email content
    const mailOptions = {
      from: `"${formData.firstName} ${formData.lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@bailovo.bg',
      replyTo: formData.email,
      subject: formData.subject ? `Съобщение от сайта: ${formData.subject}` : 'Ново съобщение от сайта на село Байлово',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Ново съобщение от сайта на село Байлово
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Информация за контакта:</h3>
            <p><strong>Име:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Имейл:</strong> ${formData.email}</p>
            ${formData.subject ? `<p><strong>Тема:</strong> ${formData.subject}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e40af;">Съобщение:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Това съобщение е изпратено от контактната форма на сайта на село Байлово.</p>
            <p>За да отговорите на съобщението, използвайте имейл адреса: ${formData.email}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Вашето съобщение беше изпратено успешно! Ще се свържем с Вас скоро.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Възникна грешка при изпращането на съобщението. Моля опитайте отново по-късно.' 
      },
      { status: 500 }
    );
  }
} 