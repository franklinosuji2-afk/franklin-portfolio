"use client"
const certs = [
  {issuer:"AMAZON WEB SERVICES",name:"AWS Certified Cloud Practitioner",period:"Aug 2025 - Aug 2028",status:"VERIFIED",color:"#22c55e",verify:"https://www.credly.com/badges/914031f2-e5b2-4e4e-b408-2d512d91566d/public_url"},
  {issuer:"HASHICORP",name:"HashiCorp Certified Terraform Associate",period:"Exam Scheduled",status:"IN PROGRESS",color:"#f97316"},
  {issuer:"AMAZON WEB SERVICES",name:"AWS Certified Solutions Architect - Associate",period:"Expected: 2026",status:"IN PROGRESS",color:"#f97316"},
  {issuer:"DIGITAL CAREER INSTITUTE (DCI)",name:"DevOps and Cloud Engineering Program",period:"November 2024 - March 2026",status:"COMPLETED",color:"#3b82f6",note:"Finished 1,800 units of immersive training. Expertly trained in building robust CI/CD pipelines and optimizing DevOps workflows."},
  {issuer:"DIGITAL CAREER INSTITUTE (DCI)",name:"Testing Center for Digital Professions",period:"12 Nov 2024 - 19 Dec 2024",status:"COMPLETED",color:"#3b82f6",note:"160 teaching units covering professional development, technical assessment preparation, and certification readiness."},
  {issuer:"FEDERAL UNIVERSITY OF TECHNOLOGY, OWERRI",name:"Bachelor of Engineering - Petroleum Engineering",period:"Jan 2012 - Sep 2016",status:"COMPLETED",color:"#3b82f6",note:"Second Class Honours (Upper Division)"},
]
export default function Certifications() {
  return (
    <section id="certifications" style={{padding:"112px 24px",background:"#070a0f"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{marginBottom:"48px"}}>
          <div style={{fontFamily:"monospace",fontSize:"12px",color:"#3b82f6",letterSpacing:"4px",marginBottom:"12px"}}>// CERTIFICATIONS</div>
          <h2 style={{fontSize:"40px",fontWeight:700,color:"#fff",marginBottom:"16px"}}>Credentials and Training</h2>
          <div style={{width:"48px",height:"2px",background:"#3b82f6"}} />
          <p style={{marginTop:"16px",color:"#8b949e",fontFamily:"monospace",fontSize:"13px"}}>Professional credentials and training</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {certs.map((cert,i)=>(
            <div key={i} style={{padding:"20px",borderRadius:"12px",border:`1px solid ${cert.color}22`,background:"#0d1117"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"12px",gap:"8px"}}>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:"#484f58",letterSpacing:"1px",lineHeight:1.4}}>{cert.issuer}</span>
                <span style={{fontFamily:"monospace",fontSize:"10px",color:cert.color,border:`1px solid ${cert.color}44`,padding:"2px 6px",borderRadius:"4px",flexShrink:0}}>{cert.status}</span>
              </div>
              <h3 style={{fontWeight:600,color:"#fff",marginBottom:"8px",fontSize:"14px",lineHeight:1.4}}>{cert.name}</h3>
              <div style={{fontFamily:"monospace",fontSize:"11px",color:"#484f58",marginBottom:"8px"}}>Date: {cert.period}</div>
              {cert.note&&<p style={{fontSize:"12px",color:"#8b949e",lineHeight:1.5,marginBottom:"8px"}}>{cert.note}</p>}
              {cert.verify&&<a href={cert.verify} target="_blank" rel="noreferrer" style={{fontSize:"12px",color:"#22c55e",textDecoration:"none",fontFamily:"monospace"}}>Verified on Credly</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}