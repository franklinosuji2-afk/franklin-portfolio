"use client"
import { useState, useEffect } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#terminal", label: "Terminal" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:scrolled?"rgba(7,10,15,0.95)":"transparent",borderBottom:scrolled?"1px solid #1e2d40":"none",backdropFilter:scrolled?"blur(12px)":"none",transition:"all 0.3s"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#" style={{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none"}}>
          <div style={{width:"32px",height:"32px",background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.3)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#60a5fa",fontFamily:"monospace",fontSize:"14px"}}>{">"}</div>
          <span style={{fontFamily:"monospace",fontSize:"14px",fontWeight:600,color:"#fff"}}>fo@cloud:~$</span>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:"4px"}}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{padding:"6px 12px",fontSize:"14px",color:"#8b949e",textDecoration:"none",borderRadius:"6px",transition:"all 0.15s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="#8b949e")}>
              {l.label}
            </a>
          ))}
          <a href="/Franklin_CV.pdf" download style={{marginLeft:"12px",padding:"6px 16px",fontSize:"14px",fontWeight:600,color:"#fff",background:"#2563eb",borderRadius:"6px",textDecoration:"none"}}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
