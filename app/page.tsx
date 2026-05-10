"use client"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Overview from "../components/Overview"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"
import ArchDiagram from "../components/ArchDiagram"
import Observability from "../components/Observability"
import Security from "../components/Security"
import Blog from "../components/Blog"
import Experience from "../components/Experience"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CertBadge from "../components/CertBadge"

export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"#060a0f"}}>
      <Nav />
      <Hero />
      <CertBadge />
      <Overview />
      <TechStack />
      <Projects />
      <ArchDiagram />
      <Observability />
      <Security />
      <Blog />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}