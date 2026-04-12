import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, email, phone, country, arrivalDate, departureDate, passengers, interest, message } = body

    const interestMap: Record<string, string> = {
      ski: "Ski en Las Leñas",
      experience: "Experiencia Mendoza (vino + montaña)",
      transfer: "Transfers",
      agency: "Soy Agencia de Viajes"
    }

    const emailContent = `
      <h2>Nueva Consulta desde el Sitio Web</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr style="background-color: #f8f6f3;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Nombre</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${name || "-"}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">País</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${country || "-"}</td>
        </tr>
        <tr style="background-color: #f8f6f3;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${email || "-"}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Teléfono</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${phone || "-"}</td>
        </tr>
        <tr style="background-color: #f8f6f3;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Fecha de llegada</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${arrivalDate || "-"}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Fecha de regreso</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${departureDate || "-"}</td>
        </tr>
        <tr style="background-color: #f8f6f3;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Pasajeros</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${passengers || "-"}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Interés</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${interestMap[interest] || interest || "-"}</td>
        </tr>
        ${message ? `
        <tr style="background-color: #f8f6f3;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Mensaje</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
        </tr>
        ` : ""}
      </table>
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        Este mensaje fue enviado desde el formulario de contacto de xumatravel.com
      </p>
    `

    const { data, error } = await resend.emails.send({
      from: 'XUMA Travel <onboarding@resend.dev>',
      to: ['info@xuma.com.ar'],
      subject: `Nueva Consulta Web: ${name || "Sin nombre"} - ${interestMap[interest] || "Consulta general"}`,
      html: emailContent,
      replyTo: email || undefined,
    })

    if (error) {
      console.error('Error sending email:', JSON.stringify(error, null, 2))
      return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
