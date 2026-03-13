'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { fadeUp } from "@/components/Animations"

const services = [

{
title:"Web Application Development",
icon:"🌐",
desc:"Modern scalable web applications built using React, Next.js and Node.js.",
features:["React / Next.js","Responsive Design","SEO Friendly","High Performance"]
},

{
title:"SaaS Product Development",
icon:"☁️",
desc:"Complete SaaS platforms including subscription systems and admin dashboards.",
features:["Stripe Integration","User Authentication","Multi Tenant Systems","Analytics Dashboard"]
},

{
title:"E-commerce Development",
icon:"🛒",
desc:"Online stores with payment integration and inventory management.",
features:["Product Management","Cart & Checkout","Stripe / Razorpay","Admin Dashboard"]
},

{
title:"Tourism & Booking Systems",
icon:"✈️",
desc:"Hotel, travel and tour booking platforms with real time availability.",
features:["Online Booking","Payment Gateway","Customer Dashboard","Notifications"]
},

{
title:"Clothing & Fashion Stores",
icon:"👗",
desc:"Beautiful fashion websites and clothing brand stores.",
features:["Product Catalog","Inventory System","Order Tracking","Mobile Friendly"]
},

{
title:"ERP / CRM Systems",
icon:"📊",
desc:"Custom business software for managing customers and operations.",
features:["Customer Management","Reporting","Role Based Access","Automation"]
},

{
title:"API & Backend Development",
icon:"🔌",
desc:"Secure backend systems and REST / GraphQL APIs.",
features:["Node.js APIs","Authentication","Database Design","Scalable Architecture"]
},

{
title:"Google Ads Marketing",
icon:"📢",
desc:"Run profitable ad campaigns on Google to bring customers.",
features:["Search Ads","Display Ads","Keyword Research","Conversion Tracking"]
},

{
title:"Meta Ads Marketing",
icon:"📱",
desc:"Facebook & Instagram marketing campaigns for business growth.",
features:["Facebook Ads","Instagram Ads","Audience Targeting","Analytics"]
},

{
title:"Mobile App Development",
icon:"📲",
desc:"Cross platform mobile apps for Android and iOS.",
features:["React Native","Push Notifications","API Integration","App Store Deployment"]
}

]

export default function ServicesPage(){

const router = useRouter()

const goToContact = ()=>{
router.push("/contact")
}

/* FAUX 3D CARD TILT */

const handleMouseMove = (e) => {

const card = e.currentTarget
const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

const centerX = rect.width / 2
const centerY = rect.height / 2

const rotateX = -(y - centerY) / 15
const rotateY = (x - centerX) / 15

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
}

const resetTilt = (e)=>{
e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
}

return(

<div className="services-page">

<section className="services-section liquid-bg">

<div className="container">

{/* HERO */}

<motion.div
{...fadeUp}
className="services-header"
>

<h1 className="section-title gradient-text">
Our Services
</h1>

<p className="section-desc">
Complete IT solutions to build scalable products, launch startups and grow digital businesses.
</p>

</motion.div>


{/* SERVICES GRID */}

<div className="services-grid">

{services.map((service,index)=>(

<motion.div
key={index}
className="service-card"

initial={{opacity:0, x:200}}
whileInView={{opacity:1, x:0}}

viewport={{once:true}}

transition={{
duration:0.8,
delay:index*0.1,
ease:"easeOut"
}}

whileHover={{
scale:1.06,
rotateY:8
}}

onClick={goToContact}
>

{/* ICON */}

<motion.div
className="service-icon"
whileHover={{scale:1.2, rotate:10}}
>

{service.icon}

</motion.div>


<h3>{service.title}</h3>

<p className="service-desc">
{service.desc}
</p>


<ul className="service-features">

{service.features.map((feature,i)=>(

<li key={i}>

<CheckCircle size={18} className="feature-icon"/>

{feature}

</li>

))}

</ul>


{/* BUTTON */}

<motion.div
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
>

<Link
href="/contact"
className="btn-primary service-btn"
>

Start Project
<ArrowRight size={18}/>

</Link>

</motion.div>

</motion.div>

))}

</div>

</div>

</section>

</div>

)

}