'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {

const [formData, setFormData] = useState({
name:'',
email:'',
service:'',
message:''
})

const [submitted,setSubmitted] = useState(false)
const [loading,setLoading] = useState(false)

const handleSubmit = async(e)=>{
e.preventDefault()
setLoading(true)

await new Promise(resolve => setTimeout(resolve,1500))

setSubmitted(true)
setLoading(false)

setFormData({
name:'',
email:'',
service:'',
message:''
})
}

return (

<div className="min-h-screen pt-28 bg-gradient-to-b from-gray-50 to-white">

<section className="section">

<div className="container">

{/* Header */}
<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-center mb-20"
>

<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
Let's Build Something Amazing
</h1>

<p className="text-xl text-gray-600 max-w-2xl mx-auto">
Tell us about your idea and we will help turn it into a powerful digital product.
</p>

</motion.div>

<div className="grid lg:grid-cols-2 gap-12">

{/* Contact Info */}

<motion.div
initial={{opacity:0,x:-30}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
className="space-y-8"
>

<div className="bg-white shadow-xl rounded-3xl p-10 border border-gray-100">

<h3 className="text-3xl font-bold mb-8">Contact Details</h3>

<div className="space-y-6">

<div className="flex items-center gap-4">

<div className="bg-blue-600 p-4 rounded-xl">
<Mail className="text-white"/>
</div>

<div>
<p className="text-gray-500 text-sm">Email</p>
<p className="font-semibold text-lg">
pearlsithub.in@gmail.com
</p>
</div>

</div>

<div className="flex items-center gap-4">

<div className="bg-emerald-600 p-4 rounded-xl">
<Phone className="text-white"/>
</div>

<div>
<p className="text-gray-500 text-sm">Phone</p>
<p className="font-semibold text-lg">
+91 98765 43210
</p>
</div>

</div>

<div className="flex items-center gap-4">

<div className="bg-purple-600 p-4 rounded-xl">
<MapPin className="text-white"/>
</div>

<div>
<p className="text-gray-500 text-sm">Location</p>
<p className="font-semibold text-lg">
Chennai, India
</p>
</div>

</div>

</div>

</div>

</motion.div>

{/* Contact Form */}

<motion.div
initial={{opacity:0,x:30}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
>

{submitted ? (

<div className="bg-white shadow-xl rounded-3xl p-16 text-center">

<CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6"/>

<h3 className="text-3xl font-bold mb-4">
Message Sent Successfully
</h3>

<p className="text-gray-600 mb-8">
We will respond within 24 hours.
</p>

<button
onClick={()=>setSubmitted(false)}
className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
>
Send Another Message
</button>

</div>

) : (
<form onSubmit={handleSubmit} className="card p-10 lg:p-12 space-y-6">

{/* Name + Email */}
<div className="grid md:grid-cols-2 gap-6">

<input
type="text"
required
placeholder="Full Name"
value={formData.name}
onChange={(e)=>setFormData({...formData,name:e.target.value})}
className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
/>

<input
type="email"
required
placeholder="Email"
value={formData.email}
onChange={(e)=>setFormData({...formData,email:e.target.value})}
className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
/>

</div>

{/* Message */}
<textarea
rows="5"
required
placeholder="Tell us about your project..."
value={formData.message}
onChange={(e)=>setFormData({...formData,message:e.target.value})}
className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
/>

{/* Service + Button */}
<div className="grid md:grid-cols-2 gap-6 items-center">

<select
required
value={formData.service}
onChange={(e)=>setFormData({...formData,service:e.target.value})}
className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
>

<option value="">Select a service</option>
<option value="web">Web Development</option>
<option value="saas">SaaS Platform</option>
<option value="ui">UI/UX Design</option>
<option value="api">API Development</option>

</select>

<button
type="submit"
disabled={loading}
className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition"
>

<Send size={20}/>
Send Message

</button>

</div>

</form>

)}

</motion.div>

</div>

</div>

</section>

</div>

)

}