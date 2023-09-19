"use client"
import styles from "./modules/Skills.module.scss"
import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react"

type skillProps = {
  children: ReactNode
  vector: {
    x: number
    y: number
  }
  cursor: {
    x: MutableRefObject<number>
    y: MutableRefObject<number>
  }
}

const Skill: FC<skillProps> = ({ children, vector, cursor }) => {
  const skill = useRef<HTMLParagraphElement>(null)
  const requestAnimation = useRef(null)

  const skillX = useRef(0)
  const skillY = useRef(0)
  const skillXCenter = useRef(0)
  const skillYCenter = useRef(0)

  const animate = () => {
    // Cursor Hover
    const findingRadius = 50
    const isSkillOnTheRight = skillXCenter.current > cursor.x.current - findingRadius
    const isSkillOnTheLeft = skillXCenter.current < cursor.x.current + findingRadius
    const isSkillIsBelow = skillYCenter.current > cursor.y.current - findingRadius
    const isSkillIsAbove = skillYCenter.current < cursor.y.current + findingRadius
    if (isSkillOnTheRight && isSkillOnTheLeft && isSkillIsBelow && isSkillIsAbove) {
      skill.current.classList.add(styles.skills__skillFound)
      cancelAnimationFrame(requestAnimation.current)
      return
    }

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
    skillXCenter.current += vector.x
    skillYCenter.current += vector.y

    // Apply
    skill.current.style.left = skillX.current + "px"
    skill.current.style.top = skillY.current + "px"

    requestAnimation.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    skillX.current = Number(getComputedStyle(skill.current).left.slice(0, -2))
    skillY.current = Number(getComputedStyle(skill.current).top.slice(0, -2))
    skillXCenter.current = skill.current.getBoundingClientRect().left + skill.current.getBoundingClientRect().width / 2
    skillYCenter.current = skill.current.getBoundingClientRect().top + skill.current.getBoundingClientRect().height / 2
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
