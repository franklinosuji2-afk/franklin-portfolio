"use client"
const exps = [
  {title:"Cloud Engineer",company:"MacVoltex System Limited",location:"Nigeria - Remote",period:"APR 2026 - PRESENT",type:"Contract",bullets:["Engineered scalable AWS and Azure infrastructure, improving deployment efficiency and system reliability by 30%","Automated CI/CD pipelines and cloud deployments, reducing deployment time by 35%","Optimized cloud operations and infrastructure costs while improving platform stability"],tags:["AWS","Azure","Terraform","CI/CD","Docker","Kubernetes"]},
  {title:"Cloud & DevOps Engineer",company:"Freelance",location:"Remote",period:"JUL 2023 - AUG 2024",type:"Freelance",bullets:["Automated cloud provisioning and deployment workflows, accelerating client onboarding","Led deployment of key modules within Oracle E-Business Suite used by 90% of internal staff","Resolved infrastructure issues to maintain high system availability and performance"],tags:["AWS","Terraform","Oracle EBS","Python","Bash"]},
  {title:"E-commerce & Digital Marketing Specialist",company:"PAPER & TEA",location:"Berlin, Germany",period:"MAR 2020 - APR 2023",type:"Full-time",bullets:["Automated reporting and maintenance tasks using Bash and Python scripting","Increased organic traffic by 25% and improved conversion rates by 15% through SEO and A/B testing"],tags:["Python","Bash","SEO","Analytics"]},
]
const typeColor: Record<string,{color:string,border:string,bg:string}> = {
  Contract:{color:"#4ade80",border:"rgba(74,222,128,0.3)",bg:"rgba(74,222,128,0.05)"},
  Freelance:{color:"#c084fc",border:"rgba(192,132,252,0.3)",bg:"rgba(192,132,252,0.05)"},
  "Full-time":{color:"#60a5fa",border:"rgba(96,165,250,0.3)",bg:"rgba(96,165,250,0.05)"},
}
export default function Experience() {
  return (
    <section id="experience" style={{padding:"112px 24px",background:"#0a0e17"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// EXPERIENCE</div>
          <h2 style={{fontSize:"40px",fontWeight:700,color:"#fff",marginBottom:"16px"}}>Career Timeline</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
        </div>
        <div style={{position:"relative",paddingLeft:"32px"}}>
          <div style={{position:"absolute",left:0,top:0,bottom:0,width:"1px",background:"linear-gradient(to bottom,#3b82f6,#1e2d40)"}} />
          <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
            {exps.map((exp,i)=>{
              const tc = typeColor[exp.type]
              return (
                <div key={i} style={{position:"relative",padding:"24px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}>
                  <div style={{position:"absolute",left:"-40px",top:"28px",width:"16px",height:"16px",borderRadius:"50%",border:`2px solid ${i===0?"#4ade80":"#3b82f6"}`,background:"#070a0f",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:"6px",height:"6px",borderRadius:"50%",background:i===0?"#4ade80":"#3b82f6"}} /></div>
                  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",marginBottom:"16px"}}>
                    <div>
                      <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"4px"}}>
                        <h3 style={{fontSize:"18px",fontWeight:700,color:"#fff"}}>{exp.title}</h3>
                        {i===0&&<span style={{fontSize:"11px",fontFamily:"monospace",padding:"2px 8px",borderRadius:"999px",color:"#4ade80",border:"1px solid rgba(74,222,128,0.3)",background:"rgba(74,222,128,0.05)"}}>CURRENT</span>}
                      </div>
                      <div style={{fontSize:"14px",color:"#8b949e"}}>{exp.company} | {exp.location}</div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"}}>
                      <span style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6"}}>{exp.period}</span>
                      <span style={{fontFamily:"monospace",fontSize:"10px",padding:"2px 8px",borderRadius:"4px",color:tc.color,border:`1px solid ${tc.border}`,background:tc.bg}}>{exp.type}</span>
                    </div>
                  </div>
                  <ul style={{listStyle:"none",marginBottom:"16px"}}>
                    {exp.bullets.map((b,j)=>(<li key={j} style={{display:"flex",gap:"10px",fontSize:"14px",color:"#8b949e",marginBottom:"8px",lineHeight:1.6}}><span style={{color:"#3b82f6",flexShrink:0}}>-</span>{b}</li>))}
                  </ul>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                    {exp.tags.map(t=>(<span key={t} style={{padding:"2px 10px",fontSize:"11px",borderRadius:"4px",border:"1px solid #1e2d40",color:"#484f58",fontFamily:"monospace"}}>{t}</span>))}
                  </div>
                </div>
              )
            })}
            <div style={{position:"relative",padding:"24px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}>
              <div style={{position:"absolute",left:"-40px",top:"28px",width:"16px",height:"16px",borderRadius:"50%",border:"2px solid #1e2d40",background:"#070a0f"}} />
              <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
                <div><h3 style={{fontSize:"18px",fontWeight:700,color:"#fff",marginBottom:"4px"}}>B.Eng. Petroleum Engineering</h3><div style={{fontSize:"14px",color:"#8b949e"}}>Federal University of Technology, Owerri (FUTO)</div></div>
                <div style={{textAlign:"right"}}><div style={{fontFamily:"monospace",fontSize:"12px",color:"#484f58"}}>2012 - 2016</div><div style={{fontSize:"12px",color:"#22c55e",marginTop:"4px"}}>Second Class Honours (Upper Division)</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}