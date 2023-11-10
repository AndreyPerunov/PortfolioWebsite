import styles from "./modules/Footer.module.scss"
import { FC } from "react"
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Footer: FC = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <div className={styles.footer}>
      <div className={styles.footer__r2}>
        <h2>This website tech stack:</h2>
        <p>Next.js</p>
        <p>TypeScript</p>
        <p>Lodash.js</p>
        <p>Axios</p>
        <p>Sass</p>
        <p>React Hook Form</p>
        <p>React Device Detect</p>
        <p>React Icons</p>
        <p>React Tooltip</p>
      </div>
      <div className={styles.footer__c3}>
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiFillGithub />{" "}
      </div>
      <div className={styles.footer__c1_1}>
        <h2>Navigation</h2>
        <p>Home</p>
        <p>Projects</p>
        <p>Skills</p>
        <p>Contacts</p>
      </div>
      <div className={styles.footer__c1_2}>
        <h2>Socials</h2>
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
      <div className={styles.footer__c1_3}>
        <h2>Contacts</h2>
        <p>Phone: +371 27 801 043</p>
        <p>Email: andrey.perunov1@gmail.com</p>
        <p>Location: Riga, Latvia</p>
      </div>
      <div className={styles.footer__c4}>
        <i>Enjoy, your {daysOfWeek[new Date().getDay()]}!</i>
        <br />
        <small style={{ paddingBottom: "1em" }}>2023</small>
      </div>
    </div>
  )
}

export default Footer
