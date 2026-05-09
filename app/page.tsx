"use client"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Certifications from "../components/Certifications"
import TerminalSection from "../components/Terminal"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"#070a0f"}}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <TerminalSection />
      <Contact />
      <Footer />
    </main>
  )
}
