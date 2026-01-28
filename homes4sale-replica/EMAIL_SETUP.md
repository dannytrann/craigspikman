# Email Form Setup

The contact form is now functional! To enable email sending, you have two options:

## Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to https://web3forms.com
2. Sign up for a free account
3. Get your Access Key
4. Replace `YOUR_ACCESS_KEY` in `app/page.tsx` (line ~22) with your actual key
5. Done! Emails will be sent to craigspikman2022@gmail.com

## Option 2: Formspree (Alternative)

1. Go to https://formspree.io
2. Sign up and create a new form
3. Update the form action in the code

## Current Setup

The form currently:
- Shows when "Drop me a line!" button is clicked
- Collects: Name, Email, Message
- Sends to: craigspikman2022@gmail.com
- Includes reCAPTCHA notice
- Has SEND and Cancel buttons

## To Test Without Email Service

The form will show an error message if the API key is not set. You can test the form functionality by clicking "Drop me a line!" button.

## Contact Section Now Includes:

✅ "Contact Me" heading (brown/tan color)
✅ "Better yet, see me in person!"
✅ Craig Spikman
✅ Address: 972 Shoppers Row Campbell River, BC V9W 2C5
✅ Phone: 250-203-1677
✅ Hours: Open today 09:00 a.m. – 05:00 p.m.
✅ "Drop me a line!" button that reveals the form
✅ Contact form with Name, Email, Message fields
✅ SEND and Cancel buttons
