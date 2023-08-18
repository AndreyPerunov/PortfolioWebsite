"use client"
import { FC, useEffect, useRef, useState } from "react"
import styles from "./modules/HeroSection.module.scss"
import Image from "next/image"
import Me from "../../public/Me.png"
import ArrowDown from "./ArrowDown"
import Button from "./Button"
// Fonts
import { Allerta_Stencil } from "next/font/google"
const allerta_Stencil = Allerta_Stencil({ weight: "400", subsets: ["latin"] })

const HeroSection: FC = () => {
  const myPicture = useRef<HTMLImageElement | null>()
  const bg1 = useRef<HTMLImageElement | null>()
  const bg2 = useRef<HTMLImageElement | null>()
  const bg3 = useRef<HTMLImageElement | null>()
  const bg4 = useRef<HTMLImageElement | null>()
  const bg5 = useRef<HTMLImageElement | null>()
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  useEffect(() => {
    const mousemoveHandler = e => {
      const myPictureRect = myPicture.current.getBoundingClientRect()
      if (myPictureRect.bottom > 0) {
        const centerX = myPictureRect.width / 2 + myPictureRect.x
        const centerY = myPictureRect.height / 2 + myPictureRect.y
        setMouseX((e.clientX - centerX) / 500)
        setMouseY((e.clientY - centerY) / 500)
        console.log("test")
      }
    }

    window.addEventListener("mousemove", mousemoveHandler)

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler)
    }
  }, [])

  return (
    <div className={styles.hero}>
      <div className={styles.hero__banner}>
        <div className={styles.hero__banner__img_container}>
          <Image
            style={{
              top: `${mouseY * -15}px`,
              left: `${mouseX * -15}px`
            }}
            className={styles.hero__banner__img_container__pictureBackground}
            priority
            alt="Background Image"
            src={Me}
            ref={bg1}
          />
          <Image
            style={{
              top: `${mouseY * -30}px`,
              left: `${mouseX * -30}px`
            }}
            className={styles.hero__banner__img_container__pictureBackground}
            priority
            alt="Background Image"
            src={Me}
            ref={bg2}
          />
          <Image
            style={{
              top: `${mouseY * -45}px`,
              left: `${mouseX * -45}px`
            }}
            className={styles.hero__banner__img_container__pictureBackground}
            priority
            alt="Background Image"
            src={Me}
            ref={bg3}
          />
          <Image
            style={{
              top: `${mouseY * -60}px`,
              left: `${mouseX * -60}px`
            }}
            className={styles.hero__banner__img_container__pictureBackground}
            priority
            alt="Background Image"
            src={Me}
            ref={bg4}
          />
          <Image
            style={{
              top: `${mouseY * -75}px`,
              left: `${mouseX * -75}px`
            }}
            className={styles.hero__banner__img_container__pictureBackground}
            priority
            alt="Background Image"
            src={Me}
            ref={bg5}
          />
          <Image className={styles.hero__banner__img_container__picture} priority alt="My Picture" src={Me} ref={myPicture} />
        </div>
        <h1 className={styles.hero__banner__name + " " + allerta_Stencil.className}>Andrey Perunov</h1>
        <h1 className={styles.hero__banner__profession + " " + allerta_Stencil.className}>Full-stack developer</h1>
      </div>
      <p className={styles.hero__question}>Have an offer?</p>

      <div style={{ textAlign: "center" }}>
        <Button href="#">Let's Talk!</Button>
      </div>

      <ArrowDown />
    </div>
  )
}

export default HeroSection
