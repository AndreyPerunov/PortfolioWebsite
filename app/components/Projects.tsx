"use client"
import { FC } from "react"
import { useEffect, useRef } from "react"
import { isMobile } from "react-device-detect"

// Images
import ComplexReactApp from "../../public/Complex React App.png"
import TravelSite from "../../public/Travel Site.png"
import VideoPlayer from "../../public/Video Player.png"
import ComplexApp from "../../public/Complex App.png"
import ChatRoom from "../../public/Chat Room.png"
import TSIScheduleScraper from "../../public/TSI Schedule Scraper.png"
import SkateboardingTricksAnalysis from "../../public/cv-sk8.png"
import LearnKana from "../../public/Learn Kana.png"
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
import ViteIcon from "../../public/vite.png"
import SocketIoIcon from "../../public/socket-io.svg"
import PuppeteerIcon from "../../public/pptrdev-icon.svg"
import NextjsIcon from "../../public/nextjs-icon.svg"
import PrismaIcon from "../../public/prisma.svg"
import GoogleCloudPlatformIcon from "../../public/google_cloud-icon.svg"
import LuxonIcon from "../../public/Luxon_icon_64x64.png"
import PostgreSQLIcon from "../../public/postgresql-icon.svg"
import JestIcon from "../../public/jestjsio-icon.svg"
import TypeScriptIcon from "../../public/ts.svg"
import NodejsIcon from "../../public/node.png"
import ReduxToolkitIcon from "../../public/js_redux-icon.svg"
import TailwindCSSIcon from "../../public/tailwindcss-icon.svg"
import DockerIcon from "../../public/docker-icon.svg"
import ZodIcon from "../../public/zod-logo-glow.webp"
import PythonIcon from "../../public/python-icon.svg"
import YOLOIcon from "../../public/ultralytics-icon.png"
import OpenCVIcon from "../../public/OpenCV-icon.png"
import CVATIcon from "../../public/CVAT-icon.png"
import FastAPIIcon from "../../public/FASTAPI-icon.png"
import NumpyIcon from "../../public/numpy-icon.svg"

// Styles
import styles from "./modules/Projects.module.scss"
// Components
import Project from "./Project"

