import { FC, ReactNode } from "react"
import styles from "./modules/Button.module.scss"

type buttonProps = {
  children: ReactNode
  href: string
  hollow?: boolean
  style?: React.CSSProperties
}

const Button: FC<buttonProps> = ({ children, hollow, href, style }) => {
  return (
    <a style={style} href={href} className={styles.button + ` ${hollow ? styles.buttonHollow : ""}`}>
      {children}
    </a>
  )
}

export default Button
