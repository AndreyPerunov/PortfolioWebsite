import { Resend } from "resend"
import ToMe from "../emails/ToMe"
import Respond from "../emails/Respond"
import { render } from "@react-email/render"

const resend = new Resend(process.env.RESEND_API_KEY)

type result = { success?: string; error?: string }

export const sendMail = async (name: string, from: string, body: string, time: string): Promise<result> => {
  // Send email to me
  const res1 = await resend.emails.send({
    from: "form@andreyperunov.com",
    to: "andrey.perunov1@gmail.com",
    subject: `Form Message, from ${name}`,
    html: render(ToMe({ name, from, body, time }))
  })

  if (res1.error) {
    return { error: "Error sending email" }
  }

  // Send response to user email
  const res2 = await resend.emails.send({
    from: "form@andreyperunov.com",
    to: from,
    subject: "Thank you for contacting me!",
    html: render(Respond({ name }))
  })

  if (res2.error) {
    console.log(res2.error)
  }

  return { success: "Email has been sent!" }
}
