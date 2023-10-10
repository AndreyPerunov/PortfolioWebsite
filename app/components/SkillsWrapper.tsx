"use client"

import { useState } from "react"
import SkillsNotFound from "./SkillsNotFound"
import SkillsFound from "./SkillsFound"
import Wrapper from "./Wrapper"

const Skills = () => {
  const [allFound, setAllFound] = useState<boolean>(false)

  if (allFound) {
    return (
      <Wrapper narrow={true}>
        <SkillsFound />
      </Wrapper>
    )
  } else {
    return <SkillsNotFound setAllFound={setAllFound} />
  }
}

export default Skills
