/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["resend", "react-email", "@react-email", "@react-email/components", "@sendgrid", "@sendgrid/mail"]
  }
}

module.exports = config
