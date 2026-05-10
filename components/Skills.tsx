"use client"
const cats = [
  { title:"Cloud Platforms", color:"#3b82f6", skills:["AWS EC2","S3","IAM","VPC","Lambda","ECS","Fargate","RDS","Route 53","CloudFormation"] },
  { title:"Infrastructure as Code", color:"#8b5cf6", skills:["Terraform","AWS CloudFormation"] },
  { title:"CI/CD & Automation", color:"#f97316", skills:["Jenkins","GitHub Actions","CI/CD Pipelines","Automated Deployments"] },
  { title:"Containers & Orchestration", color:"#06b6d4", skills:["Docker","Amazon ECS","AWS Fargate","Container Optimization"] },
  { title:"Programming & Scripting", color:"#22c55e", skills:["Python","Bash","SQL"] },
  { title:"Monitoring & Reliability", color:"#ec4899", skills:["Amazon CloudWatch","Linux Administration","Incident Response"] },
  { title:"Databases", color:"#eab308", skills:["PostgreSQL","DynamoDB","AWS RDS"] },
]
export default function Skills() {
  return (
    <section id="skills" style={{padding:"112px 24px",background:"#0a0e17"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// TECH_STACK</div>
          <h2 style={{fontSize:"40px",fontWeight:700,color:"#fff",marginBottom:"16px"}}>Technical Skills</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
          <p style={{marginTop:"16px",color:"#8b949e",fontFamily:"monospace",fontSize:"13px"}}>Production-tested tools and technologies</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {cats.map(c=>(
            <div key={c.title} style={{padding:"24px",borderRadius:"12px",border:`1px solid ${c.color}33`,background:`${c.color}08`}}>
              <h3 style={{fontSize:"12px",fontWeight:600,fontFamily:"monospace",color:c.color,marginBottom:"16px",letterSpacing:"2px"}}>{c.title.toUpperCase()}</h3>
              <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                {c.skills.map(s=>(<span key={s} style={{padding:"3px 10px",fontSize:"11px",borderRadius:"4px",border:`1px solid ${c.color}33`,color:c.color,background:`${c.color}15`,fontFamily:"monospace"}}>{s}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}