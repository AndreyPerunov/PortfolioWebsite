"use client"

import { useEffect, useState } from "react"
import SkillsNotFound from "./SkillsNotFound"
import SkillsFound from "./SkillsFound"
import Wrapper from "./Wrapper"

const Skills = () => {
  const [allFound, setAllFound] = useState<boolean>(false)

  if (allFound || window.innerWidth < 800) {
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
