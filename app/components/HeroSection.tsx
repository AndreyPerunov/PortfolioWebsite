"use client"
import { FC, useEffect, useRef, useCallback } from "react"

import styles from "./modules/HeroSection.module.scss"
import Image from "next/image"
import Me from "../../public/Me.png"
import ArrowDown from "./ArrowDown"
import Button from "./Button"
import { isMobile } from "react-device-detect"
// Fonts
import { Allerta_Stencil } from "next/font/google"

const allerta_Stencil = Allerta_Stencil({ weight: "400", subsets: ["latin"] })

const HeroSection: FC = () => {
  const picture1 = useRef<HTMLImageElement | null>(null)
  const picture2 = useRef<HTMLImageElement | null>(null)
  const picture3 = useRef<HTMLImageElement | null>(null)
  const picture4 = useRef<HTMLImageElement | null>(null)
  const picture5 = useRef<HTMLImageElement | null>(null)
  const picture6 = useRef<HTMLImageElement | null>(null)
  const requestAnimation = useRef<number | null>(null)

  // Speed of delayedCursor
  const delay = 20

  // Position of cursor
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  // Position of delayedPoint
  const delayedPointX = useRef(0)
  const delayedPointY = useRef(0)

  const animate = () => {
    if (!picture6.current) return

    const myPictureRect = picture6.current.getBoundingClientRect()
    if (myPictureRect.bottom > 0) {
      // Move delayedPoint a bit closer to CURSOR
      delayedPointX.current += (cursorX.current - delayedPointX.current) / delay
      delayedPointY.current += (cursorY.current - delayedPointY.current) / delay

      // Apply movement until it is in the same position as CURSOR
      if (
        (Math.abs(delayedPointX.current - cursorX.current) > 0.3 || Math.abs(delayedPointY.current - cursorY.current) > 0.3) &&
        picture1.current &&
        picture2.current &&
        picture3.current &&
        picture4.current &&
        picture5.current
      ) {
        const centerX = myPictureRect.width / 2 + myPictureRect.x
        const centerY = myPictureRect.height / 2 + myPictureRect.y
        const howCloseX = (delayedPointX.current - centerX) / 500
        const howCloseY = (delayedPointY.current - centerY) / 500

        picture1.current.style.left = `${howCloseX * -30}px`
        picture1.current.style.top = `${howCloseY * -30}px`

        picture2.current.style.left = `${howCloseX * -45}px`
        picture2.current.style.top = `${howCloseY * -45}px`

        picture3.current.style.left = `${howCloseX * -60}px`
        picture3.current.style.top = `${howCloseY * -60}px`

        picture4.current.style.left = `${howCloseX * -75}px`
        picture4.current.style.top = `${howCloseY * -75}px`

        picture5.current.style.left = `${howCloseX * -100}px`
        picture5.current.style.top = `${howCloseY * -100}px`

        picture6.current.style.left = `${howCloseX * -10}px`
        picture6.current.style.top = `${howCloseY * -10}px`
      }
    }

    // Loop
    requestAnimation.current = requestAnimationFrame(animate)
  }

  // Tracking CURSOR position
  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    cursorX.current = e.clientX
    cursorY.current = e.clientY
  }, [])

  useEffect(() => {
    if (!picture6.current) return

    // Set initial position of corsor and delayedCursor
    const myPictureRect = picture6.current.getBoundingClientRect()
    cursorX.current = myPictureRect.width / 2 + myPictureRect.x
    cursorY.current = myPictureRect.height / 2 + myPictureRect.y
    delayedPointX.current = myPictureRect.width / 2 + myPictureRect.x
    delayedPointY.current = myPictureRect.height / 2 + myPictureRect.y

    if (!isMobile) {
      window.addEventListener("mousemove", mouseMoveHandler)

      animate()
    }
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler)
      if (requestAnimation.current) cancelAnimationFrame(requestAnimation.current)
    }
  }, [])

  return (
    <div className={styles.hero}>
      <div className={styles.hero__banner}>
        <div className={styles.hero__banner__img_container}>
          {isMobile ? null : (
            <>
              <Image ref={picture1} className={styles.hero__banner__img_container__pictureBackground} priority alt="Background Image" src={Me} />
              <Image ref={picture2} className={styles.hero__banner__img_container__pictureBackground} priority alt="Background Image" src={Me} />
              <Image ref={picture3} className={styles.hero__banner__img_container__pictureBackground} priority alt="Background Image" src={Me} />
              <Image ref={picture4} className={styles.hero__banner__img_container__pictureBackground} priority alt="Background Image" src={Me} />
              <Image ref={picture5} className={styles.hero__banner__img_container__pictureBackground} priority alt="Background Image" src={Me} />
            </>
          )}
          <Image ref={picture6} className={styles.hero__banner__img_container__picture} priority alt="My Picture" src={Me} />
        </div>
        <h1 className={styles.hero__banner__name + " " + allerta_Stencil.className}>Hey, I'm Andrey</h1>
        <h1 className={styles.hero__banner__profession + " " + allerta_Stencil.className}>Full-stack developer</h1>
      </div>

      <p className={styles.hero__question}>Have an offer?</p>

      <div style={{ textAlign: "center" }}>
        <Button href="#contacts">Let's Talk!</Button>
      </div>

      <ArrowDown />
    </div>
  )
}

export default HeroSection
