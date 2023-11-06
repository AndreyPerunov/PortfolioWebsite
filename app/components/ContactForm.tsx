"use client"
import { useState } from "react"
import styles from "./modules/ContactForm.module.scss"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
    // TODO: Add logic to send form data to server
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Get in touch</h1>
      <p>If you have any work for me, you can send me message from here. It's my pleasure to help you.</p>
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
