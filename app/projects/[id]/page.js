'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const project = {
  id: 1,
  title: "E-Commerce Platform",
  description: "Complete e-commerce solution with inventory management, payment processing, and admin dashboard.",
  problem: "Client needed a scalable e-commerce platform to replace their legacy system with better performance and mobile experience.",
  solution: "Built a modern Next.js application with PostgreSQL backend, Stripe integration, and optimized for SEO and performance.",
  technologies: ["Next.js 14","TypeScript","PostgreSQL","Prisma","Stripe","Vercel"],
  screenshots: [
    "https://via.placeholder.com/800x600/111827/22c55e?text=Dashboard",
    "https://via.placeholder.com/800x600/111827/22c55e?text=Product+Page",
    "https://via.placeholder.com/800x600/111827/22c55e?text=Checkout"
  ],
  clientFeedback: "Pearls IT Hub delivered exactly what we needed. The platform handles 10x more traffic than our old system with lightning-fast performance.",
  liveUrl: "https://example-ecommerce.vercel.app",
  githubUrl: "https://github.com/pearlsithub/ecommerce"
}

export default function ProjectDetail({ params }) {

  if (parseInt(params.id) !== project.id) {
    notFound()
  }

  return (

    <div className="project-hero-bg min-h-screen pt-24">

      {/* HERO ANIMATION BACKGROUND */}
      <div className="hero-glow glow1"></div>
      <div className="hero-glow glow2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* BACK BUTTON */}
        <Link
          href="/projects"
          className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-12"
        >
          <ArrowLeft size={20}/>
          Back to Projects
        </Link>


        {/* MAIN GRID */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="grid lg:grid-cols-2 gap-14"
        >

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-5xl font-bold text-green-400">
              {project.title}
            </h1>

            <div className="space-y-6 text-gray-300">

              <div>
                <h2 className="text-2xl text-green-300 mb-2">Challenge</h2>
                <p>{project.problem}</p>
              </div>

              <div>
                <h2 className="text-2xl text-green-300 mb-2">Solution</h2>
                <p>{project.solution}</p>
              </div>

              <div>
                <h3 className="text-xl text-green-300 mb-3">Tech Stack</h3>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech)=>(
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm border border-green-500/40 text-green-300 rounded-lg bg-green-500/10"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              </div>

            </div>


            {/* BUTTONS */}

            <div className="flex gap-4 pt-4">

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                >
                  <ExternalLink size={18}/>
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500 text-green-400 hover:bg-green-500/10 transition"
                >
                  <Github size={18}/>
                  Source Code
                </a>
              )}

            </div>

          </div>


          {/* RIGHT SIDE IMAGES */}

          <div className="space-y-6">

            <h3 className="text-2xl text-green-300">Screenshots</h3>

            {project.screenshots.map((src,index)=>(

              <motion.div
                key={index}
                initial={{opacity:0,scale:0.9}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:true}}
                className="bg-black/40 border border-green-500/20 rounded-2xl p-3 shadow-xl"
              >

                <Image
                  src={src}
                  alt="project screenshot"
                  width={800}
                  height={600}
                  className="rounded-xl"
                />

              </motion.div>

            ))}

          </div>

        </motion.div>


        {/* TESTIMONIAL */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mt-32 text-center"
        >

          <div className="max-w-3xl mx-auto border border-green-500/30 bg-green-500/10 p-10 rounded-2xl">

            <div className="text-green-400 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 text-lg italic">
              "{project.clientFeedback}"
            </p>

            <p className="text-green-300 mt-6 font-semibold">
              Happy Client
            </p>

          </div>

        </motion.div>

      </div>

    </div>

  )
}