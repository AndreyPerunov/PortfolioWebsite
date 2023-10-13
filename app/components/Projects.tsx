"use client"
import { FC } from "react"
import { useEffect, useRef } from "react"

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
import styles from "./modules/Projects.module.scss"
// Components
import Project from "./Project"

const Projects: FC = () => {
  const backgroundSphere1 = useRef<HTMLDivElement | null>()
  const backgroundSphere2 = useRef<HTMLDivElement | null>()
  const backgroundSphere3 = useRef<HTMLDivElement | null>()
  const backgroundSphere4 = useRef<HTMLDivElement | null>()
  useEffect(() => {
    let topInitial1 = backgroundSphere1.current.offsetTop + 200
    let topInitial2 = backgroundSphere2.current.offsetTop + 200
    let topInitial3 = backgroundSphere3.current.offsetTop + 200
    let topInitial4 = backgroundSphere4.current.offsetTop + 200
    const scrollHandler = e => {
      backgroundSphere1.current.style.top = `${topInitial1 - window.scrollY * 0.4}px`
      backgroundSphere2.current.style.top = `${topInitial2 - window.scrollY * 0.4}px`
      backgroundSphere3.current.style.top = `${topInitial3 - window.scrollY * 0.4}px`
      backgroundSphere4.current.style.top = `${topInitial4 - window.scrollY * 0.4}px`
    }
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])
  return (
    <div className={styles.projects} id="projects">
      <div ref={backgroundSphere1} className={styles.projects__backgroundSphere}></div>
      <div ref={backgroundSphere2} className={styles.projects__backgroundSphere}></div>
      <div ref={backgroundSphere3} className={styles.projects__backgroundSphere}></div>
      <div ref={backgroundSphere4} className={styles.projects__backgroundSphere}></div>

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
        gitHubLink="https://github.com/AndreyPerunov/frontendforreactappcourse"
        websiteLink="https://visionary-liger-54eeac.netlify.app/"
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
        gitHubLink="https://github.com/AndreyPerunov/travel-site"
        websiteLink="https://flourishing-choux-f7c35e.netlify.app/"
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
        gitHubLink="https://github.com/AndreyPerunov/Video-Player"
        websiteLink="https://andreyperunov.github.io/Video-Player/"
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
        gitHubLink="https://github.com/AndreyPerunov/complex-app"
        websiteLink="https://complex-app.onrender.com/"
      />
    </div>
  )
}

export default Projects
