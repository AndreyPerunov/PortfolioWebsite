import { FC } from "react"
import HeroSection from "../components/HeroSection"
import Header from "../components/Header"
import Wrapper from "../components/Wrapper"

const Index: FC = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <HeroSection />
      </Wrapper>
    </>
  )
}

export default Index
