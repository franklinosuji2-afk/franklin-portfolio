"use client"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm">
          © {new Date().getFullYear()} Franklin Chinonso Osuji
        </p>

        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="https://github.com" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="mailto:franklin@example.com" className="hover:text-white transition">
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}