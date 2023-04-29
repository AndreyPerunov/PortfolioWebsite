import { FC } from "react"
import styles from "../styles/modules/HeroSection.module.scss"
// Fonts
import { Allerta_Stencil } from "next/font/google"
const allerta_Stencil = Allerta_Stencil({ weight: "400", subsets: ["latin"] })

const HeroSection: FC = () => {
  return (
    <div className={allerta_Stencil.className + " " + styles.hero}>
      <h1>Andrey Perunov</h1>
      <h1>Full-stack developer</h1>
    </div>
  )
}

export default HeroSection
