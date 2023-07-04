"use client"
import { FC } from "react"
import { useEffect, useRef, useState } from "react"
import { throttle } from "lodash"
import Image, { StaticImageData } from "next/image"
// Images
import ComplexReactApp from "../../public/Complex React App.png"
import TravelSite from "../../public/Travel Site.png"
import VideoPlayer from "../../public/Video Player.png"
import ComplexApp from "../../public/Complex App.png"
// Icons
import WebPackIcon from "../../public/Web Pack.svg"
import ReactIcon from "../../public/React.svg"
import GitIcon from "../../public/Git.svg"
import ImmerIcon from "../../public/Immer.svg"
import MongoDBIcon from "../../public/MongoDB.svg"
import AxiosIcon from "../../public/Axios.png"
import JWTIcon from "../../public/JWT.svg"
import ExpressJSIcon from "../../public/Expressjs.png"
import PostCSSIcon from "../../public/PostCSS.png"
import LodashJSIcon from "../../public/LodashJS.png"
import SassIcon from "../../public/Sass.svg"
// Styles
import styles from "./modules/Project.module.scss"

type Tool = {
  name: string
  src: StaticImageData
}

type projectProps = {
  title: string
  image: StaticImageData
  body: string
  stack: Tool[]
}

const Project: FC<projectProps> = ({ title, image, body, stack }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const projectRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollHandler = () => {
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect()
        let scrollPercent = (rect.y / window.innerHeight) * 100
        if (scrollPercent < 75) {
          setIsRevealed(true)
          window.removeEventListener("scroll", scrollThrottle)
        }
      }
    }

    const scrollThrottle = throttle(scrollHandler, 300)
    scrollHandler()
    window.addEventListener("scroll", scrollThrottle)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <div ref={projectRef} className={styles.project + ` ${isRevealed ? styles.projectReveal : ""}`}>
      <Image className={styles.project__image} alt={title} src={image} />
      <div className={styles.project_info}>
        <h1 className={styles.project__title}>{title}</h1>
        <p className={styles.project__body}>{body}</p>
        <p className={styles.project__techStackColon}>Tech stack:</p>
        <div className={styles.project__techStack}>
          {stack.map((tool, index) => (
            <Image key={index} src={tool.src} alt={tool.name} title={tool.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects: FC = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projects__title}>Recent Projects</h1>
      <Project
        title="Complex React App"
        image={ComplexReactApp}
        body="Complex Social media website written in React.js. Frontend oriented website."
        stack={[
          { name: "React", src: ReactIcon },
          { name: "Web Pack", src: WebPackIcon },
          { name: "Git", src: GitIcon },
          { name: "Immer", src: ImmerIcon },
          { name: "MongoDB", src: MongoDBIcon },
          { name: "Axios", src: AxiosIcon },
          { name: "JWT", src: JWTIcon },
          { name: "Express.js", src: ExpressJSIcon }
        ]}
      />
      <Project
        title="Travel Site"
        image={TravelSite}
        body="Travel Site website is oriented to test my html, css and optimization skills."
        stack={[
          { name: "PostCSS", src: PostCSSIcon },
          { name: "Lodash.js", src: LodashJSIcon },
          { name: "Web Pack", src: WebPackIcon },
          { name: "Git", src: GitIcon }
        ]}
      />
      <Project
        title="Video Player"
        image={VideoPlayer}
        body="This player is a copy of an YouTube video player. With a responsive layout. Made in React.js."
        stack={[
          { name: "React", src: ReactIcon },
          { name: "Sass", src: SassIcon },
          { name: "Web Pack", src: WebPackIcon },
          { name: "Git", src: GitIcon }
        ]}
      />
      <Project
        title="Complex App"
        image={ComplexApp}
        body="Complex Social media website. Written in vanilla JavaScript and Node.js. Project have MVC architecture. Backend and frontend oriented website."
        stack={[
          { name: "Web Pack", src: WebPackIcon },
          { name: "Git", src: GitIcon },
          { name: "MongoDB", src: MongoDBIcon },
          { name: "Axios", src: AxiosIcon },
          { name: "JWT", src: JWTIcon },
          { name: "Express.js", src: ExpressJSIcon }
        ]}
      />
    </div>
  )
}

export default Projects
