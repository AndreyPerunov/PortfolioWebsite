"use client"
import { FC, useEffect, useRef, useState } from "react"
import styles from "./modules/Skills.module.scss"

const Skills: FC = () => {
  const cursor = useRef<HTMLDivElement>()

  const delay = 40

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

  useEffect(() => {
    cursorX.current = window.innerWidth / 2
    cursorY.current = window.innerHeight / 2
    delayedCursorX.current = window.innerWidth / 2
    delayedCursorY.current = window.innerHeight / 2
    animate()
    return () => {
      cancelAnimationFrame(requestAnimation.current)
    }
  }, [])

  return (
    <>
      <div className={styles.fade}></div>
      <div
        onMouseMove={e => {
          cursorX.current = e.clientX
          cursorY.current = e.clientY - e.currentTarget.getBoundingClientRect().top
          cursor.current.classList.add(styles.skills__cursorVisible)
        }}
        onMouseOut={() => {
          // cursorX = window.innerWidth / 2
          // cursorY = window.innerHeight / 2
          cursor.current.classList.remove(styles.skills__cursorVisible)
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
