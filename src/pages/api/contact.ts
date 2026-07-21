/*
  /api/contact
  Reçoit le formulaire Contact Us, envoie un email via Resend.
  prerender = false : cette route est serveur, pas statique.
*/
import type { APIRoute } from 'astro'
import { Resend } from 'resend'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const data     = await request.formData()
    const firstname = String(data.get('firstname') || '').trim()
    const lastname  = String(data.get('lastname')  || '').trim()
    const email     = String(data.get('email')     || '').trim()
    const message   = String(data.get('message')   || '').trim()

    // Validation minimale
    if (!firstname || !email || !message) {
      return new Response(JSON.stringify({ error: 'Champs manquants.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY)

    await resend.emails.send({
      from:    import.meta.env.FROM_EMAIL,
      to:      import.meta.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Message Initiate – ${firstname} ${lastname}`,
      html: `
        <h2>Nouveau message depuis le site Initiate</h2>
        <p><strong>Nom :</strong> ${firstname} ${lastname}</p>
        <p><strong>Email :</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (err) {
    console.error('Contact API error:', err)
    return new Response(JSON.stringify({ error: 'Erreur serveur.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
