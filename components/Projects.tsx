"use client"
const projects = [
  {num:"01",title:"AWS ECS CI/CD Infrastructure",desc:"Production-ready AWS ECS infrastructure with full CI/CD pipeline, Blue/Green deployments via CodeDeploy, and zero-downtime releases. Infrastructure fully managed as code with Terraform.",pipeline:["GitHub","GitHub Actions","Docker","ECR","ECS Fargate","CloudWatch"],tags:["AWS ECS","Terraform","Docker","CI/CD","Fargate"],impact:["Zero-downtime Blue/Green deployments","Infrastructure 100% managed as IaC","Automated rollback on health check failure"],github:"https://github.com/franklinosuji2-afk/AWS-ECS-CI-CD-infrastructure-",color:"#3b82f6"},
  {num:"02",title:"Cloud Resume Tracker",desc:"Cloud-native serverless resume tracker built on AWS. Features real-time visitor analytics, API Gateway, Lambda functions, and DynamoDB demonstrating serverless-first architecture.",pipeline:["S3","CloudFront","API Gateway","Lambda","DynamoDB"],tags:["Lambda","DynamoDB","S3","Serverless","Python"],impact:["Zero server management overhead","Pay-per-request billing model","Real-time visitor counter"],github:"https://github.com/franklinosuji2-afk/cloud-resume-tracker",color:"#8b5cf6"},
  {num:"03",title:"Serverless Free-Tier API",desc:"Cost-optimised REST API built entirely on AWS Free Tier. Demonstrates enterprise-grade API patterns with near-zero operating costs.",pipeline:["API Gateway","Lambda","IAM","CloudWatch"],tags:["Lambda","API Gateway","REST API","Python"],impact:["Operating cost under $1/month","Auto-scales to zero","Production-grade auth and rate limiting"],github:"https://github.com/franklinosuji2-afk/serverless-free-tier-api",color:"#22c55e"},
  {num:"04",title:"School Management System",desc:"Full-stack school management application with automated workflows, database management, student records, and reporting.",pipeline:["Python","SQL Database","Backend API","Automation"],tags:["Python","SQL","Backend","Automation"],impact:["Automated student record management","Reduced admin overhead","Scalable relational data model"],github:"https://github.com/franklinosuji2-afk/School-Management",color:"#f97316"},
]
export default function Projects() {
  return (
    <section id="projects" style={{padding:"112px 24px",background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// PROJECTS</div>
          <h2 style={{fontSize:"40px",fontWeight:700,color:"#fff",marginBottom:"16px"}}>Production Projects</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
          {projects.map(p => (
            <div key={p.num} style={{padding:"24px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"12px"}}>
                <span style={{fontFamily:"monospace",fontSize:"12px",color:`${p.color}66`}}>{p.num}</span>
                <a href={p.github} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:"#8b949e",textDecoration:"none",fontFamily:"monospace"}}>GitHub ?</a>
              </div>
              <h3 style={{fontSize:"18px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>{p.title}</h3>
              <p style={{fontSize:"14px",color:"#8b949e",lineHeight:1.7,marginBottom:"16px"}}>{p.desc}</p>
              <div style={{marginBottom:"16px"}}>
                <div style={{fontFamily:"monospace",fontSize:"11px",color:"#484f58",marginBottom:"8px",letterSpacing:"2px"}}>PIPELINE</div>
                <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"6px"}}>
                  {p.pipeline.map((s,i) => (<span key={s} style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{padding:"2px 8px",fontSize:"11px",borderRadius:"4px",border:`1px solid ${p.color}33`,color:p.color,background:`${p.color}10`,fontFamily:"monospace"}}>{s}</span>{i<p.pipeline.length-1&&<span style={{color:`${p.color}44`,fontSize:"12px"}}>?</span>}</span>))}
                </div>
              </div>
              <div style={{marginBottom:"16px"}}>
                <div style={{fontFamily:"monospace",fontSize:"11px",color:"#484f58",marginBottom:"8px",letterSpacing:"2px"}}>IMPACT</div>
                {p.impact.map(item => (<div key={item} style={{display:"flex",gap:"8px",fontSize:"13px",color:"#8b949e",marginBottom:"6px"}}><span style={{color:"#22c55e"}}>?</span>{item}</div>))}
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {p.tags.map(t => (<span key={t} style={{padding:"2px 8px",fontSize:"11px",borderRadius:"4px",border:"1px solid #1e2d40",color:"#484f58",fontFamily:"monospace"}}>{t}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
