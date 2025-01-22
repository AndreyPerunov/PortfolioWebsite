// Styles
import "./styles/main.scss"

// Components
import Alert from "./components/Alert"
import { Metadata } from "next/types"
import { ProfilePage, WithContext } from "schema-dts"

// Fontawesome
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

// Fonts
import { Allerta } from "next/font/google"
const allerta = Allerta({
  weight: "400",
  subsets: ["latin"]
})

const BASE_URL = "https://andreyperunov.com"

export async function generateMetadata(): Promise<Metadata> {
  const title = "Andrey Perunov | Portfolio Website"

  const description = "My name is Andrey Perunov, I am a professional web developer. This is portfolio website. Here you can find my projects, skills and other information about me"

  const keywords = ["Andrey Perunov", "Perunov", "Andrey", "Frontend", "Backend", "Fullstack", "JavaScript", "JS", "React", "Portfolio", "Riga", "Latvia", "Web Developer"]
  const baseUrl = BASE_URL

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    themeColor: "#ffffff",
    icons: {
      icon: "/favicon.ico"
    },
    creator: "Andrey Perunov",
    openGraph: {
      title,
      description,
      url: baseUrl,
      type: "website",
      locale: "en_US",
      siteName: "Andrey Perunov | Portfolio Website"
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Andrey Perunov | Portfolio Website",
    description: "My name is Andrey Perunov, I am a professional web developer. This is portfolio website. Here you can find my projects, skills and other information about me",
    dateCreated: new Date("2023-04-30").toISOString(),
    dateModified: new Date().toISOString(),
    url: BASE_URL,
    mainEntity: {
      "@type": "Person",
      name: "Andrey Perunov",
      jobTitle: "Full-stack Developer",
      image: `${BASE_URL}/public/head-shot.jpg`,
      url: BASE_URL,
      sameAs: ["https://github.com/AndreyPerunov", "https://linkedin.com/in/andrey-perunov/"],
      worksFor: {
        "@type": "Organization",
        name: "Freelancer"
      },
      knowsAbout: ["JavaScript", "React", "Next.js", "Node.js", "CSS", "HTML", "TypeScript"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "andrey.perunov@gmail.com",
        contactType: "Portfolio Contact",
        areaServed: "Global",
        availableLanguage: ["English", "Russian", "Latvian"]
      }
    },
    hasPart: [
      {
        "@type": "WebApplication",
        name: "TSI Schedule Scraper",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR"
        },
        description: "This application automates the process of transferring the schedule from the Transport and Telecommunication Institute (TSI) website to Google Calendar by following an ETL process. The tool performs daily web scraping of the TSI website to extract schedule data, processes and prepares the data, and finally allows both students and lecturers to load their updated schedules into Google Calendar.",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web-based",
        softwareVersion: "1.0",
        url: "https://www.tsi-schedule-scraper.com/",
        sameAs: ["https://github.com/AndreyPerunov/TSI-Schedule-Scrapping-Backend-v2", "https://github.com/AndreyPerunov/TSI-Schedule-Scraping-Frontend"],
        about: ["Automation", "ETL", "Docker", "React.js", "Puppeteer", "Next.js", "Git", "Axios", "JWT", "Express.js", "Prisma", "GCP", "Luxon", "PostgreSQL", "Jest", "TypeScript", "Node.js", "Redux Toolkit", "Tailwindcss"]
      },
      {
        "@type": "WebApplication",
        name: "Complex React App",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR"
        },
        description: "Complex Social media website written in React.js. Frontend oriented website.",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "Web-based",
        softwareVersion: "1.0",
        url: "https://visionary-liger-54eeac.netlify.app/",
        sameAs: ["https://github.com/AndreyPerunov/frontendforreactappcourse"],
        about: ["Social Media", "React.js", "Web Pack", "Git", "Immer", "MongoDB", "Axios", "Socket.io", "JWT", "Express.js"]
      },
      {
        "@type": "WebApplication",
        name: "Travel Site",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR"
        },
        description: "Travel Site website is oriented to test my html, css and optimization skills.",
        applicationCategory: "TravelApplication",
        operatingSystem: "Web-based",
        softwareVersion: "1.0",
        url: "https://flourishing-choux-f7c35e.netlify.app/",
        sameAs: ["https://github.com/AndreyPerunov/travel-site"],
        about: ["PostCSS", "Lodash.js", "Web Pack", "Git"]
      },
      {
        "@type": "WebApplication",
        name: "Video Player",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR"
        },
        description: "This player is a copy of an YouTube video player. With a responsive layout. Made in React.js.",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web-based",
        softwareVersion: "1.0",
        url: "https://andreyperunov.github.io/Video-Player/",
        sameAs: ["https://github.com/AndreyPerunov/Video-Player"],
        about: ["React.js", "Sass", "Web Pack", "Git"]
      },
      {
        "@type": "WebApplication",
        name: "Complex App",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR"
        },
        description: "Complex Social media website. Written in vanilla JavaScript and Node.js. Project have MVC architecture. Backend and frontend oriented website.",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "Web-based",
        softwareVersion: "1.0",
        url: "https://complex-app.onrender.com/",
        sameAs: ["https://github.com/AndreyPerunov/complex-app"],
        about: ["Web Pack", "Git", "MongoDB", "Axios", "Socket.io", "JWT", "Express.js"]
      },
      {
        "@type": "WebApplication",
        name: "Chat Room App",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR"
        },
        description: "Chat Application with rooms. Build with React.js and Node.js. Backend (socket.io) oriented website.",
        applicationCategory: "CommunicationApplication",
        operatingSystem: "Web-based",
        softwareVersion: "1.0",
        url: "https://chat-room-frontend-ten.vercel.app",
        sameAs: ["https://github.com/AndreyPerunov/ChatRoom-frontend"],
        about: ["Vite", "React.js", "TypeScript", "Socket.io", "Sass", "Git", "Axios", "Express.js"]
      }
    ]
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={allerta.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
