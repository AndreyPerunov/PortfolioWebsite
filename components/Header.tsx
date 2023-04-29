import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import styles from "../styles/modules/Header.module.scss"

const Header: FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header__icons}>
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Work</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">CV</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
