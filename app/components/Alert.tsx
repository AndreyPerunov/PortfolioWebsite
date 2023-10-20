"use client"

import styles from "./modules/Alert.module.scss"
import { FC, useEffect, useState } from "react"

const Alert: FC = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const clickHandler = () => {
    setVisible(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [])

  return (
    <div className={styles.alert + " " + (visible ? "" : styles.alertHidden)}>
      <div className={styles.alert__close} onClick={clickHandler}>
        X
      </div>
      <p>
        This website is <b>work in progress</b>. Some buttons may not work.{" "}
      </p>
    </div>
  )
}

export default Alert
