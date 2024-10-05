import { Body, Container, Column, Head, Hr, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import * as React from "react"

const baseUrl = "https://andreyperunov.com"

interface ToMeProps {
  name: string
  from: string
  body: string
  time: string
}

export const ToMe = ({ name, from, body, time }: ToMeProps) => (
  <Html>
    <Head />
    <Preview>Portfolio Website Form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Link href={baseUrl} style={{ ...link, display: "flex", justifyItems: "center", alignItems: "center", paddingTop: "30px" }}>
                <Img style={sectionLogo} src={`${baseUrl}/favicon.ico`} width="31" height="31" alt="andreyperunov.com" /> andreyperunov.com
              </Link>
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>NEW MESSAGE FROM FORM</Text>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>{body}</Text>
        </Section>

        <Section style={{ ...containerContact, marginBottom: "30px" }}>
          <Row>
            <Text style={paragraph}>Message was sent by: </Text>
          </Row>
          <Row
            align="left"
            style={{
              width: "84px",
              float: "left"
            }}
          >
            <Text style={paragraphList}>
              Name: <b>{name}</b>
            </Text>
            <Text style={paragraphList}>
              Email:{" "}
              <Link href={`mailto:${from}`} style={link}>
                {from}
              </Link>
            </Text>
            <Text style={paragraphList}>
              Time: <i>{time}</i>
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default ToMe

const main = {
  backgroundColor: "#dbddde",
  padding: "20px",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const sectionLogo = {
  padding: "0 40px"
}

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden"
}

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px"
}

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#ffde59"
}

const paragraphContent = {
  padding: "0 40px"
}

const paragraphList = {
  fontSize: "12px",
  paddingLeft: 40
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043"
}

const link = {
  ...paragraph,
  color: "#ffde59"
}

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0"
}

const footer = {
  maxWidth: "100%"
}
