"use client"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import CertBadge from "../components/CertBadge"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Certifications from "../components/Certifications"
import Skills from "../components/Skills"
import TechStack from "../components/TechStack"
import Blog from "../components/Blog"
import Observability from "../components/Observability"
import Security from "../components/Security"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"#060a0f"}}>
      <Nav />
      <Hero />
      <CertBadge />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <TechStack />
      
      <Observability />
      <Security />
      <Contact />
      <Footer />
    </main>
  )
}
