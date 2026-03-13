import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import ParticlesBackground from '@/components/ParticlesBackground'
import AnimationProvider from "@/components/AnimationProvider"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

return(

<html lang="en">

<body className={inter.className}>

<AnimationProvider>



<Navbar/>

<PageTransition>
<main>{children}</main>
</PageTransition>

<Footer/>

</AnimationProvider>

</body>

</html>

)

}