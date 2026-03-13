'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [

{
id:1,
title:"Agro Smart AI",
description:"Intelligent Farming Advisory System powered by Artificial Intelligence & Cloud Computing. Get smart crop recommendations, weather alerts, and precision agriculture insights.",
tech:["React","Python","Flask","Machine Learning","Cloud"],
vercel:"https://pearlsithub-agrosmart-ai.vercel.app",
render:"https://your-render-api.onrender.com",
github:"https://github.com/pearlsithubitservices/agro-smart-ai"
},

{
id:2,
title:"AI Fraud Detection System",
description:"Machine learning powered system that detects fraudulent financial transactions using a trained classification model.",
tech:["React","Flask","Python","Scikit-Learn","Vite"],
vercel:"https://pearlsithub-fraud-detection-using-a.vercel.app",
render:"https://your-render-backend-url.onrender.com",
github:"https://github.com/pearlsithubitservices/pearlsithub_fraud_detection_using_ai"
},

{
id:3,
title:"Guardian Animal Aid",
description:"Animal welfare platform for rescuing, reporting and supporting stray animals",
tech:["Next.js","Supabase","Vercel"],
vercel:"https://pearlsithub-animalwellfare.vercel.app/",
render:"",
github:"https://github.com/pearlsithubitservices/pearlsithub-Animalwellfare"
},

{
id:4,
title:"Car Rental Service Platform",
description:"Smart car rental booking platform that allows users to browse vehicles, check availability, and reserve cars online with a seamless booking experience.",
tech:["Next.js","Node.js","MongoDB","Stripe"],
vercel:"https://pearlsithub-car-rental.vercel.app",
render:"https://pearlsithub-car-rental-api.onrender.com",
github:"https://github.com/pearlsithubitservices/car-rental-service",
demo:"/demo/democar.mp4"
},
{
id:5,
title:"Audio Text Enhanced AI",
description:"AI-powered speech processing platform that converts audio to text, enhances recordings, and provides intelligent transcription using advanced AI models.",
tech:["Next.js","Node.js","MySQL","OpenAI","Whisper AI"],
vercel:"https://pearlsithub-voice.vercel.app/login",
render:"https://pearlsithub-voice.onrender.com",
github:"https://github.com/pearlsithubitservices/audio-text-enhanced",
demo:"/demo/audio-text-demo.mp4"
}

]

export default function ProjectsPage(){

return(

<div className="projects-page">

<div className="container">

<div className="projects-header">

<h1>Our Projects</h1>

<p>
Real world applications built for startups and businesses
</p>

</div>

<div className="projects-grid">

{projects.map((project,index)=>(

<motion.div
key={project.id}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*0.1}}
className="project-card"
>

<h3>{project.title}</h3>

<p className="project-desc">
{project.description}
</p>

<div className="project-tech">

{project.tech.map((tech)=>(
<span key={tech}>{tech}</span>
))}

</div>

<div className="project-links">

{project.vercel && (

<Link
href={project.vercel}
target="_blank"
className="btn-primary"
>

Live (Vercel)

</Link>

)}

{project.render && (

<Link
href={project.render}
target="_blank"
className="btn-outline"
>

Live (Render)

</Link>

)}

{project.github && (

<Link
href={project.github}
target="_blank"
className="btn-outline"
>

Github

</Link>

)}

{project.demo && (

<Link
href={project.demo}
target="_blank"
className="btn-outline"
>

Watch Demo

</Link>

)}

</div>

</motion.div>

))}

</div>

</div>

</div>

)

}