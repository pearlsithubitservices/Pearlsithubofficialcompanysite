'use client'

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }) {

const pathname = usePathname()

const rows = 6
const cols = 10
const total = rows * cols

return (

<AnimatePresence mode="wait">

<motion.div key={pathname} style={{position:"relative"}}>

{/* GRID ANIMATION */}

<div className="page-transition-grid">

{[...Array(total)].map((_,i)=>(

<motion.div
key={i}
className="grid-tile"

initial={{scaleY:0}}
animate={{scaleY:0}}
exit={{scaleY:1}}

transition={{
duration:0.4,
delay:i*0.015
}}

style={{
transformOrigin:"top"
}}
/>

))}

</div>

{/* PAGE CONTENT */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-30}}
transition={{duration:0.4}}
>

{children}

</motion.div>

</motion.div>

</AnimatePresence>

)

}