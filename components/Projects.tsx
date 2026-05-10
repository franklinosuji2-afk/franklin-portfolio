"use client"
const projects = [
  {num:"01",tag:"SERVERLESS",title:"Cloud Resume Tracker",desc:"Cloud-native serverless tracker built with AWS services, demonstrating serverless architecture, automated deployment and monitoring.",pipeline:["S3","CloudFront","API Gateway","Lambda","DynamoDB"],tags:["AWS","Serverless","Lambda","DynamoDB","S3"],impact:["Real-time visitor analytics","Zero server management","Automated deployment pipeline"],github:"https://github.com/franklinosuji2-afk/cloud-resume-tracker",color:"#3b82f6"},
  {num:"02",tag:"FULLSTACK",title:"School Management System",desc:"Full-stack school management app with automated workflows, demonstrating backend development and database management.",pipeline:["Python","SQL Database","Backend API","Automation"],tags:["Python","Database","Backend","Automation"],impact:["Automated student records","Reduced admin overhead","Scalable data model"],github:"https://github.com/franklinosuji2-afk/School-Management",color:"#8b5cf6"},
  {num:"03",tag:"API",title:"Serverless Free Tier API",desc:"Cost-optimised REST API built entirely on AWS Free Tier with enterprise-grade patterns and near-zero operating costs.",pipeline:["API Gateway","Lambda","IAM","CloudWatch","S3"],tags:["AWS","Lambda","API Gateway","Serverless","REST API"],impact:["Under $1/month operating cost","Auto-scales to zero","Production-grade auth"],github:"https://github.com/franklinosuji2-afk/serverless-free-tier-api",color:"#22c55e"},
  {num:"04",tag:"INFRASTRUCTURE",title:"AWS ECS CI/CD Infrastructure",desc:"Production-ready AWS ECS infrastructure with complete CI/CD pipeline, Terraform IaC, and Blue/Green deployments for zero-downtime releases.",pipeline:["GitHub","GitHub Actions","Docker","ECR","ECS Fargate","CloudWatch"],tags:["AWS ECS","Terraform","Docker","CI/CD","Fargate","Blue/Green"],impact:["Zero-downtime Blue/Green deployments","100% IaC managed","Automated rollback"],github:"https://github.com/franklinosuji2-afk/AWS-ECS-CI-CD-infrastructure-",color:"#f97316"},
]
export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"40px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// GITHUB_PROJECTS</div>
          <h2 style={{fontSize:"clamp(24px,4vw,40px)",fontWeight:700,color:"#fff",marginBottom:"16px"}}>GitHub Projects</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
        </div>
        <div className="grid-2col" style={{gap:"20px"}}>
          {projects.map(p=>(
            <div key={p.num} style={{padding:"20px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                <span style={{fontFamily:"monospace",fontSize:"11px",color:`${p.color}66`}}>{p.num} / {p.tag}</span>
                <a href={p.github} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:"#8b949e",textDecoration:"none",fontFamily:"monospace"}}>GitHub →</a>
              </div>
              <h3 style={{fontSize:"16px",fontWeight:700,color:"#fff",marginBottom:"10px"}}>{p.title}</h3>
              <p style={{fontSize:"13px",color:"#8b949e",lineHeight:1.7,marginBottom:"14px"}}>{p.desc}</p>
              <div style={{marginBottom:"12px"}}>
                <div style={{fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"6px",letterSpacing:"2px"}}>PIPELINE</div>
                <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px"}}>
                  {p.pipeline.map((s,i)=>(<span key={s} style={{display:"flex",alignItems:"center",gap:"4px"}}><span style={{padding:"2px 6px",fontSize:"10px",borderRadius:"4px",border:`1px solid ${p.color}33`,color:p.color,background:`${p.color}10`,fontFamily:"monospace"}}>{s}</span>{i<p.pipeline.length-1&&<span style={{color:`${p.color}44`,fontSize:"10px"}}>&gt;</span>}</span>))}
                </div>
              </div>
              <div style={{marginBottom:"12px"}}>
                {p.impact.map(item=>(<div key={item} style={{display:"flex",gap:"8px",fontSize:"12px",color:"#8b949e",marginBottom:"4px"}}><span style={{color:"#22c55e",flexShrink:0}}>✓</span>{item}</div>))}
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {p.tags.map(t=>(<span key={t} style={{padding:"2px 6px",fontSize:"10px",borderRadius:"4px",border:"1px solid #1e2d40",color:"#484f58",fontFamily:"monospace"}}>{t}</span>))}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:"32px",textAlign:"center"}}>
          <a href="https://github.com/franklinosuji2-afk" target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",border:"1px solid #1e2d40",color:"#8b949e",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontFamily:"monospace"}}>View All Repositories on GitHub</a>
        </div>
      </div>
    </section>
  )
}