import mail from "@sendgrid/mail"

mail.setApiKey(process.env.SG_API_KEY)

type ResponseData = {
  success: boolean
  message: string
}

export async function POST(request: Request) {
  const req: Partial<Message> = await request.json()

  // Check if all fields are filled out
  if (!req.name || !req.email || !req.message) {
    return Response.json({ success: false, message: "Please fill out all fields!" })
  }

  // Send mail
  const msg = `
    Name: ${req.name}\r\n
    Email: ${req.email}\r\n
    Message: ${req.message}\r\n
  `
  const data = {
    to: "andrey.perunov1@gmail.com",
    from: "form@andreyperunov.com",
    subject: `${req.name} | andreyperunov.com`,
    text: msg,
    html: msg.replace(/\r\n/g, "<br>")
  }

  try {
    await mail.send(data)
  } catch (error) {
    console.log(error)

    if (error.response) {
      console.log(error.response.body)
    }

    const res = {
      success: false,
      message: `Failed to send mail. Please try again later.`
    }

    return Response.json(res)
  }

  const res = {
    success: true,
    message: `Thank you ${req.name}, your message has been sent.`
  }

  return Response.json(res)
}
