import { Resend } from 'resend';
const apiKey = process.env.RESEND_API_KEY; 
const resend = new Resend(apiKey); 

export async function POST (request) {
    const contactFormData = await request.json();
    const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
  to: 'kontakt@theosundby.no',
  replyTo: contactFormData.email,
  subject: 'Forespørsel', 
html: `
  <p>Navn: ${contactFormData.name}</p>
  <p>E-post: ${contactFormData.email}</p>
  <p>Melding: ${contactFormData.message}</p>
  `,
        
    });

    if (result.error !== null) {
        return new Response("E-Posten kunne ikke sendes", { status: 500 });
    }

    return new Response("E-Posten ble sendt", { status: 200 });
}
