import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Body, Container, Column, Head, Hr, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import * as React from "react"

const baseUrl = "https://andreyperunov.com"

export const Respond = ({ name }: { name: string }) => (
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
          <Text style={heading}>THANK YOU FOR CONTACTING ME</Text>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>Thank you for contacting me!</Text>
          <Text style={paragraph}>
            Your mail has been sent to me from my portfolio website form{" "}
            <Link href={`${baseUrl}#contacts`} style={link}>
              andreyperunov.com
            </Link>
            . I will try to respond as soon as possible. If it takes too long to me to respond, please do not hesitate to contact me via phone {"("}
            <Link href="tel:+37127801043" style={link}>
              +371 27 801 043
            </Link>
            {")"} or email {"("}
            <Link href="mailto:andrey.perunov1@gmail.com" style={link}>
              andrey.perunov1@gmail.com
            </Link>
            {")"} .
          </Text>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>Andrey Perunov</Text>
        </Section>

        <Section style={containerContact}>
          <Row>
            <Text style={paragraph}>Connect with me</Text>
          </Row>
          <Row
            align="left"
            style={{
              width: "84px",
              float: "left",
              paddingBottom: "20px"
            }}
          >
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://www.linkedin.com/in/andrey-perunov/">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ width: "25px", height: "25px", color: "#0077b5" }} />
              </Link>
            </Column>
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://github.com/AndreyPerunov">
                <FontAwesomeIcon icon={faGithub} style={{ width: "25px", height: "25px", color: "#333" }} />
              </Link>
            </Column>
          </Row>
        </Section>

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0
            }}
          >
            This is auto-reply email. Please do not reply to this email.{" "}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default Respond

const main = {
  backgroundColor: "#dbddde",
  padding: "20px",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const sectionLogo = {
  padding: "0 40px"
}

const headerBlue = {
  marginTop: "-1px"
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
