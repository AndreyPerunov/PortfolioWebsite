import { FC } from "react"
import { useEffect, useRef, useState } from "react"
import { throttle } from "lodash"
import Image, { StaticImageData } from "next/image"
import Button from "./Button"
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
  gitHubLink: string
  websiteLink: string
}

const Project: FC<projectProps> = ({ title, image, body, stack, gitHubLink, websiteLink }) => {
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
        <Button href={websiteLink} style={{ marginRight: "10px", marginTop: "15px" }}>
          Checkout
        </Button>
        <Button href={gitHubLink} hollow={true}>
          Github
        </Button>
      </div>
    </div>
  )
}

export default Project
