"use client"
import { useState } from "react"
const projects = [
  {
    id:0,title:"AWS ECS CI/CD Infrastructure",tag:"INFRASTRUCTURE",
    problem:"Teams were manually deploying containerised apps to AWS with no standardised pipeline, causing inconsistent deployments and frequent rollback failures.",
    architecture:"GitHub Actions triggers Docker build on push. Image pushed to ECR, Terraform provisions ECS Fargate cluster with ALB and auto-scaling. CodeDeploy handles Blue/Green traffic shifting.",
    pipeline:["Git Push","GitHub Actions","Docker Build","ECR Push","Terraform Apply","ECS Deploy","CloudWatch"],
    security:["IAM least privilege roles","Secrets in AWS Secrets Manager","VPC isolation","HTTPS only via ACM"],
    monitoring:["CloudWatch Container Insights","ALB access logs","ECS service metrics","SNS alerting on failures"],
    results:["80% reduction in deployment time","Zero-downtime Blue/Green deployments","100% IaC - fully reproducible","Automated rollback on health check failure"],
    tags:["ECS Fargate","Terraform","GitHub Actions","Docker","ALB","CloudWatch","IAM"],
    github:"https://github.com/franklinosuji2-afk/AWS-ECS-CI-CD-infrastructure-",
    color:"#3b82f6"
  },
  {
    id:1,title:"Cloud Resume Tracker",tag:"SERVERLESS",
    problem:"Needed a cloud-native portfolio tracker with real visitor analytics, zero server management, and demonstrable AWS expertise within Free Tier limits.",
    architecture:"Static site on S3 + CloudFront CDN. JavaScript calls API Gateway which triggers Lambda (Python) to increment DynamoDB counter. GitHub Actions auto-deploys on push.",
    pipeline:["Git Push","GitHub Actions","S3 Sync","CloudFront Invalidation","Lambda Deploy","DynamoDB Update"],
    security:["IAM execution roles","API Gateway throttling","S3 bucket policies","CloudFront HTTPS enforcement"],
    monitoring:["Lambda X-Ray tracing","API Gateway access logs","CloudWatch metrics","DynamoDB stream monitoring"],
    results:["Real-time visitor counter","Under $0.01/month operating cost","Sub-100ms API response","Fully serverless - zero maintenance"],
    tags:["S3","CloudFront","API Gateway","Lambda","DynamoDB","Python","GitHub Actions"],
    github:"https://github.com/franklinosuji2-afk/cloud-resume-tracker",
    color:"#8b5cf6"
  },
  {
    id:2,title:"Serverless Free-Tier API",tag:"API DESIGN",
    problem:"Demonstrate enterprise-grade REST API patterns - authentication, rate limiting, structured logging - while keeping costs near zero using AWS Free Tier services.",
    architecture:"API Gateway as the front door with usage plans and API keys. Lambda functions handle business logic. DynamoDB stores data. CloudWatch captures all logs and metrics.",
    pipeline:["API Request","API Gateway","Lambda Handler","DynamoDB CRUD","Response + Logging","CloudWatch"],
    security:["API key authentication","IAM least privilege Lambda roles","DynamoDB encryption at rest","Rate limiting via usage plans"],
    monitoring:["API Gateway execution logs","Lambda CloudWatch metrics","Custom error rate alarms","Cost anomaly detection"],
    results:["$0.00 monthly cost within Free Tier","Auto-scales to zero when idle","Production-grade auth and rate limiting","Full observability via CloudWatch"],
    tags:["API Gateway","Lambda","DynamoDB","IAM","CloudWatch","Python","REST"],
    github:"https://github.com/franklinosuji2-afk/serverless-free-tier-api",
    color:"#22c55e"
  },
]
export default function Projects() {
  const [active, setActive] = useState(0)
  const p = projects[active]
  return (
    <section id="projects" className="section-pad" style={{background:"#080c12"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"40px"}}>
          <div style={{fontFamily:"monospace",fontSize:"11px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// FEATURED_PROJECTS</div>
          <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:"#fff",marginBottom:"12px"}}>Project Highlights</h2>
          <div style={{width:"40px",height:"2px",background:"#3b82f6",marginBottom:"16px"}} />
          <p style={{color:"#8b949e",fontSize:"14px"}}>Production infrastructure projects with real architecture decisions, security considerations, and measurable outcomes.</p>
        </div>
        <div style={{display:"flex",gap:"8px",marginBottom:"28px",flexWrap:"wrap"}}>
          {projects.map((proj,i)=>(
            <button key={proj.id} onClick={()=>setActive(i)}
              style={{padding:"8px 16px",borderRadius:"6px",border:`1px solid ${active===i?proj.color+"66":"#1e2d40"}`,background:active===i?`${proj.color}12`:"transparent",color:active===i?proj.color:"#8b949e",fontFamily:"monospace",fontSize:"12px",cursor:"pointer",transition:"all 0.2s"}}>
              {proj.title}
            </button>
          ))}
        </div>
        <div style={{borderRadius:"12px",border:`1px solid ${p.color}22`,background:"rgba(255,255,255,0.01)",overflow:"hidden"}}>
          <div style={{padding:"24px 28px",borderBottom:"1px solid #1e2d40",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px"}}>
            <div>
              <div style={{fontFamily:"monospace",fontSize:"11px",color:p.color,letterSpacing:"2px",marginBottom:"6px"}}>{p.tag}</div>
              <h3 style={{fontSize:"clamp(18px,3vw,24px)",fontWeight:700,color:"#fff"}}>{p.title}</h3>
            </div>
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 16px",border:"1px solid #1e2d40",borderRadius:"6px",color:"#8b949e",textDecoration:"none",fontSize:"12px",fontFamily:"monospace"}}
              onMouseEnter={e=>{e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor=p.color+"66"}}
              onMouseLeave={e=>{e.currentTarget.style.color="#8b949e";e.currentTarget.style.borderColor="#1e2d40"}}>
              GitHub Repo
            </a>
          </div>
          <div style={{padding:"28px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
            <div style={{gridColumn:"1/-1",padding:"16px 20px",borderRadius:"8px",border:"1px solid #1e2d40",background:"rgba(239,68,68,0.04)",borderLeft:"3px solid #ef4444"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#ef4444",letterSpacing:"2px",marginBottom:"8px"}}>PROBLEM STATEMENT</div>
              <p style={{fontSize:"14px",color:"#8b949e",lineHeight:1.7}}>{p.problem}</p>
            </div>
            <div style={{padding:"16px 20px",borderRadius:"8px",border:"1px solid #1e2d40",background:"rgba(59,130,246,0.04)",borderLeft:"3px solid #3b82f6"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#3b82f6",letterSpacing:"2px",marginBottom:"8px"}}>ARCHITECTURE OVERVIEW</div>
              <p style={{fontSize:"13px",color:"#8b949e",lineHeight:1.7}}>{p.architecture}</p>
            </div>
            <div style={{padding:"16px 20px",borderRadius:"8px",border:"1px solid #1e2d40",background:"rgba(139,92,246,0.04)",borderLeft:"3px solid #8b5cf6"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#8b5cf6",letterSpacing:"2px",marginBottom:"12px"}}>CI/CD PIPELINE</div>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px"}}>
                {p.pipeline.map((s,i)=>(
                  <span key={s} style={{display:"flex",alignItems:"center",gap:"4px"}}>
                    <span style={{padding:"3px 8px",fontSize:"10px",borderRadius:"4px",background:"rgba(139,92,246,0.1)",border:"1px solid rgba(139,92,246,0.2)",color:"#a78bfa",fontFamily:"monospace"}}>{s}</span>
                    {i<p.pipeline.length-1&&<span style={{color:"#484f58",fontSize:"10px"}}>{">"}</span>}
                  </span>
                ))}
              </div>
            </div>
            <div style={{padding:"16px 20px",borderRadius:"8px",border:"1px solid #1e2d40",background:"rgba(249,115,22,0.04)",borderLeft:"3px solid #f97316"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#f97316",letterSpacing:"2px",marginBottom:"10px"}}>SECURITY CONSIDERATIONS</div>
              {p.security.map(s=>(<div key={s} style={{display:"flex",gap:"8px",fontSize:"12px",color:"#8b949e",marginBottom:"6px"}}>
                <span style={{color:"#f97316",flexShrink:0}}>*</span>{s}
              </div>))}
            </div>
            <div style={{padding:"16px 20px",borderRadius:"8px",border:"1px solid #1e2d40",background:"rgba(6,182,212,0.04)",borderLeft:"3px solid #06b6d4"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#06b6d4",letterSpacing:"2px",marginBottom:"10px"}}>MONITORING SETUP</div>
              {p.monitoring.map(s=>(<div key={s} style={{display:"flex",gap:"8px",fontSize:"12px",color:"#8b949e",marginBottom:"6px"}}>
                <span style={{color:"#06b6d4",flexShrink:0}}>~</span>{s}
              </div>))}
            </div>
            <div style={{padding:"16px 20px",borderRadius:"8px",border:"1px solid #1e2d40",background:"rgba(34,197,94,0.04)",borderLeft:"3px solid #22c55e"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#22c55e",letterSpacing:"2px",marginBottom:"10px"}}>KEY RESULTS</div>
              {p.results.map(s=>(<div key={s} style={{display:"flex",gap:"8px",fontSize:"12px",color:"#8b949e",marginBottom:"6px"}}>
                <span style={{color:"#22c55e",flexShrink:0}}>+</span>{s}
              </div>))}
            </div>
            <div style={{gridColumn:"1/-1"}}>
              <div style={{fontFamily:"monospace",fontSize:"10px",color:"#484f58",letterSpacing:"2px",marginBottom:"10px"}}>TECH STACK</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                {p.tags.map(t=>(<span key={t} style={{padding:"4px 10px",fontSize:"11px",borderRadius:"4px",border:`1px solid ${p.color}30`,color:p.color,background:`${p.color}10`,fontFamily:"monospace"}}>{t}</span>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}