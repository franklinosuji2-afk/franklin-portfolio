"use client"
import { useState } from "react"
export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",company:"",message:""})
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const s = encodeURIComponent("Portfolio Contact from "+form.name)
    const b = encodeURIComponent("Name: "+form.name+"\nEmail: "+form.email+"\nCompany: "+form.company+"\n\nMessage:\n"+form.message)
    window.location.href = "mailto:franklin.osuji2@gmail.com?subject="+s+"&body="+b
  }
  const inp: React.CSSProperties = {width:"100%",padding:"12px 16px",background:"#0d1117",border:"1px solid #1e2d40",borderRadius:"8px",color:"#fff",fontSize:"14px",outline:"none",fontFamily:"monospace"}
  return (
    <section id="contact" className="section-pad" style={{background:"#0a0e17"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"40px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// GET_IN_TOUCH</div>
          <h2 style={{fontSize:"clamp(24px,4vw,40px)",fontWeight:700,color:"#fff",marginBottom:"16px"}}>Get In Touch</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
          <p style={{marginTop:"16px",color:"#8b949e",fontSize:"14px"}}>Open to Cloud Engineer, DevOps, and SRE roles in Germany and remotely</p>
        </div>
        <div className="grid-2col">
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"999px",border:"1px solid rgba(34,197,94,0.3)",background:"rgba(34,197,94,0.05)",marginBottom:"24px"}}>
              <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} />
              <span style={{fontSize:"13px",color:"#4ade80",fontFamily:"monospace"}}>Available - Immediately - Berlin</span>
            </div>
            {[
              {label:"LOCATION",value:"12051 Berlin, Germany - Hybrid & Remote"},
              {label:"PHONE",value:"+49 152 59380812",href:"tel:+4915259380812"},
              {label:"EMAIL",value:"franklin.osuji2@gmail.com",href:"mailto:franklin.osuji2@gmail.com"},
              {label:"LINKEDIN",value:"linkedin.com/in/franklin-osuji-a96003321",href:"https://linkedin.com/in/franklin-osuji-a96003321"},
              {label:"GITHUB",value:"github.com/franklinosuji2-afk",href:"https://github.com/franklinosuji2-afk"},
            ].map(item=>(<div key={item.label} style={{padding:"14px 16px",borderRadius:"10px",border:"1px solid #1e2d40",background:"#0d1117",marginBottom:"10px"}}><div style={{fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"4px",letterSpacing:"2px"}}>{item.label}</div>{(item as any).href?<a href={(item as any).href} target="_blank" rel="noreferrer" style={{fontSize:"13px",color:"#fff",textDecoration:"none",wordBreak:"break-all"}}>{item.value}</a>:<div style={{fontSize:"13px",color:"#fff"}}>{item.value}</div>}</div>))}
          </div>
          <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            <div className="grid-2col-sm" style={{gap:"14px"}}>
              <div><label style={{display:"block",fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"6px",letterSpacing:"2px"}}>YOUR NAME</label><input required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Jane Smith" style={inp} /></div>
              <div><label style={{display:"block",fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"6px",letterSpacing:"2px"}}>EMAIL</label><input type="email" required value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="jane@company.com" style={inp} /></div>
            </div>
            <div><label style={{display:"block",fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"6px",letterSpacing:"2px"}}>COMPANY (OPTIONAL)</label><input value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} placeholder="Company GmbH" style={inp} /></div>
            <div><label style={{display:"block",fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"6px",letterSpacing:"2px"}}>MESSAGE</label><textarea required rows={5} value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} placeholder="Hi Franklin, I would like to discuss..." style={{...inp,resize:"none"}} /></div>
            <button type="submit" style={{width:"100%",padding:"14px",background:"#2563eb",color:"#fff",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:600,cursor:"pointer",fontFamily:"monospace"}}>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  )
}