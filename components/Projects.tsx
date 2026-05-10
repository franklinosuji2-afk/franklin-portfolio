"use client"
const projects = [
  {num:"01",tag:"SERVERLESS",title:"Cloud Resume Tracker",desc:"Cloud-native resume/portfolio tracker built with AWS services, demonstrating serverless architecture and cloud infrastructure skills with automated deployment and monitoring.",pipeline:["S3","CloudFront","API Gateway","Lambda","DynamoDB","CloudWatch"],tags:["AWS","Serverless","Lambda","DynamoDB","S3"],impact:["Real-time visitor analytics","Zero server management","Automated deployment pipeline"],github:"https://github.com/franklinosuji2-afk/cloud-resume-tracker",color:"#3b82f6"},
  {num:"02",tag:"FULLSTACK",title:"School Management System",desc:"Comprehensive school management application with automated workflows, demonstrating full-stack development skills and database management capabilities.",pipeline:["Python","SQL Database","Backend API","Automation Scripts"],tags:["Python","Database","Backend","Automation"],impact:["Automated student records","Reduced admin overhead","Scalable data model"],github:"https://github.com/franklinosuji2-afk/School-Management",color:"#8b5cf6"},
  {num:"03",tag:"API",title:"Serverless Free Tier API",desc:"Cost-optimised serverless API built entirely on AWS Free Tier, showcasing API Gateway, Lambda functions, and efficient cloud resource management for budget-conscious deployments.",pipeline:["API Gateway","Lambda","IAM","CloudWatch","S3"],tags:["AWS","Lambda","API Gateway","Serverless","REST API"],impact:["Under $1/month operating cost","Auto-scales to zero","Production-grade auth"],github:"https://github.com/franklinosuji2-afk/serverless-free-tier-api",color:"#22c55e"},
  {num:"04",tag:"INFRASTRUCTURE",title:"AWS ECS CI/CD Infrastructure",desc:"Production-ready AWS ECS infrastructure with complete CI/CD pipeline, Infrastructure as Code (Terraform), Docker containerization, and Blue/Green deployments using AWS CodeDeploy for zero-downtime releases.",pipeline:["GitHub","GitHub Actions","Docker","ECR","ECS Fargate","CloudWatch"],tags:["AWS ECS","Terraform","Docker","CI/CD","Fargate","Blue/Green"],impact:["Zero-downtime Blue/Green deployments","100% IaC managed","Automated rollback on failure"],github:"https://github.com/franklinosuji2-afk/AWS-ECS-CI-CD-infrastructure-",color:"#f97316"},
  {num:"05",tag:"WEB",title:"Professional Portfolio",desc:"Modern, responsive portfolio website showcasing cloud and DevOps projects with sleek UI/UX design, built with HTML, CSS, and JavaScript featuring animations and tech-focused aesthetics.",pipeline:["HTML5","CSS3","JavaScript","GitHub Pages"],tags:["HTML5","CSS3","JavaScript","Responsive","UI/UX"],impact:["Live on GitHub Pages","SEO optimized","Google Search Console verified"],github:"https://github.com/franklinosuji2-afk/portfolio",color:"#06b6d4"},
]
export default function Projects() {
  return (
    <section id="projects" style={{padding:"112px 24px",background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// GITHUB_PROJECTS</div>
          <h2 style={{fontSize:"40px",fontWeight:700,color:"#fff",marginBottom:"16px"}}>GitHub Projects</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
          <p style={{marginTop:"16px",color:"#8b949e",fontFamily:"monospace",fontSize:"13px"}}>Live repositories showcasing cloud and DevOps implementations</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
          {projects.map(p=>(
            <div key={p.num} style={{padding:"24px",borderRadius:"12px",border:"1px solid #1e2d40",background:"#0d1117",transition:"border-color 0.2s"}} onMouseEnter={e=>(e.currentTarget.style.borderColor=p.color+"44")} onMouseLeave={e=>(e.currentTarget.style.borderColor="#1e2d40")}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"12px"}}>
                <span style={{fontFamily:"monospace",fontSize:"11px",color:p.color+"66"}}>{p.num} / {p.tag}</span>
                <a href={p.github} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:"#8b949e",textDecoration:"none",fontFamily:"monospace"}}>GitHub →</a>
              </div>
              <h3 style={{fontSize:"18px",fontWeight:700,color:"#fff",marginBottom:"12px"}}>{p.title}</h3>
              <p style={{fontSize:"14px",color:"#8b949e",lineHeight:1.7,marginBottom:"16px"}}>{p.desc}</p>
              <div style={{marginBottom:"16px"}}>
                <div style={{fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"8px",letterSpacing:"2px"}}>DEPLOYMENT PIPELINE</div>
                <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px"}}>
                  {p.pipeline.map((s,i)=>(<span key={s} style={{display:"flex",alignItems:"center",gap:"4px"}}><span style={{padding:"2px 8px",fontSize:"11px",borderRadius:"4px",border:`1px solid ${p.color}33`,color:p.color,background:`${p.color}10`,fontFamily:"monospace"}}>{s}</span>{i<p.pipeline.length-1&&<span style={{color:p.color+"44",fontSize:"10px"}}>-&gt;</span>}</span>))}
                </div>
              </div>
              <div style={{marginBottom:"16px"}}>
                <div style={{fontFamily:"monospace",fontSize:"10px",color:"#484f58",marginBottom:"8px",letterSpacing:"2px"}}>IMPACT</div>
                {p.impact.map(item=>(<div key={item} style={{display:"flex",gap:"8px",fontSize:"13px",color:"#8b949e",marginBottom:"6px"}}><span style={{color:"#22c55e",flexShrink:0}}>checkmark</span>{item}</div>))}
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {p.tags.map(t=>(<span key={t} style={{padding:"2px 8px",fontSize:"11px",borderRadius:"4px",border:"1px solid #1e2d40",color:"#484f58",fontFamily:"monospace"}}>{t}</span>))}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:"40px",textAlign:"center"}}>
          <a href="https://github.com/franklinosuji2-afk" target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",border:"1px solid #1e2d40",color:"#8b949e",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontFamily:"monospace"}}>View All Repositories on GitHub</a>
        </div>
      </div>
    </section>
  )
}