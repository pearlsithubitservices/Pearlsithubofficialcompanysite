'use client'

import Link from "next/link"
import { Linkedin, Instagram, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

const container = {
hidden:{opacity:0},
show:{
opacity:1,
transition:{
staggerChildren:0.2
}
}
}

const fadeUp = {
hidden:{opacity:0,y:40},
show:{opacity:1,y:0}
}

export default function AboutPage(){

return(

<motion.div
className="about-page animated-bg"
variants={container}
initial="hidden"
animate="show"
>

<div className="container">

{/* HEADER */}

<motion.div
className="about-header"
variants={fadeUp}
>

<h1>About Pearls IT Hub</h1>

<p>
We are a modern software development company helping startups
and businesses build scalable digital products.
</p>

</motion.div>


{/* ABOUT CONTENT */}

<div className="about-content">

{/* LEFT TEXT */}

<motion.div
className="about-text"
variants={fadeUp}
>

<h2>Who We Are</h2>

<p>
Pearls IT Hub is a software development company specializing in
web applications, SaaS platforms, e-commerce systems, and custom
business software.
</p>

<p>
We work with modern technologies like React, Next.js, Node.js,
and cloud platforms to deliver scalable and secure solutions.
</p>

<p>
Our goal is to help businesses grow using powerful digital
products and automation systems.
</p>

</motion.div>


{/* CONTACT CARD */}

<motion.div
className="about-contact"
variants={fadeUp}
whileHover={{
scale:1.05,
rotateY:5
}}
transition={{type:"spring", stiffness:200}}
>

<h3>Connect With Us</h3>

<div className="contact-item">
<Phone size={18}/>
<span>+91 8015613840</span>
</div>

<div className="contact-item">
<Mail size={18}/>
<span>pearlsithub.in@gmail.com</span>
</div>


{/* SOCIAL */}

<div className="social-links">

<motion.div whileHover={{scale:1.1}}>
<Link href="https://www.linkedin.com/company/pearlsithub/" target="_blank">
<Linkedin size={22}/> LinkedIn
</Link>
</motion.div>

<motion.div whileHover={{scale:1.1}}>
<Link href="https://www.instagram.com/pearls_ithub/?hl=en" target="_blank">
<Instagram size={22}/> Instagram
</Link>
</motion.div>

</div>

</motion.div>

</div>

</div>

</motion.div>

)
}