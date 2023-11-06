"use client"
import { useState, FC } from "react"
import { Tooltip } from "react-tooltip"

type copyTextProps = {
  content: string
  delay?: number
  toClipboard?: string
}

const CopyText: FC<copyTextProps> = ({ content, delay = 3000, toClipboard = content }) => {
  const [copyed, setCopyed] = useState(false)

  const copyText = () => {
    navigator.clipboard.writeText(toClipboard)
    setCopyed(true)
    setTimeout(() => {
      setCopyed(false)
    }, delay)
  }

  return (
    <>
      <p onClick={copyText} style={{ cursor: "pointer" }} data-tooltip-id={content} data-tooltip-content={copyed ? "Copyed" : "Click to Copy"} data-tooltip-delay-show={100}>
        {content}
      </p>
      <Tooltip id={content} style={copyed ? { backgroundColor: "#ffde59", color: "black", borderRadius: "25px" } : {}} />
    </>
  )
}

export default CopyText
