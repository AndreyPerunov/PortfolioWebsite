import styles from "./modules/Footer.module.scss"
import { FC } from "react"

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p>The footer will be here.</p>
      <small>2023</small>
    </div>
  )
}

export default Footer
