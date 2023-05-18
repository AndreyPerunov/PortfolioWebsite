import { FC } from "react"
import styles from "./modules/HeroSection.module.scss"
import Image from "next/image"
import Me from "../../public/Me.png"
import ArrowDown from "./ArrowDown"
// Fonts
import { Allerta_Stencil } from "next/font/google"
const allerta_Stencil = Allerta_Stencil({ weight: "400", subsets: ["latin"] })

const HeroSection: FC = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image className={styles.hero__picture} priority alt="My Picture" src={Me} />
        <h1 className={styles.hero__name + " " + allerta_Stencil.className}>Andrey Perunov</h1>
        <h1 className={styles.hero__profession + " " + allerta_Stencil.className}>Full-stack developer</h1>
      </div>
      <p className={styles.question}>Have an offer?</p>

      <div style={{ textAlign: "center" }}>
        <a className={styles.button} href="">
          Let's Talk!
        </a>
      </div>

      <ArrowDown />
    </>
  )
}

export default HeroSection
