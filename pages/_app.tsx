// Types
import type { AppProps } from "next/app"

// Styles
import "../styles/main.scss"

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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={allerta.className}>
      <Component {...pageProps} />
    </main>
  )
}
