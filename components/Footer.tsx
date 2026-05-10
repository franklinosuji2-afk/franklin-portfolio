"use client"
export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid #1e2d40",background:"#070a0f",padding:"40px 24px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",textAlign:"center"}}>
        <div style={{fontFamily:"monospace",fontSize:"14px",fontWeight:600,color:"#fff"}}>Franklin Chinonso Osuji</div>
        <div style={{fontFamily:"monospace",fontSize:"12px",color:"#484f58",fontStyle:"italic"}}>"Infrastructure as code. Reliability by design. Automation at scale."</div>
        <div style={{display:"flex",gap:"24px"}}>
          <a href="https://github.com/franklinosuji2-afk" target="_blank" rel="noreferrer" style={{fontSize:"13px",color:"#484f58",textDecoration:"none",fontFamily:"monospace"}} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>GitHub</a>
          <a href="https://linkedin.com/in/franklin-osuji-a96003321" target="_blank" rel="noreferrer" style={{fontSize:"13px",color:"#484f58",textDecoration:"none",fontFamily:"monospace"}} onMouseEnter={e=>e.currentTarget.style.color="#0a66c2"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>LinkedIn</a>
          <a href="mailto:franklin.osuji2@gmail.com" style={{fontSize:"13px",color:"#484f58",textDecoration:"none",fontFamily:"monospace"}} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>Email</a>
          <a href="/cv.html" target="_blank" style={{fontSize:"13px",color:"#484f58",textDecoration:"none",fontFamily:"monospace"}} onMouseEnter={e=>e.currentTarget.style.color="#60a5fa"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>CV</a>
          <a href="https://www.credly.com/badges/914031f2-e5b2-4e4e-b408-2d512d91566d/public_url" target="_blank" rel="noreferrer" style={{fontSize:"13px",color:"#484f58",textDecoration:"none",fontFamily:"monospace"}} onMouseEnter={e=>e.currentTarget.style.color="#f97316"} onMouseLeave={e=>e.currentTarget.style.color="#484f58"}>Credly</a>
        </div>
        <div style={{fontSize:"12px",color:"#484f58",fontFamily:"monospace"}}>2026 Franklin Chinonso Osuji - All rights reserved</div>
      </div>
    </footer>
  )
}