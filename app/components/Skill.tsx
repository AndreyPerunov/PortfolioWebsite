"use client"
import styles from "./modules/Skills.module.scss"
import { FC, ReactNode, useEffect, useRef } from "react"

type skillProps = {
  children: ReactNode
  vector: {
    x: number
    y: number
  }
}

const Skill: FC<skillProps> = ({ children, vector }) => {
  const skill = useRef<HTMLParagraphElement>(null)
  const requestAnimation = useRef(null)

  const skillX = useRef(0)
  const skillY = useRef(0)

  const animate = () => {
    // Bounce
    if (skillX.current > window.innerWidth - 80 || skillX.current < 10) {
      vector.x *= -1
    }
    if (skillY.current > window.innerHeight - 10 || skillY.current < 10) {
      vector.y *= -1
    }

    // Calculate
    skillX.current += vector.x
    skillY.current += vector.y

    // Apply
    skill.current.style.left = skillX.current + "px"
    skill.current.style.top = skillY.current + "px"

    requestAnimation.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    skillX.current = Number(getComputedStyle(skill.current).left.slice(0, -2))
    skillY.current = Number(getComputedStyle(skill.current).top.slice(0, -2))
    animate()

    return () => {
      cancelAnimationFrame(requestAnimation.current)
    }
  }, [])

  return (
    <p ref={skill} className={styles.skills__skill}>
      {children}
    </p>
  )
}

export default Skill
