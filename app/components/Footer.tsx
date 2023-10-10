import styles from "./modules/Footer.module.scss"
import { FC } from "react"

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p>
        Contact me:{" "}
        <a className={styles.footer__link} href="mailto:andrey.perunov1@gmail.com">
          andrey.perunov1@gmail.com
        </a>
      </p>
      <small style={{ paddingBottom: "1em" }}>2023</small>
    </div>
  )
}

export default Footer
