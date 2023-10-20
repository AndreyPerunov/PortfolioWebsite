// Styles
import "./styles/main.scss"

// Components
import Footer from "./components/Footer"
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
  title: {
    default: "Andrey",
    template: "%s | Andrey"
  },
  icons: {
    icon: "/favicon.ico"
  },
  description: "My name is Andrey Perunov, I am a professional web developer.",
  keywords: ["Andrey Perunov", "Perunov", "Andrey", "Frontend", "Backend", "Fullstack", "JavaScript", "React", "..."]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={allerta.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
