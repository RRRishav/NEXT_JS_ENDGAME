'use client'
import { useState } from "react"

export default function Home() {
  const [namee ,setName] = useState("Rishav")
  const apple =()=>{
    
    setName("Ayasha")
  }
  return (
    <>
    {/* <User name = "Rishav"/>
    <User name = "Ayasha"/>
    <User name = "Akanksha"/>
    <h1>{namee}</h1>
      <h1 style={{ color: "aqua"  }}>Hello World</h1>
      <button onClick={()=>apple()}>ClickMe</button> */}
    </>
  )
}




const User =(props)=>{
  return(
    <div>
      <h1 > {props.name}</h1>
    </div>
  )
}