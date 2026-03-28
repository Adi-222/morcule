import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend - note: needs process.env.RESEND_API_KEY
// Assuming the user runs this with a valid key later.
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, details } = body

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the payload to the console so the developer can see it works
    console.log('--- NEW CONTACT FORM SUBMISSION ---')
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Details: ${details}`)
    console.log('-----------------------------------')

    // If an API key is configured, practically send the email.
    if (process.env.RESEND_API_KEY) {
      const { error } = await resend.emails.send({
        from: 'Morcule Team <onboarding@resend.dev>', // Update this with verified sender domain when ready
        to: ['your-team@example.com'], // Update with actual team email
        subject: `New Project Request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`,
        html: `<h2>New Project Request</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <h3>Project Details:</h3>
               <p>${details.replace(/\\n/g, '<br>')}</p>`,
      })

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
      }
    } else {
      console.warn('RESEND_API_KEY not found in environment variables. Email logged to console but not sent via API.')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in contact route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
