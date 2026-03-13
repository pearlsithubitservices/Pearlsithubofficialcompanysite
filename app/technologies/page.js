'use client'
import { motion } from 'framer-motion'

const technologies = [
  { name: "React", category: "Frontend", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", category: "Framework", icon: "🔥", color: "from-gray-400 to-gray-600" },
  { name: "Node.js", category: "Backend", icon: "⚡", color: "from-green-400 to-green-600" },
  { name: "MongoDB", category: "Database", icon: "🐘", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", color: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨", color: "from-indigo-400 to-indigo-600" },
  { name: "Vercel", category: "Deployment", icon: "🚀", color: "from-black to-gray-800" },
  { name: "Render", category: "Deployment", icon: "☁️", color: "from-orange-400 to-orange-600" }
]

export default function Technologies() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Technology Stack</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We use modern, proven technologies to deliver scalable and maintainable solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-white transition-all duration-500"
              >
                <div className={`text-5xl mb-6 p-4 rounded-2xl bg-gradient-to-r ${tech.color} mx-auto w-20 h-20 flex items-center justify-center shadow-2xl`}>
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tech.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
