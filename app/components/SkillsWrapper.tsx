"use client"

import { useState } from "react"
import SkillsNotFound from "./SkillsNotFound"
import SkillsFound from "./SkillsFound"

const Skills = () => {
  const [allFound, setAllFound] = useState<boolean>(false)

  if (allFound) {
    return <SkillsFound />
  } else {
    return <SkillsNotFound setAllFound={setAllFound} />
  }
}

export default Skills
