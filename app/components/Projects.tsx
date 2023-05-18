import { FC, ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import ComplexReactApp from "../../public/Complex React App.png"
import WebPackIcon from "../../public/Web Pack.svg"
import ReactIcon from "../../public/React.svg"
import GitIcon from "../../public/Git.svg"
import ImmerIcon from "../../public/Immer.svg"
import MongoDBIcon from "../../public/MongoDB.svg"
import AxiosIcon from "../../public/Axios.png"
import JWTIcon from "../../public/JWT.svg"
import ExpressJSIcon from "../../public/Expressjs.png"
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
  return (
    <div>
      <Image alt={title} src={image} />
      <h1>{title}</h1>
      <p>{body}</p>
      <p>Tech stack:</p>
      {stack.map((tool, index) => (
        <Image key={index} src={tool.src} alt={tool.name} title={tool.name} />
      ))}
    </div>
  )
}

const Projects: FC = () => {
  return (
    <>
      <h1>Recent Projects</h1>
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
    </>
  )
}

export default Projects
