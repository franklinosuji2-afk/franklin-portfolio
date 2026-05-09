import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Franklin Chinonso Osuji | AWS Cloud & DevOps Engineer",
  description: "AWS-Certified Cloud & DevOps Engineer based in Berlin, Germany. Specializing in Terraform, Docker/ECS, CI/CD automation, and cloud-native infrastructure.",
  keywords: ["Franklin Osuji","AWS Cloud Engineer","DevOps Engineer","Berlin","Terraform","Docker","CI/CD"],
  authors: [{ name: "Franklin Chinonso Osuji" }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Ny0Zc5CBbuxdAjUwq9YZWrnXRcXKeJDAO6bAbmGdtho" />
      </head>
      <body>{children}</body>
    </html>
  )
}
