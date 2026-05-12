"use client"
import { useState, useEffect } from "react"
const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#overview", label: "Stacks" },
  { href: "#blog", label: "Blog" },
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
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:scrolled||open?"rgba(6,10,15,0.98)":"transparent",borderBottom:scrolled||open?"1px solid #1e2d40":"none",backdropFilter:"blur(16px)",transition:"all 0.3s"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",height:"68px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
          <a href="#" style={{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none"}}>
            <div style={{width:"32px",height:"32px",background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.3)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",fontSize:"13px",fontWeight:700,color:"#60a5fa"}}>FO</div>
            <span style={{fontFamily:"monospace",fontSize:"13px",fontWeight:600,color:"#fff"}}>franklin.osuji</span>
          </a>
          <div style={{paddingLeft:"12px",borderLeft:"1px solid #1e2d40",display:"flex",flexDirection:"column",gap:"3px"}}>
            <a href="tel:+4915259380812" style={{fontFamily:"monospace",fontSize:"11px",color:"#484f58",textDecoration:"none"}} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>+49 152 59380812</a>
            <a href="mailto:franklin.osuji2@gmail.com" style={{fontFamily:"monospace",fontSize:"11px",color:"#484f58",textDecoration:"none"}} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>franklin.osuji2@gmail.com</a>
          </div>
        </div>
        <div className="nav-links">
          {links.map(l=>(
            <a key={l.href} href={l.href} style={{padding:"5px 10px",fontSize:"13px",color:"#8b949e",textDecoration:"none",borderRadius:"5px",transition:"all 0.15s"}} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="#8b949e"}>{l.label}</a>
          ))}
          <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer" style={{marginLeft:"8px",padding:"5px 12px",fontSize:"13px",color:"#0a66c2",border:"1px solid rgba(10,102,194,0.2)",borderRadius:"5px",textDecoration:"none",fontWeight:600}}>LinkedIn</a>
          <a href="/cv.html" target="_blank" style={{marginLeft:"6px",padding:"5px 14px",fontSize:"13px",fontWeight:600,color:"#fff",background:"#2563eb",borderRadius:"5px",textDecoration:"none"}}>Resume</a>
        </div>
        <button className="nav-mobile-btn" onClick={()=>setOpen(!open)} style={{background:"transparent",border:"1px solid #1e2d40",borderRadius:"6px",padding:"7px",cursor:"pointer",color:"#8b949e",fontSize:"16px",lineHeight:1}}>{open?"x":"="}</button>
      </div>
      <div className={`mobile-menu${open?" open":""}`} style={{background:"rgba(6,10,15,0.98)",borderTop:"1px solid #1e2d40",padding:"16px 24px",gap:"4px"}}>
        {links.map(l=>(<a key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{padding:"12px 8px",fontSize:"15px",color:"#8b949e",textDecoration:"none",borderBottom:"1px solid #1e2d40",display:"block"}}>{l.label}</a>))}
        <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" style={{padding:"12px 8px",fontSize:"15px",color:"#0a66c2",textDecoration:"none",borderBottom:"1px solid #1e2d40",display:"block",fontWeight:600}}>LinkedIn</a>
        <a href="tel:+4915259380812" style={{padding:"12px 8px",fontSize:"13px",color:"#484f58",textDecoration:"none",borderBottom:"1px solid #1e2d40",display:"block",fontFamily:"monospace"}}>+49 152 59380812</a>
        <a href="mailto:franklin.osuji2@gmail.com" style={{padding:"12px 8px",fontSize:"13px",color:"#484f58",textDecoration:"none",borderBottom:"1px solid #1e2d40",display:"block",fontFamily:"monospace"}}>franklin.osuji2@gmail.com</a>
        <a href="/cv.html" target="_blank" onClick={()=>setOpen(false)} style={{marginTop:"12px",padding:"12px",fontSize:"15px",fontWeight:600,color:"#fff",background:"#2563eb",borderRadius:"6px",textDecoration:"none",textAlign:"center",display:"block"}}>Download Resume</a>
      </div>
    </nav>
  )
}