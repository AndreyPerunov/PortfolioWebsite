"use client"
import styles from "./modules/SkillsNotFound.module.scss"
import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react"

type skillProps = {
  // Skill name passed
  children: ReactNode
  // Initial move direction
  vector: {
    x: number
    y: number
  }
  // delayed cursor position (the "light-tourch")
  cursor: {
    x: MutableRefObject<number>
    y: MutableRefObject<number>
    visible: MutableRefObject<boolean>
  }
  // Function to increase number of found skills
  setFoundSkillsCount: React.Dispatch<React.SetStateAction<number>>
}

const Skill: FC<skillProps> = ({ children, vector, cursor, setFoundSkillsCount }) => {
  const skill = useRef<HTMLParagraphElement>(null)
  const requestAnimation = useRef(null)

  // Coords of the SKILL. Used to move it.
  const skillX = useRef(0)
  const skillY = useRef(0)

  // Center of the SKILL. Used for hover check.
  const skillXCenter = useRef(0)
  const skillYCenter = useRef(0)

  const animate = () => {
    // Cursor Hover
    const findingRadius = 80

    // Check position of a SKILL in relation to CURSOR
    const isSkillOnTheRight = skillXCenter.current > cursor.x.current - findingRadius
    const isSkillOnTheLeft = skillXCenter.current < cursor.x.current + findingRadius
    const isSkillIsBelow = skillYCenter.current > cursor.y.current - findingRadius
    const isSkillIsAbove = skillYCenter.current < cursor.y.current + findingRadius

    // Check if SKILL is hovered
    const skillIsHovered = isSkillOnTheRight && isSkillOnTheLeft && isSkillIsBelow && isSkillIsAbove

    // If SKILL hovered and CURSOR visible
    if (skillIsHovered && cursor.visible.current) {
      // Mark SKILL as found
      skill.current.classList.add(styles.skills__skillFound)

      // +1 to number of found skills
      setFoundSkillsCount(prev => prev + 1)

      // Stop the animation
      cancelAnimationFrame(requestAnimation.current)
      return
    }

    // Bounce
    if (skillX.current > window.innerWidth - 80 || skillX.current < 10) {
      vector.x *= -1
    }
    if (skillY.current > window.innerHeight - 50 || skillY.current < 10) {
      vector.y *= -1
    }

    // Calculate new position.
    skillX.current += vector.x
    skillY.current += vector.y
    skillXCenter.current += vector.x
    skillYCenter.current += vector.y

    // Apply new position.
    skill.current.style.left = skillX.current + "px"
    skill.current.style.top = skillY.current + "px"

    // Animate. Run this funtion for every frame.
    requestAnimation.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    // Set initial position
    skillX.current = Number(getComputedStyle(skill.current).left.slice(0, -2))
    skillY.current = Number(getComputedStyle(skill.current).top.slice(0, -2))
    // Set initial center
    skillXCenter.current = skill.current.offsetLeft + skill.current.clientLeft / 2
    skillYCenter.current = skill.current.offsetTop + skill.current.clientHeight / 2
    // Start animation
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
