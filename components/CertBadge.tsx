"use client"
import { useState, useEffect } from "react"

export default function CertBadge() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <a href="https://www.credly.com/badges/914031f2-e5b2-4e4e-b408-2d512d91566d/public_url" target="_blank" rel="noreferrer"
      style={{position:"fixed",bottom:"32px",right:"32px",zIndex:999,display:visible?"flex":"none",alignItems:"center",gap:"12px",padding:"12px 20px",background:"linear-gradient(135deg,#0d1117,#0f1f0f)",border:"1px solid rgba(34,197,94,0.5)",borderRadius:"12px",textDecoration:"none",boxShadow:"0 0 30px rgba(34,197,94,0.2), 0 8px 32px rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",transition:"all 0.3s"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 0 50px rgba(34,197,94,0.4)";e.currentTarget.style.transform="translateY(-2px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 0 30px rgba(34,197,94,0.2)";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"linear-gradient(135deg,#f97316,#ea580c)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 0 15px rgba(249,115,22,0.4)"}}>
        <span style={{color:"#fff",fontWeight:900,fontSize:"11px",fontFamily:"monospace"}}>AWS</span>
      </div>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"2px"}}>
          <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",display:"inline-block",boxShadow:"0 0 6px #4ade80"}} />
          <span style={{fontSize:"10px",color:"#4ade80",fontFamily:"monospace",letterSpacing:"2px",fontWeight:600}}>VERIFIED ACTIVE</span>
        </div>
        <div style={{fontSize:"13px",fontWeight:700,color:"#fff",lineHeight:1.2}}>AWS Certified</div>
        <div style={{fontSize:"11px",color:"#8b949e",fontFamily:"monospace"}}>Cloud Practitioner</div>
      </div>
      <div style={{marginLeft:"4px",color:"#4ade80",fontSize:"16px"}}>→</div>
    </a>
  )
}