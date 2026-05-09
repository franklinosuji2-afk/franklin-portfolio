"use client"

export default function Experience() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-8 text-gray-300">

          <div>
            <h3 className="text-xl font-semibold text-white">
              Cloud & DevOps Engineer
            </h3>
            <p>Freelance / Personal Projects</p>
            <p className="mt-2">
              Built and deployed cloud-native applications using AWS, Docker,
              and CI/CD pipelines. Focused on automation, scalability, and
              infrastructure reliability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              IT / Cloud Training (DCI Germany)
            </h3>
            <p>
              Intensive training in software engineering, DevOps practices,
              and cloud infrastructure (AWS, Linux, Git, Docker, CI/CD).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Engineering Background
            </h3>
            <p>
              Petroleum Engineering background with strong analytical and
              systems-thinking foundation applied to cloud architecture.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}