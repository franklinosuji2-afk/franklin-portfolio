"use client"

export default function TerminalSection() {
  return (
    <section className="bg-black text-green-400 py-20 px-6">
      <div className="max-w-5xl mx-auto border border-green-500 rounded-2xl p-6 font-mono">

        <p className="mb-4">
          franklin@cloud-engineer:~$
          <span className="ml-2 text-white">whoami</span>
        </p>

        <p className="text-gray-300 mb-6">
          AWS Certified Cloud & DevOps Engineer based in Berlin.
        </p>

        <p className="mb-4">
          franklin@cloud-engineer:~$
          <span className="ml-2 text-white">skills</span>
        </p>

        <ul className="text-gray-300 space-y-2">
          <li>✔ AWS</li>
          <li>✔ Terraform</li>
          <li>✔ Docker</li>
          <li>✔ Kubernetes</li>
          <li>✔ GitHub Actions</li>
          <li>✔ CI/CD Automation</li>
        </ul>
      </div>
    </section>
  )
}