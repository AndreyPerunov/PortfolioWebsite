import styles from "./modules/Contact.module.scss"
import CopyText from "./CopyText"
import ContactForm from "./ContactForm"
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__info}>
        <div>
          <HiLocationMarker className={styles.contact__info__icon} />
          <h2>Location</h2>
          <p>Riga, Latvia</p>
        </div>
        <div>
          <HiPhone className={styles.contact__info__icon} />
          <h2>Phone</h2>
          <CopyText content="+371 27 801 043" toClipboard="+37127801043" />
        </div>
        <div>
          <HiOutlineMail className={styles.contact__info__icon} />
          <h2>Email</h2>
          <CopyText content="andrey.perunov1@gmail.com" />
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
