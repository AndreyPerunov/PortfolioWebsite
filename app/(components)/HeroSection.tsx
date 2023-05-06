import { FC } from "react"
import styles from "./(styles)/HeroSection.module.scss"
import Image from "next/image"
import Me from "../../public/Me.png"
// Fonts
import { Allerta_Stencil } from "next/font/google"
const allerta_Stencil = Allerta_Stencil({ weight: "400", subsets: ["latin"] })

const HeroSection: FC = () => {
  return (
    <div className={allerta_Stencil.className + " " + styles.hero}>
      <h1 className={styles.hero__name}>Andrey Perunov</h1>
      <h1 className={styles.hero__profession}>Full-stack developer</h1>
      <Image className={styles.hero__picture} priority alt="My Picture" src={Me} />
    </div>
  )
}

export default HeroSection
