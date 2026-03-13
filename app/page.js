'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import PageLoader from "@/components/pageLoader"

export default function Home(){

/* HERO TEXT ANIMATION */

const container = {
hidden:{opacity:0},
show:{
opacity:1,
transition:{
staggerChildren:0.2
}
}
}

const item = {
hidden:{opacity:0,y:50,scale:0.95},
show:{
opacity:1,
y:0,
scale:1,
transition:{
duration:0.7,
ease:"easeOut"
}
}
}

return(

<PageLoader>

<>

{/* HERO */}

<section className="hero">

<div className="container">

<motion.div
variants={container}
initial="hidden"
animate="show"
>

<motion.h1
className="hero-title"
variants={item}
>

Building Scalable <br/>
<span>Software Solutions</span>

</motion.h1>


<motion.p
className="hero-desc"
variants={item}
>

We craft beautiful, scalable web applications, SaaS platforms,
and custom software solutions that drive business growth.

</motion.p>


<motion.div
className="hero-buttons"
variants={item}
>

<motion.div
whileHover={{
scale:1.08,
y:-5
}}
transition={{type:"spring", stiffness:250}}
>

<Link href="/projects" className="btn-primary">
View Projects →
</Link>

</motion.div>

<motion.div
whileHover={{
scale:1.08,
y:-5
}}
transition={{type:"spring", stiffness:250}}
>

<Link href="/contact" className="btn-outline">
Start Project
</Link>

</motion.div>

</motion.div>

</motion.div>


{/* STATS */}

<div className="stats">

{[
{num:"10+",text:"Projects"},
{num:"10+",text:"Clients"},
{num:"5.0",text:"Rating"},
 {num:"Growing",text:"Startup"}
].map((item,i)=>(

<motion.div
key={i}
className="stat-card"

initial={{opacity:0,y:60,scale:0.9}}
whileInView={{opacity:1,y:0,scale:1}}
viewport={{once:true}}

transition={{
delay:i*0.15,
duration:0.6
}}

whileHover={{
scale:1.05,
rotateX:8,
rotateY:-8
}}

style={{transformStyle:"preserve-3d"}}
>

<div className="stat-number">{item.num}</div>
<div className="stat-text">{item.text}</div>

</motion.div>

))}

</div>

</div>

</section>



{/* SERVICES */}

<section className="services">

<div className="container">

<motion.h2
className="section-title"

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

transition={{duration:0.6}}
>

Technologies We Offer

</motion.h2>


<div className="services-grid">

{[
{
title:"Next.js Development",
desc:"Build fast SEO friendly web applications."
},
{
title:"SaaS Platforms",
desc:"Scalable SaaS products for startups."
},
{
title:"UI / UX Design",
desc:"Modern clean interfaces users love."
}
].map((service,i)=>(

<motion.div
key={i}
className="service-card"

initial={{opacity:0,y:60,scale:0.9}}

whileInView={{opacity:1,y:0,scale:1}}
viewport={{once:true}}

transition={{
delay:i*0.2,
duration:0.6
}}

whileHover={{
scale:1.07,
rotateX:6,
rotateY:-6
}}

style={{
transformStyle:"preserve-3d"
}}
>

<h3>{service.title}</h3>
<p>{service.desc}</p>

</motion.div>

))}

</div>

</div>

</section>

</>

</PageLoader>

)

}