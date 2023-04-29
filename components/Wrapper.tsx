import { FC, ReactNode } from "react"
import styles from "../styles/modules/Wrapper.module.scss"

type wrapperProps = {
  children: ReactNode
}

const Wrapper: FC<wrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
