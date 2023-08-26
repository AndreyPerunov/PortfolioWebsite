"use client"
import { FC, useEffect, useRef } from "react"
import styles from "./modules/Skills.module.scss"

const Skills: FC = () => {
  const cursor = useRef<HTMLDivElement>()

  const delay = 40
  let cursorX = 0
  let cursorY = 0
  let delayedCursorX = 0
  let delayedCursorY = 0

  let requestCursorAnimation = null

  const animateCursor = () => {
    delayedCursorX += (cursorX - delayedCursorX) / delay
    delayedCursorY += (cursorY - delayedCursorY) / delay

    if (delayedCursorY > 0) {
      cursor.current.style.top = delayedCursorY + "px"
      cursor.current.style.left = delayedCursorX + "px"
    }

    requestCursorAnimation = requestAnimationFrame(animateCursor)
  }

  useEffect(() => {
    animateCursor()
    return () => {
      cancelAnimationFrame(requestCursorAnimation)
    }
  }, [])

  return (
    <>
      <div className={styles.fade}></div>
      <div
        onMouseMove={e => {
          cursorX = e.clientX
          cursorY = e.clientY - e.currentTarget.getBoundingClientRect().top
        }}
        className={styles.skills}
      >
        <div ref={cursor} className={styles.skills__cursor}></div>
        <p className={styles.skills__skill}>CSS</p>
        <p className={styles.skills__skill}>HTML</p>
        <p className={styles.skills__skill}>React</p>
        <p className={styles.skills__skill}>JavaScript</p>
        <p className={styles.skills__skill}>Node.js</p>
        <p className={styles.skills__skill}>TypeScript</p>
        <p className={styles.skills__skill}>Next.js</p>
        <p className={styles.skills__skill}>MongoDB</p>
        <p className={styles.skills__skill}>Sass</p>
        <p className={styles.skills__skill}>Deployment</p>
        <p className={styles.skills__skill}>WebPack</p>
        <p className={styles.skills__skill}>Express.js</p>
        <p className={styles.skills__skill}>Git</p>
        <p className={styles.skills__skill}>REST APIs</p>
        <p className={styles.skills__skill}>Critical Thinking</p>
        <p className={styles.skills__skill}>Problem Solving</p>
        <p className={styles.skills__skill}>OOP</p>
        <p className={styles.skills__skill}>SQL</p>
        <div className={styles.skills__light}>
          <h1>My Hidden Talents</h1>
        </div>
      </div>
    </>
  )
}

export default Skills
