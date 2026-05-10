"use client"
import { useState, useEffect } from "react"
const lines = ["$ whoami","> Franklin Chinonso Osuji","$ cat role.txt","> AWS Cloud & DevOps Engineer","$ kubectl get certs","> AWS Certified Cloud Practitioner","$ echo $LOCATION","> Berlin, Germany - Available Now"]
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
    <section id="home" className="hero-pad" style={{background:"#070a0f",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"25%",left:"20%",width:"400px",height:"400px",background:"rgba(59,130,246,0.05)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}} />
      <div style={{maxWidth:"1200px",width:"100%",margin:"0 auto"}}>
        <div className="hero-grid">
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"999px",border:"1px solid rgba(34,197,94,0.3)",background:"rgba(34,197,94,0.05)",marginBottom:"20px"}}>
              <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} />
              <span style={{fontSize:"12px",color:"#4ade80",fontFamily:"monospace"}}>Available - Berlin, Germany</span>
            </div>
            <h1 style={{fontSize:"clamp(28px,5vw,58px)",fontWeight:700,color:"#fff",lineHeight:1.15,marginBottom:"8px"}}>Franklin Chinonso Osuji</h1>
            <div style={{fontSize:"clamp(16px,2.5vw,24px)",fontWeight:600,color:"#60a5fa",marginBottom:"12px"}}>Cloud & DevOps Engineer</div>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 12px",borderRadius:"6px",border:"1px solid rgba(249,115,22,0.4)",background:"rgba(249,115,22,0.08)",marginBottom:"20px"}}>
              <div style={{width:"20px",height:"20px",borderRadius:"50%",background:"linear-gradient(135deg,#f97316,#ea580c)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"#fff",fontWeight:900,fontSize:"8px",fontFamily:"monospace"}}>AWS</span></div>
              <span style={{fontSize:"12px",color:"#f97316",fontFamily:"monospace",fontWeight:600}}>AWS Certified Cloud Practitioner</span>
              <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} />
            </div>
            <p style={{color:"#8b949e",fontSize:"clamp(14px,2vw,16px)",lineHeight:1.8,marginBottom:"28px"}}>Specialising in Terraform, CI/CD automation, and containerised cloud infrastructure using Docker and Amazon ECS. Building scalable AWS environments that deliver high-availability and cost-efficient solutions.</p>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"24px"}}>
              <a href="#projects" style={{padding:"10px 18px",background:"#2563eb",color:"#fff",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:600}}>View Projects</a>
              <a href="#contact" style={{padding:"10px 18px",border:"1px solid #1e2d40",color:"#8b949e",borderRadius:"8px",textDecoration:"none",fontSize:"14px"}}>Contact Me</a>
              <a href="/cv.html" target="_blank" style={{padding:"10px 18px",border:"1px solid rgba(59,130,246,0.4)",color:"#60a5fa",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:600}}>CV</a>
            </div>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
              <a href="https://github.com/franklinosuji2-afk" target="_blank" rel="noreferrer" style={{padding:"6px 14px",fontSize:"13px",color:"#484f58",border:"1px solid #1e2d40",borderRadius:"6px",textDecoration:"none",fontFamily:"monospace"}}>GitHub</a>
              <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer" style={{padding:"6px 14px",fontSize:"13px",color:"#484f58",border:"1px solid #1e2d40",borderRadius:"6px",textDecoration:"none",fontFamily:"monospace"}}>LinkedIn</a>
              <a href="mailto:franklin.osuji2@gmail.com" style={{padding:"6px 14px",fontSize:"13px",color:"#484f58",border:"1px solid #1e2d40",borderRadius:"6px",textDecoration:"none",fontFamily:"monospace"}}>Email</a>
            </div>
          </div>
          <div>
            <div style={{borderRadius:"12px",border:"1px solid #1e2d40",overflow:"hidden",boxShadow:"0 0 40px rgba(59,130,246,0.1)"}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",padding:"12px 16px",background:"#0d1117",borderBottom:"1px solid #1e2d40"}}>
                <span style={{width:"12px",height:"12px",borderRadius:"50%",background:"rgba(239,68,68,0.7)"}} />
                <span style={{width:"12px",height:"12px",borderRadius:"50%",background:"rgba(234,179,8,0.7)"}} />
                <span style={{width:"12px",height:"12px",borderRadius:"50%",background:"rgba(34,197,94,0.7)"}} />
                <span style={{marginLeft:"12px",fontFamily:"monospace",fontSize:"12px",color:"#484f58"}}>bash - franklin@cloud-engineer</span>
              </div>
              <div style={{background:"#070a0f",padding:"20px",fontFamily:"monospace",fontSize:"13px",minHeight:"220px"}}>
                {displayed.map((line,i)=>(<div key={i} style={{marginBottom:"4px",color:line.startsWith("$")?"#60a5fa":line.startsWith(">")?"#4ade80":"#8b949e"}}>{line}</div>))}
                {lineIdx<lines.length&&<div style={{color:lines[lineIdx].startsWith("$")?"#60a5fa":"#4ade80"}}>{current}<span style={{color:"#fff"}}>|</span></div>}
                {lineIdx>=lines.length&&<div style={{color:"#60a5fa",marginTop:"16px"}}>$ <span style={{color:"#fff"}}>|</span></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}