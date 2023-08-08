import { FC, ReactNode } from "react"
import styles from "./modules/Button.module.scss"

type buttonProps = {
  children: ReactNode
  href: string
  hollow?: boolean
  openInNewTab?: boolean
  style?: React.CSSProperties
}

const Button: FC<buttonProps> = ({ children, hollow, openInNewTab, href, style }) => {
  return (
    <a style={style} target={openInNewTab ? "_blank" : "_self"} href={href} className={styles.button + ` ${hollow ? styles.buttonHollow : ""}`}>
      {children}
    </a>
  )
}

export default Button
