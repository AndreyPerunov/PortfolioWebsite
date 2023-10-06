"use client"
import { FC, useEffect, useRef, useState } from "react"
import styles from "./modules/Skills.module.scss"
import Skill from "./Skill"

const Skills: FC = () => {
  const cursor = useRef<HTMLDivElement>()
  const skills = useRef<HTMLDivElement>()
  const requestAnimation = useRef(null)

  // Number of found skills
  const [foundSkillsCount, setFoundSkillsCount] = useState<number>(0)

  // List of skills
  const skillsArray = ["CSS", "HTML", "React", "Node.js", "TypeScript", "Next.js", "MongoDB", "Sass", "Deployment", "WebPack", "Express.js", "Git", "REST APIs", "Critical Thinking", "Problem Solving", "OOP", "SQL"]

  // Speed of delayedCursor
  const delay = 40

  // Delayed Cursor Visible?
  const cursorVisible = useRef(false)

  // Position of cursor
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  // Position of delayedCursor
  const delayedCursorX = useRef(0)
  const delayedCursorY = useRef(0)

  const animate = () => {
    // Move delayedCursor (rourch-light) a bit closer to CURSOR
    delayedCursorX.current += (cursorX.current - delayedCursorX.current) / delay
    delayedCursorY.current += (cursorY.current - delayedCursorY.current) / delay

    // Apply movement until it is in the same position as CURSOR
    if (delayedCursorY.current > 0) {
      cursor.current.style.top = delayedCursorY.current + "px"
      cursor.current.style.left = delayedCursorX.current + "px"
    }

    // Loop
    requestAnimation.current = requestAnimationFrame(animate)
  }

  // Tracking CURSOR position
  const mouseMoveHandler = e => {
    cursorX.current = e.clientX
    cursorY.current = e.clientY - skills.current.getBoundingClientRect().top
  }

  // Hide delayedCURSOR (tourch-light)
  const mouseOutHandler = () => {
    cursorVisible.current = false
    console.log(cursorVisible.current)
    cursor.current.classList.remove(styles.skills__cursorVisible)
  }

  // Show delayedCURSOR (tourch-light)
  const mouseOverHandler = () => {
    cursorVisible.current = true
    console.log(cursorVisible.current)
    cursor.current.classList.add(styles.skills__cursorVisible)
  }

  useEffect(() => {
    // Set initial position of corsor and delayedCursor
    cursorX.current = window.innerWidth / 2
    cursorY.current = window.innerHeight / 2
    delayedCursorX.current = window.innerWidth / 2
    delayedCursorY.current = window.innerHeight / 2

    // Subscribing to MouseMove event to animate cursor
    skills.current.addEventListener("mousemove", mouseMoveHandler)

    // Subscribing to MouseOut event to hide cursor
    skills.current.addEventListener("mouseout", mouseOutHandler)

    // Subscribing to MouseOver event to show cursor
    skills.current.addEventListener("mouseover", mouseOverHandler)

    // Animate. Run this funtion for every frame.
    animate()

    // Clear events on unmount
    return () => {
      skills.current.removeEventListener("mousemove", mouseMoveHandler)
      skills.current.removeEventListener("mouseout", mouseOutHandler)
      skills.current.removeEventListener("mouseover", mouseOverHandler)
      cancelAnimationFrame(requestAnimation.current)
    }
  }, [])

  return (
    <>
      <div className={styles.fade}></div>
      <div ref={skills} className={styles.skills}>
        <div ref={cursor} className={styles.skills__cursor}></div>
        {skillsArray.map((item, index) => {
          // Setting up random vector (skill move direction)
          // Make x and y = 1 or 2
          let x = Math.floor(Math.random() * 2) + 1
          let y = Math.floor(Math.random() * 2) + 1
          // Make x and y = negative or positive
          x *= index % 2 === 0 ? 1 : -1
          y *= index % 3 === 0 ? 1 : -1

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
