import { FC } from "react"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Projects from "./components/Projects"
import SkillsWrapper from "./components/SkillsWrapper"
import Contact from "./components/Contact"

const Index: FC = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Wrapper>
        <Header />
        <HeroSection />
      </Wrapper>
      <Wrapper narrow={true}>
        <Projects />
      </Wrapper>
      <SkillsWrapper />
      <Wrapper narrow={true}>
        <Contact />
      </Wrapper>
    </div>
  )
}

export default Index
