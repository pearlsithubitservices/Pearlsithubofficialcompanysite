'use client'

import { motion } from "framer-motion"

export default function AnimatedText({ text }){

const letters = text.split("")

return(

<h1>

{letters.map((l,i)=>(

<motion.span
key={i}
initial={{ y:40, opacity:0 }}
animate={{ y:0, opacity:1 }}
transition={{ delay:i*0.05 }}
>

{l}

</motion.span>

))}

</h1>

)

}