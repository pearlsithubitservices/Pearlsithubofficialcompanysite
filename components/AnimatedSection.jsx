'use client'

import { motion } from "framer-motion"

export default function AnimatedSection({ children }){

return(

<motion.section

initial={{ opacity:0, y:80 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true, margin:"-100px" }}

transition={{ duration:0.8 }}

>

{children}

</motion.section>

)

}