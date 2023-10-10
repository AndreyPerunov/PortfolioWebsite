import styles from "./modules/SkillsFound.module.scss"
import { FC } from "react"
import Image from "next/image"
// Icons
import WebPackIcon from "../../public/Web Pack.svg"
import ReactIcon from "../../public/React.svg"
import GitIcon from "../../public/Git.svg"
import MongoDBIcon from "../../public/MongoDB.svg"
import ExpressJSIcon from "../../public/Expressjs.png"
import SassIcon from "../../public/Sass.svg"
import NextIcon from "../../public/nextjs.svg"
import cssIcon from "../../public/css.png"
import htmlIcon from "../../public/html.png"
import nodeIcon from "../../public/node.png"
import tsIcon from "../../public/ts.svg"
import deployIcon from "../../public/deploy.png"
import apiIcon from "../../public/api.svg"
import criticalThinkingIcon from "../../public/criticalThinking.png"
import problemSolvingIcon from "../../public/problemSolving.png"
import oopIcon from "../../public/oop.png"
import sqlIcon from "../../public/sql.svg"
import jsIcon from "../../public/js.png"
import githubIcon from "../../public/github.svg"
import figmaIcon from "../../public/figma.png"

const SkillsFound: FC = () => {
  const skills = [
    { name: "HTML", src: htmlIcon },
    { name: "CSS", src: cssIcon },
    { name: "JavaScript", src: jsIcon },
    { name: "Sass", src: SassIcon },
    { name: "Deployment", src: deployIcon },
    { name: "React.js", src: ReactIcon },
    { name: "Next.js", src: NextIcon },
    { name: "TypeScript", src: tsIcon },
    { name: "WebPack", src: WebPackIcon },
    { name: "OOP", src: oopIcon },
    { name: "Node.js", src: nodeIcon },
    { name: "Express.js", src: ExpressJSIcon },
    { name: "MongoDB", src: MongoDBIcon },
    { name: "SQL", src: sqlIcon },
    { name: "REST APIs", src: apiIcon },
    { name: "Git", src: GitIcon },
    { name: "GitHub", src: githubIcon },
    { name: "Critical Thinking ", src: criticalThinkingIcon },
    { name: "Problem Solving", src: problemSolvingIcon },
    { name: "Figma", src: figmaIcon }
  ]

  return (
    <div className={styles.skills}>
      <h1>What I can do</h1>
      <div className={styles.skills__grid}>
        {skills.map(skill => (
          <div className={styles.skill}>
            <div className={styles.skill__imgContainer}>
              <Image className={styles.skill__imgContainer__image} alt={skill.name} src={skill.src} />
            </div>
            <div className={styles.skill__txtContainer}>
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsFound
