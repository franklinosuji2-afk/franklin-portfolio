"use client"
const stats = [{value:"4+",label:"Years Experience"},{value:"1800",label:"DCI Training Units"},{value:"30%",label:"Reliability Improvement"},{value:"35%",label:"Faster Deployments"}]
export default function About() {
  return (
    <section id="about" className="section-pad" style={{background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// ABOUT_ME</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Professional Summary</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6"}} />
        </div>
        <div className="grid-2col">
          <div>
            <p style={{color:"#8b949e",fontSize:"clamp(14px,2vw,17px)",lineHeight:1.8,marginBottom:"20px"}}>
              <strong style={{color:"#fff"}}>Cloud Infrastructure & DevOps Engineer</strong> specializing in AWS-based infrastructure automation, containerized workloads, and CI/CD systems. Experienced in designing scalable cloud environments using <strong style={{color:"#fff"}}>Terraform, Docker, Amazon ECS, and GitHub Actions</strong> with a strong focus on operational reliability, deployment efficiency, and infrastructure optimization.
            </p>
            <p style={{color:"#8b949e",lineHeight:1.8,marginBottom:"32px"}}>
              Combines engineering discipline with business awareness to deliver <strong style={{color:"#fff"}}>secure, high-availability, and cost-efficient cloud solutions</strong>. Proven ability to optimize deployment workflows, automate infrastructure provisioning, and improve system performance across production-oriented environments.
            </p>
            <div className="grid-2col-sm">
              {stats.map(s=>(<div key={s.label} style={{textAlign:"center",padding:"16px",borderRadius:"10px",border:"1px solid #1e2d40",background:"#0d1117"}}><div style={{fontSize:"clamp(20px,3vw,28px)",fontWeight:700,color:"#60a5fa"}}>{s.value}</div><div style={{fontSize:"11px",color:"#484f58",fontFamily:"monospace"}}>{s.label}</div></div>))}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {[{title:"AWS Certified Cloud Practitioner",desc:"Active Aug 2025 - Aug 2028 - Verified on Credly"},{title:"Infrastructure as Code",desc:"Terraform, CloudFormation - repeatable environments"},{title:"CI/CD Automation",desc:"Jenkins, GitHub Actions - 35% faster deployments"},{title:"Cloud-Native Architecture",desc:"ECS Fargate, Lambda, Docker containerization"}].map(h=>(<div key={h.title} style={{padding:"16px 20px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}><div style={{fontWeight:600,color:"#fff",marginBottom:"4px",fontSize:"14px"}}>{h.title}</div><div style={{fontSize:"13px",color:"#8b949e"}}>{h.desc}</div></div>))}
            <div className="grid-2col-sm">
              <div style={{padding:"14px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}><div style={{fontFamily:"monospace",fontSize:"10px",color:"#3b82f6",marginBottom:"8px",letterSpacing:"2px"}}>LANGUAGES</div><div style={{fontSize:"13px",color:"#fff",marginBottom:"4px"}}>English - Native</div><div style={{fontSize:"13px",color:"#fff"}}>German - B2</div></div>
              <div style={{padding:"14px",borderRadius:"12px",border:"1px solid rgba(34,197,94,0.3)",background:"rgba(34,197,94,0.05)"}}><div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"}}><span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ade80",display:"inline-block"}} /><span style={{fontSize:"12px",color:"#4ade80",fontFamily:"monospace"}}>Available</span></div><div style={{fontSize:"12px",color:"#8b949e"}}>Berlin, Germany<br/>Niederlassungserlaubnis</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}