"use server"

import { sendMail } from "../lib/mail"

type FormState = { success?: string; error?: string }

export const onFormSubmit = async (name: string, from: string, body: string): Promise<FormState> => {
  // Validate fields
  const validationResult = validateMail(name, from, body)
  if (validationResult.error) {
    return { error: validationResult.error }
  }

  // add time
  const time = new Date().toLocaleString("en-US", { timeZone: "Europe/Riga" })

  // Send Email
  const res = await sendMail(name, from, body, time)

  // Return error message
  if (res.error) {
    return { error: res.error }
  }

  // Return success message
  return { success: "Email has been sent!" }
}

function validateMail(name: string, from: string, body: string) {
  if (!name || !from || !body) {
    return { error: "All fields are required!" }
  }

  if (name.length < 1) {
    return { error: "Name must be at least 1 character" }
  }

  if (name.length > 50) {
    return { error: "Name can not exceed 50 characters" }
  }

  if (from.indexOf("@") === -1) {
    return { error: "Invalid email!" }
  }

  if (from.length < 5) {
    return { error: "Email must be at least 5 characters" }
  }

  if (body.length < 2) {
    return { error: "Message must be at least 2 characters" }
  }

  if (body.length > 1000) {
    return { error: "Message can not exceed 1000 characters" }
  }

  return { success: true }
}
