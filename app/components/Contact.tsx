import styles from "./modules/Contact.module.scss"
import ContactForm from "./ContactForm"
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi"

const Contact = () => {
  return (
    <div className={styles.contact} id="contacts">
      <div className={styles.contact__info}>
        <div>
          <HiLocationMarker className={styles.contact__info__icon} />
          <h2>Location</h2>
          <p>Riga, Latvia</p>
        </div>
        <div>
          <HiPhone className={styles.contact__info__icon} />
          <h2>Phone</h2>
          <p>+371 27 801 043</p>
        </div>
        <div>
          <HiOutlineMail className={styles.contact__info__icon} />
          <h2>Email</h2>
          <p>andrey.perunov1@gmail.com</p>
        </div>
      </div>
      <div className={styles.contact__form}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
