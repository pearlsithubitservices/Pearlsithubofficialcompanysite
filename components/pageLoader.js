'use client'
import { useEffect, useState } from "react"

export default function PageLoader({children}){

const [loading,setLoading] = useState(true)

useEffect(()=>{
setTimeout(()=>{
setLoading(false)
},1200)
},[])

if(loading){
return(

<div className="loader-screen">

<div className="loader">

<div className="loader-circle"></div>

<p>Loading Experience...</p>

</div>

</div>

)
}

return children
}