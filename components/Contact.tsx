"use client"
export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{background:"#080c12",borderTop:"1px solid #1e2d40"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// GET_IN_TOUCH</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Let's Build Something Together</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6",marginBottom:"16px"}} />
          <p style={{color:"#8b949e",fontSize:"15px",maxWidth:"520px",lineHeight:1.8}}>Open to Cloud Engineer, DevOps, and SRE roles across Germany and Europe. Hybrid and remote friendly.</p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"16px"}}>
          {[
            {label:"LOCATION",value:"12051 Berlin, Germany",sub:"Hybrid & Remote",icon:"📍"},
            {label:"EMAIL",value:"franklin.osuji2@gmail.com",href:"mailto:franklin.osuji2@gmail.com",icon:"✉"},
            {label:"PHONE",value:"+49 152 59380812",href:"tel:+4915259380812",icon:"☎"},
            {label:"LINKEDIN",value:"linkedin.com/in/franklin-osuji",href:"https://linkedin.com/in/franklin-osuji-a96003321",icon:"in"},
            {label:"GITHUB",value:"github.com/franklinosuji2-afk",href:"https://github.com/franklinosuji2-afk",icon:"gh"},
            {label:"RESUME / CV",value:"View & Download CV",href:"/cv.html",icon:"↓"},
          ].map(item=>(
            <div key={item.label} style={{padding:"20px",borderRadius:"10px",border:"1px solid #1e2d40",background:"rgba(255,255,255,0.01)",transition:"border-color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(59,130,246,0.3)"} onMouseLeave={e=>e.currentTarget.style.borderColor="#1e2d40"}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#3b82f6",letterSpacing:"3px",marginBottom:"10px"}}>{item.label}</div>
              {(item as any).href ? (
                <a href={(item as any).href} target="_blank" rel="noreferrer" style={{fontSize:"14px",color:"#fff",textDecoration:"none",display:"block",wordBreak:"break-all",lineHeight:1.5}}>{item.value}</a>
              ) : (
                <div>
                  <div style={{fontSize:"14px",color:"#fff",lineHeight:1.5}}>{item.value}</div>
                  {item.sub&&<div style={{fontSize:"12px",color:"#484f58",marginTop:"4px"}}>{item.sub}</div>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}