const Projects: FC = () => {
  const backgroundSphere1 = useRef<HTMLDivElement | null>(null)
  const backgroundSphere2 = useRef<HTMLDivElement | null>(null)
  const backgroundSphere3 = useRef<HTMLDivElement | null>(null)
  const backgroundSphere4 = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (isMobile) return
    if (!backgroundSphere1.current || !backgroundSphere2.current || !backgroundSphere3.current || !backgroundSphere4.current) return

    const topInitial1 = backgroundSphere1.current.offsetTop + 200
    const topInitial2 = backgroundSphere2.current.offsetTop + 200
    const topInitial3 = backgroundSphere3.current.offsetTop + 200
    const topInitial4 = backgroundSphere4.current.offsetTop + 200
    const scrollHandler = () => {
      if (!backgroundSphere1.current || !backgroundSphere2.current || !backgroundSphere3.current || !backgroundSphere4.current) return
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
        title="Computer Vision: Skateboarding Analysis"
        image={SkateboardingTricksAnalysis}
        body="A CV system that detects and classifies sk8boarding tricks from video. I trained a custom YOLO pose model to track a sk8board's 6 keypoints, then fused it with human-pose and segmentation models into a pipeline that reconstructs board orientation via PCA, measures jump height and rotation, and classifies tricks. Full ML lifecycle from CVAT dataset prep and model training to a inference package with a FastAPI/web frontend."
        stack={[
          { name: "Ultralitics YOLO v11", src: YOLOIcon },
          { name: "OpenCV", src: OpenCVIcon },
          { name: "CVAT", src: CVATIcon },
          { name: "NumPy", src: NumpyIcon },
          { name: "Python", src: PythonIcon },
          { name: "FastAPI", src: FastAPIIcon },
          { name: "React", src: ReactIcon },
          { name: "Next.js", src: NextjsIcon },
          { name: "Git", src: GitIcon },
          { name: "TypeScript", src: TypeScriptIcon },
          { name: "TailwindCSS", src: TailwindCSSIcon }
        ]}
        gitHubLink="https://github.com/AndreyPerunov/CV-System-for-Skateboarding-Trick-Analysis-Using-YOLO-and-Human-Pose-Estimation"
        websiteLink="https://cv-sk8.andreyperunov.com/"
      />
      <Project
        title="TSI Schedule Scraper"
        image={TSIScheduleScraper}
        body="This application automates the process of transferring the schedule from the Transport and Telecommunication Institute (TSI) website to Google Calendar by following an ETL process. The tool performs daily web scraping of the TSI website to extract schedule data, processes and prepares the data, and finally allows both students and lecturers to load their updated schedules into Google Calendar."
        stack={[
          { name: "Docker", src: DockerIcon },
          { name: "React", src: ReactIcon },
          { name: "Puppeteer", src: PuppeteerIcon },
          { name: "Next.js", src: NextjsIcon },
          { name: "Git", src: GitIcon },
          { name: "Axios", src: AxiosIcon },
          { name: "JWT", src: JWTIcon },
          { name: "Express.js", src: ExpressJSIcon },
          { name: "Prisma", src: PrismaIcon },
          { name: "GCP - Google Cloud Platform", src: GoogleCloudPlatformIcon },
          { name: "Luxon", src: LuxonIcon },
          { name: "PostgreSQL", src: PostgreSQLIcon },
          { name: "Jest", src: JestIcon },
          { name: "TypeScript", src: TypeScriptIcon },
          { name: "Node.js", src: NodejsIcon },
          { name: "Redux Toolkit", src: ReduxToolkitIcon },
          { name: "TailwindCSS", src: TailwindCSSIcon }
        ]}
        gitHubLink="https://github.com/AndreyPerunov/TSI-Schedule-Scrapping-Backend-v2"
        websiteLink="https://www.linkedin.com/feed/update/urn:li:activity:7215728366660812800/"
      />
      <Project
        title="Learn Kana"
        image={LearnKana}
        body="Tool for learning Japanese Hiragana and Katakana alphabets. Application uses spaced repetition system (SRS) to help users memorize characters more effectively. Users type characters using romaji input method. Application tracks user progress and adjusts the frequency of character based on performance."
        stack={[
          { name: "React", src: ReactIcon },
          { name: "Next.js", src: NextjsIcon },
          { name: "Git", src: GitIcon },
          { name: "Prisma", src: PrismaIcon },
          { name: "PostgreSQL", src: PostgreSQLIcon },
          { name: "TypeScript", src: TypeScriptIcon },
          { name: "Node.js", src: NodejsIcon },
          { name: "Redux Toolkit", src: ReduxToolkitIcon },
          { name: "TailwindCSS", src: TailwindCSSIcon },
          { name: "Zod", src: ZodIcon }
        ]}
        gitHubLink="https://github.com/AndreyPerunov/kana"
        websiteLink="https://kana-five.vercel.app/"
      />
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
          { name: "Socket.io", src: SocketIoIcon },
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
          { name: "Socket.io", src: SocketIoIcon },
          { name: "JWT", src: JWTIcon },
          { name: "Express.js", src: ExpressJSIcon }
        ]}
        gitHubLink="https://github.com/AndreyPerunov/complex-app"
        websiteLink="https://complex-app.onrender.com/"
      />
      <Project
        title="Chat Room App"
        image={ChatRoom}
        body="Chat Application with rooms. Build with React.js and Node.js. Backend (socket.io) oriented website."
        stack={[
          { name: "Vite", src: ViteIcon },
          { name: "React", src: ReactIcon },
          { name: "TypeScript", src: TypeScriptIcon },
          { name: "Socket.io", src: SocketIoIcon },
          { name: "Sass", src: SassIcon },
          { name: "Git", src: GitIcon },
          { name: "Axios", src: AxiosIcon },
          { name: "Express.js", src: ExpressJSIcon }
        ]}
        gitHubLink="https://github.com/AndreyPerunov/ChatRoom-frontend"
        websiteLink="https://chat-room-frontend-ten.vercel.app"
      />
    </div>
  )
}

export default Projects
