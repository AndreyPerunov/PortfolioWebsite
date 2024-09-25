// Styles
import "./styles/main.scss"

// Components
import Alert from "./components/Alert"

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

export const metadata = {
  applicationName: "Portfolio Website",
  title: {
    default: "Andrey | Portfolio Website",
    template: "%s | Andrey"
  },
  icons: {
    icon: "/favicon.ico"
  },
  description: "My name is Andrey Perunov, I am a professional web developer. This is portfolio website. Here you can find my projects, skills and other information about me",
  keywords: ["Andrey Perunov", "Perunov", "Andrey", "Frontend", "Backend", "Fullstack", "JavaScript", "React", "Portfolio", "Riga", "Latvia", "Web Developer"],
  creator: "Andrey Perunov",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={allerta.className}>
        {children}
      </body>
    </html>
  )
}
