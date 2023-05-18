"use client"
import { FC, useEffect, useRef, useState } from "react"
import { throttle } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDown } from "@fortawesome/free-solid-svg-icons"
import styles from "./modules/ArrowDown.module.scss"

const ArrowDown: FC = () => {
  const [isAtTop, setIsAtTop] = useState(false)
  const iconRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const checkScroll = () => {
      if (iconRef.current) {
        const rect = iconRef.current.getBoundingClientRect()
        console.log(rect)
        if (rect.y <= 100) {
          setIsAtTop(true)
          window.removeEventListener("scroll", scrollThrottle)
        }
      }
    }
    const scrollThrottle = throttle(checkScroll, 300)
    window.addEventListener("scroll", scrollThrottle)

    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  }, [])

  return <FontAwesomeIcon ref={iconRef} className={styles.arrow + ` ${!isAtTop ? styles.bounce : ""}`} icon={faCircleDown} />
}

export default ArrowDown
