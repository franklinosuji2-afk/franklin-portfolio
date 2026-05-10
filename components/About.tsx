"use client"
const stats = [{value:"4+",label:"Years Experience"},{value:"1800",label:"DCI Training Units"},{value:"30%",label:"Reliability Improvement"},{value:"35%",label:"Faster Deployments"}]
export default function About() {
  return (
    <section id="about" style={{padding:"112px 24px",background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// ABOUT_ME</div>
          <h2 style={{fontSize:"40px",fontWeight:700,color:"#fff",marginBottom:"16px"}}>Professional Summary</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px"}}>
          <div>
            <p style={{color:"#8b949e",fontSize:"17px",lineHeight:1.8,marginBottom:"20px"}}><strong style={{color:"#fff"}}>AWS-Certified Cloud & DevOps Engineer</strong> specializing in Terraform, CI/CD automation, and containerized cloud infrastructure using Docker and Amazon ECS. Experienced in building scalable AWS environments, automating deployments, and improving system reliability.</p>
            <p style={{color:"#8b949e",lineHeight:1.8,marginBottom:"32px"}}>Combines <strong style={{color:"#fff"}}>engineering, cloud, and business expertise</strong> to deliver high-availability and cost-efficient solutions. Completed 1,800 units of intensive DevOps training at <strong style={{color:"#fff"}}>Digital Career Institute Berlin</strong>.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
              {stats.map(s=>(<div key={s.label} style={{textAlign:"center",padding:"16px",borderRadius:"10px",border:"1px solid #1e2d40",background:"#0d1117"}}><div style={{fontSize:"28px",fontWeight:700,color:"#60a5fa"}}>{s.value}</div><div style={{fontSize:"11px",color:"#484f58",fontFamily:"monospace"}}>{s.label}</div></div>))}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {[{title:"AWS Certified Cloud Practitioner",desc:"Active Aug 2025 - Aug 2028 - Verified on Credly"},{title:"Infrastructure as Code",desc:"Terraform, CloudFormation - repeatable environments"},{title:"CI/CD Automation",desc:"Jenkins, GitHub Actions - 35% faster deployments"},{title:"Cloud-Native Architecture",desc:"ECS Fargate, Lambda, serverless-first design"}].map(h=>(<div key={h.title} style={{padding:"20px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}><div style={{fontWeight:600,color:"#fff",marginBottom:"4px"}}>{h.title}</div><div style={{fontSize:"14px",color:"#8b949e"}}>{h.desc}</div></div>))}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
              <div style={{padding:"16px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}><div style={{fontFamily:"monospace",fontSize:"10px",color:"#3b82f6",marginBottom:"8px",letterSpacing:"2px"}}>LANGUAGES</div><div style={{fontSize:"14px",color:"#fff",marginBottom:"4px"}}>English - Native</div><div style={{fontSize:"14px",color:"#fff"}}>German - B1/B2</div></div>
              <div style={{padding:"16px",borderRadius:"12px",border:"1px solid rgba(34,197,94,0.3)",background:"rgba(34,197,94,0.05)"}}><div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"}}><span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} /><span style={{fontSize:"12px",color:"#4ade80",fontFamily:"monospace"}}>Available</span></div><div style={{fontSize:"12px",color:"#8b949e"}}>12051 Berlin, Germany - Hybrid and Remote</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}