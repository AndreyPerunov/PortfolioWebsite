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
import PostgreSQLIcon from "../../public/postgresql-icon.svg"
import PrismaIcon from "../../public/prisma.svg"
import GoogleCloudPlatformIcon from "../../public/google_cloud-icon.svg"
import JestIcon from "../../public/jestjsio-icon.svg"
import ReduxToolkitIcon from "../../public/js_redux-icon.svg"
import TailwindCSSIcon from "../../public/tailwindcss-icon.svg"
import DockerIcon from "../../public/docker-icon.svg"
import ViteIcon from "../../public/vite.png"
import TestingIcon from "../../public/testing.png"
import DebugIcon from "../../public/debugging.png"

const SkillsFound: FC = () => {
  const skills = [
    { name: "Next.js", src: NextIcon },
    { name: "React.js", src: ReactIcon },
    { name: "Redux Toolkit", src: ReduxToolkitIcon },
    { name: "TypeScript", src: tsIcon },
    { name: "Tailwind CSS", src: TailwindCSSIcon },
    { name: "Prisma", src: PrismaIcon },
    { name: "MongoDB", src: MongoDBIcon },
    { name: "PostgreSQL", src: PostgreSQLIcon },
    { name: "SQL", src: sqlIcon },
    { name: "Docker", src: DockerIcon },
    { name: "GCP", src: GoogleCloudPlatformIcon },
    { name: "WebPack", src: WebPackIcon },
    { name: "OOP", src: oopIcon },
    { name: "Node.js", src: nodeIcon },
    { name: "Express.js", src: ExpressJSIcon },
    { name: "Figma", src: figmaIcon },
    { name: "HTML", src: htmlIcon },
    { name: "CSS", src: cssIcon },
    { name: "JavaScript", src: jsIcon },
    { name: "Sass", src: SassIcon },
    { name: "REST APIs", src: apiIcon },
    { name: "Git", src: GitIcon },
    { name: "GitHub", src: githubIcon },
    { name: "Vite", src: ViteIcon },
    { name: "Jest", src: JestIcon },
    { name: "Testing", src: TestingIcon },
    { name: "Debugging", src: DebugIcon },
    { name: "Deployment", src: deployIcon },
    { name: "Critical Thinking ", src: criticalThinkingIcon },
    { name: "Problem Solving", src: problemSolvingIcon }
  ]

  return (
    <div className={styles.skills} id="skills">
      <h1>What I can do</h1>
      <div className={styles.skills__grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
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
