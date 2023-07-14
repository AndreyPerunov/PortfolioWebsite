import { FC } from "react"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Projects from "./components/Projects"

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
    </div>
  )
}

export default Index
