import { FC } from "react"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Projects from "./components/Projects"

const Index: FC = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <HeroSection />
      </Wrapper>
      <Wrapper narrow={true}>
        <Projects />
      </Wrapper>
    </>
  )
}

export default Index
