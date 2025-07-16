# SMTP Configuration for Contact Form

This document explains how to configure SMTP settings for the dynamic contact form on the Bailovo website.

## Environment Variables Setup

To enable email functionality, you need to configure the following environment variables in your deployment platform or create a `.env.local` file in your project root:

### Required Environment Variables

```bash
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com                    # Your SMTP server host
SMTP_PORT=587                              # SMTP port (587 for TLS, 465 for SSL)
SMTP_SECURE=false                          # Set to "true" for port 465, "false" for other ports
SMTP_USER=your-email@gmail.com             # Your email address for authentication
SMTP_PASS=your-app-password                # Your email password or app-specific password

# Email Settings
CONTACT_EMAIL=info@bailovo.bg              # Email address to receive contact form messages
```

## SMTP Provider Examples

### Gmail Configuration
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-app-password
```

**Important for Gmail:** 
- Enable 2-Factor Authentication
- Generate an App Password (not your regular Gmail password)
- Use the App Password in `SMTP_PASS`

### Outlook/Hotmail Configuration
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Custom SMTP Server
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@yourdomain.com
SMTP_PASS=your-password
```

## How to Get Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to "Security" → "2-Step Verification" → "App passwords"
4. Select "Mail" and your device
5. Copy the generated 16-character password
6. Use this password in `SMTP_PASS`

## Environment Variables Setup by Platform

### Vercel
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with its value
5. Redeploy your application

### Netlify
1. Go to your Netlify dashboard
2. Select your site
3. Go to Site settings → Environment variables
4. Add each variable with its value
5. Redeploy your application

### Local Development
Create a `.env.local` file in your project root:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@bailovo.bg
```

**Note:** Never commit `.env.local` to version control!

## Email Template Features

The contact form sends professionally formatted HTML emails with:

- ✅ Responsive design that works on all email clients
- ✅ Sender information (name and email)
- ✅ Subject line (if provided)
- ✅ Formatted message content
- ✅ Reply-to functionality (replies go directly to the sender)
- ✅ Professional styling with Bailovo branding colors

## Security Features

- ✅ Server-side validation of all form fields
- ✅ Email format validation
- ✅ Required field validation
- ✅ HTML sanitization in email content
- ✅ Rate limiting protection (via server-side validation)

## Troubleshooting

### Common Issues

1. **"Authentication failed" error**
   - Check your email and password
   - For Gmail, ensure you're using an App Password
   - Verify 2FA is enabled for Gmail

2. **"Connection timeout" error**
   - Check SMTP host and port settings
   - Verify your server can connect to external SMTP servers
   - Check firewall settings

3. **Emails not being received**
   - Check spam/junk folders
   - Verify the `CONTACT_EMAIL` address is correct
   - Test with a different email provider

4. **SSL/TLS errors**
   - For port 465, set `SMTP_SECURE=true`
   - For port 587, set `SMTP_SECURE=false`

### Testing the Configuration

1. Deploy your application with the environment variables
2. Visit the contact page: `/contact`
3. Fill out and submit the test form
4. Check both the receiving email and server logs

### Support

If you need help with SMTP configuration:
- Check your email provider's SMTP documentation
- Verify all environment variables are correctly set
- Test with a simple email client first to verify credentials work

## Security Best Practices

- ✅ Never expose SMTP credentials in client-side code
- ✅ Use environment variables for all sensitive configuration
- ✅ Use App Passwords instead of regular passwords when available
- ✅ Regularly rotate SMTP passwords
- ✅ Monitor email sending logs for suspicious activity 