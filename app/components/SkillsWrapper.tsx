"use client"

import { useState } from "react"
import SkillsNotFound from "./SkillsNotFound"

const Skills = () => {
  const [allFound, setAllFound] = useState<boolean>(false)

  if (allFound) {
    return <h1>Success</h1>
  } else {
    return <SkillsNotFound setAllFound={setAllFound} />
  }
}

export default Skills
