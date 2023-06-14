import { FC, ReactNode } from "react"
import styles from "./modules/Wrapper.module.scss"

type wrapperProps = {
  children: ReactNode
  narrow?: boolean
}

const Wrapper: FC<wrapperProps> = ({ children, narrow }) => {
  return <div className={styles.wrapper + ` ${narrow ? styles.wrapperNarrow : ""}`}>{children}</div>
}

export default Wrapper
