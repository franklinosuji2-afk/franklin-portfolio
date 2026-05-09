"use client"
import { useState, useEffect } from "react"
const lines = ["$ whoami","> Franklin Chinonso Osuji","$ cat role.txt","> AWS Cloud & DevOps Engineer","$ echo $LOCATION","> Berlin, Germany - Available Now"]
export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [current, setCurrent] = useState("")
  useEffect(() => {
    if(lineIdx>=lines.length) return
    if(charIdx<lines[lineIdx].length){
      const t=setTimeout(()=>{setCurrent(p=>p+lines[lineIdx][charIdx]);setCharIdx(c=>c+1)},50)
      return ()=>clearTimeout(t)
    } else {
      const t=setTimeout(()=>{setDisplayed(p=>[...p,lines[lineIdx]]);setCurrent("");setCharIdx(0);setLineIdx(l=>l+1)},300)
      return ()=>clearTimeout(t)
    }
  },[lineIdx,charIdx])
  return (
    <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"80px 24px",background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"999px",border:"1px solid rgba(34,197,94,0.3)",background:"rgba(34,197,94,0.05)",marginBottom:"24px"}}>
            <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} />
            <span style={{fontSize:"12px",color:"#4ade80",fontFamily:"monospace"}}>Available - Berlin, Germany</span>
          </div>
          <h1 style={{fontSize:"56px",fontWeight:700,color:"#fff",lineHeight:1.15,marginBottom:"24px"}}>Cloud and DevOps<br/>Engineer</h1>
          <p style={{color:"#8b949e",fontSize:"17px",lineHeight:1.8,marginBottom:"32px"}}>AWS-Certified. Specializing in Terraform, Docker, ECS and CI/CD automation. Based in Berlin.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"32px"}}>
            <a href="#projects" style={{padding:"10px 20px",background:"#2563eb",color:"#fff",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:600}}>View Projects</a>
            <a href="#contact" style={{padding:"10px 20px",border:"1px solid #1e2d40",color:"#8b949e",borderRadius:"8px",textDecoration:"none",fontSize:"14px"}}>Contact Me</a>
            <a href="/Franklin_CV.pdf" download style={{padding:"10px 20px",border:"1px solid #1e2d40",color:"#8b949e",borderRadius:"8px",textDecoration:"none",fontSize:"14px"}}>Download Resume</a>
          </div>
        </div>
        <div style={{borderRadius:"12px",border:"1px solid #1e2d40",overflow:"hidden"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px",padding:"12px 16px",background:"#0d1117",borderBottom:"1px solid #1e2d40"}}>
            <span style={{width:"12px",height:"12px",borderRadius:"50%",background:"rgba(239,68,68,0.7)"}} />
            <span style={{width:"12px",height:"12px",borderRadius:"50%",background:"rgba(234,179,8,0.7)"}} />
            <span style={{width:"12px",height:"12px",borderRadius:"50%",background:"rgba(34,197,94,0.7)"}} />
            <span style={{marginLeft:"12px",fontFamily:"monospace",fontSize:"12px",color:"#484f58"}}>bash - franklin@cloud-engineer</span>
          </div>
          <div style={{background:"#070a0f",padding:"24px",fontFamily:"monospace",fontSize:"13px",minHeight:"260px"}}>
            {displayed.map((line,i)=>(<div key={i} style={{marginBottom:"4px",color:line.startsWith("$")?"#60a5fa":"#4ade80"}}>{line}</div>))}
            {lineIdx<lines.length&&<div style={{color:"#60a5fa"}}>{current}<span style={{color:"#fff"}}>|</span></div>}
            {lineIdx>=lines.length&&<div style={{color:"#60a5fa",marginTop:"16px"}}>$ <span style={{color:"#fff"}}>|</span></div>}
          </div>
        </div>
      </div>
    </section>
  )
}