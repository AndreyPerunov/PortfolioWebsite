"use client"
import styles from "./modules/ContactForm.module.scss"
import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect, useState, useTransition } from "react"
import { BsFillSendCheckFill } from "react-icons/bs"
import { onFormSubmit } from "../../actions/contact-form"

type Inputs = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const spinnerChars = ["|", "/", "─", "\\"]
  const [spinnerChar, setSpinnerChar] = useState(spinnerChars[0])
  const [response, setResponse] = useState({ success: false, message: "" })
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (isPending) {
      let i = 0
      const interval = setInterval(() => {
        setSpinnerChar(spinnerChars[i++ % spinnerChars.length])
        if (i >= 100) {
          i = 0
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isPending])

  const onSubmit: SubmitHandler<Inputs> = data => {
    startTransition(() => {
      onFormSubmit(data.name, data.email, data.message).then(data => {
        setResponse({ success: data.success !== undefined, message: data.success || data.error })
      })
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Get in touch</h1>
      <p className={styles.form__text}>If you have any work for me, you can send me message from here. It's my pleasure to help you.</p>
      <label htmlFor="name">Your Name:</label>
      <div className={styles.form__container}>
        {errors.name !== undefined && (
          <p role="alert" className={styles.form__container__error}>
            {errors.name?.message}
          </p>
        )}
        <input
          type="text"
          {...register("name", {
            required: { value: true, message: "Name is required." },
            maxLength: { value: 50, message: "Name can not exceed 50 characters." },
            minLength: { value: 1, message: "Name must be at least 1 character long." }
          })}
        />
      </div>
      <label htmlFor="email">Your Email:</label>
      <div className={styles.form__container}>
        {errors.email !== undefined && (
          <p role="alert" className={styles.form__container__error}>
            {errors.email?.message}
          </p>
        )}
        <input
          type="text"
          {...register("email", {
            required: { value: true, message: "Email is required." },
            pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Email must be valid." }
          })}
        />
      </div>
      <label htmlFor="message">Message:</label>
      <div className={styles.form__container}>
        {errors.message !== undefined && (
          <p role="alert" className={styles.form__container__error}>
            {errors.message?.message}
          </p>
        )}
        <textarea
          id="message"
          {...register("message", {
            required: { value: true, message: "Message is required." },
            maxLength: { value: 1000, message: "Message can not exceed 1000 characters." },
            minLength: { value: 2, message: "Message must be at least 2 character long." }
          })}
        />
      </div>
      {response.success ? <BsFillSendCheckFill className={styles.form__success} /> : <input type="submit" value={isPending ? spinnerChar : "Send"} className={styles.form__submit + " " + (isPending ? styles.form__submitLoading : "")} />}
      <span className={styles.form__response + " " + (response.success ? "" : styles.form__responseFail)}>{response.message}</span>
    </form>
  )
}

export default ContactForm
