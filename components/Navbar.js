'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar(){

const [mobileOpen,setMobileOpen] = useState(false)
const [scrolled,setScrolled] = useState(false)

useEffect(()=>{

const handleScroll = ()=>{
setScrolled(window.scrollY > 50)
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<motion.nav
className={`navbar ${scrolled ? "navbar-scroll" : ""}`}
initial={{ y:-80, opacity:0 }}
animate={{ y:0, opacity:1 }}
transition={{ duration:0.6 }}
>

<div className="container nav-wrapper">

{/* LOGO */}

<motion.div whileHover={{ scale:1.05 }}>

<Link href="/" className="logo">
Pearls IT Hub
</Link>

</motion.div>


{/* DESKTOP MENU */}

<motion.div
className="nav-links"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3}}
>

<Link href="/">Home</Link>
<Link href="/services">Services</Link>
<Link href="/projects">Projects</Link>
<Link href="/about">About</Link>

<motion.div whileHover={{ scale:1.05 }}>

<Link href="/contact" className="btn-primary">
Contact
</Link>

</motion.div>

</motion.div>


{/* MOBILE BUTTON */}

<button
className="mobile-toggle"
onClick={()=>setMobileOpen(!mobileOpen)}
>

{mobileOpen ? <X size={26}/> : <Menu size={26}/>}

</button>

</div>


{/* MOBILE MENU */}

<AnimatePresence>

{mobileOpen && (

<motion.div
className="mobile-menu"
initial={{ opacity:0, height:0 }}
animate={{ opacity:1, height:"auto" }}
exit={{ opacity:0, height:0 }}
transition={{ duration:0.3 }}
>

<Link href="/" onClick={()=>setMobileOpen(false)}>Home</Link>
<Link href="/services" onClick={()=>setMobileOpen(false)}>Services</Link>
<Link href="/projects" onClick={()=>setMobileOpen(false)}>Projects</Link>
<Link href="/about" onClick={()=>setMobileOpen(false)}>About</Link>

<motion.div whileHover={{ scale:1.05 }}>

<Link
href="/contact"
className="btn-primary"
onClick={()=>setMobileOpen(false)}
>

Contact Us

</Link>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</motion.nav>

)

}