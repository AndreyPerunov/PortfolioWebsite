import { FC } from "react"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

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
      <Skills />
    </div>
  )
}

export default Index
