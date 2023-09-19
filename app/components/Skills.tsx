"use client"
import { FC, useEffect, useRef, useState } from "react"
import styles from "./modules/Skills.module.scss"
import Skill from "./Skill"

const Skills: FC = () => {
  const cursor = useRef<HTMLDivElement>()
  const skills = useRef<HTMLDivElement>()

  const [foundSkillsCount, setFoundSkillsCount] = useState<number>(0)
  const skillsArray = ["CSS", "HTML", "React", "Node.js", "TypeScript", "Next.js", "MongoDB", "Sass", "Deployment", "WebPack", "Express.js", "Git", "REST APIs", "Critical Thinking", "Problem Solving", "OOP", "SQL"]

  const delay = 40

  const cursorVisible = useRef(false)
  const cursorX = useRef(0)
  const cursorY = useRef(0)
  const delayedCursorX = useRef(0)
  const delayedCursorY = useRef(0)

  const requestAnimation = useRef(null)

  const animate = () => {
    // Cursor
    delayedCursorX.current += (cursorX.current - delayedCursorX.current) / delay
    delayedCursorY.current += (cursorY.current - delayedCursorY.current) / delay

    if (delayedCursorY.current > 0) {
      cursor.current.style.top = delayedCursorY.current + "px"
      cursor.current.style.left = delayedCursorX.current + "px"
    }

    requestAnimation.current = requestAnimationFrame(animate)
  }

  const mouseMoveHandler = e => {
    cursorX.current = e.clientX
    cursorY.current = e.clientY - skills.current.getBoundingClientRect().top
    cursorVisible.current = true
    cursor.current.classList.add(styles.skills__cursorVisible)
  }

  const mouseOutHandler = () => {
    cursorVisible.current = false
    cursor.current.classList.remove(styles.skills__cursorVisible)
  }

  useEffect(() => {
    cursorX.current = window.innerWidth / 2
    cursorY.current = window.innerHeight / 2
    delayedCursorX.current = window.innerWidth / 2
    delayedCursorY.current = window.innerHeight / 2

    skills.current.addEventListener("mousemove", mouseMoveHandler)
    skills.current.addEventListener("mouseout", mouseOutHandler)
    animate()
    return () => {
      skills.current.removeEventListener("mousemove", mouseMoveHandler)
      skills.current.removeEventListener("mouseout", mouseOutHandler)
      cancelAnimationFrame(requestAnimation.current)
    }
  }, [])

  return (
    <>
      <div className={styles.fade}></div>
      <div ref={skills} className={styles.skills}>
        <div ref={cursor} className={styles.skills__cursor}></div>
        {skillsArray.map((item, index) => {
          let x = Math.floor(Math.random() * 2) + 1 // = 1 or 2
          let y = Math.floor(Math.random() * 2) + 1 // = 1 or 2
          x *= index % 2 === 0 ? 1 : -1 // x *= 1 or -1
          y *= index % 3 === 0 ? 1 : -1 // y *= 1 or -1
          return (
            <Skill setFoundSkillsCount={setFoundSkillsCount} cursor={{ x: delayedCursorX, y: delayedCursorY, visible: cursorVisible }} vector={{ x: x, y: y }} key={index}>
              {item}
            </Skill>
          )
        })}
        <div className={styles.skills__light}>
          <h1>My Hidden Talents</h1>
          <p>
            {foundSkillsCount}/{skillsArray.length}
          </p>
        </div>
      </div>
    </>
  )
}

export default Skills
