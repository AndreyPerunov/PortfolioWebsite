import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import styles from "./modules/Header.module.scss"

const Header: FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header__icons}>
        <a aria-label="My LinkedIn profile" target="_blank" href="https://www.linkedin.com/in/andrey-perunov/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a aria-label="My GitHub profile" target="_blank" href="https://github.com/AndreyPerunov">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <ul>
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
