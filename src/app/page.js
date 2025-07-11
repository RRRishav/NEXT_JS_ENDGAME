'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"



export default function Home() {

  const router = useRouter()


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

       

     <h1>BASIC ROUTING</h1>
     <Link href='/login'>GO TO THE LOGIN PAGE </Link>
     <br/>
     <br/>    
      
     <Link href='/About'>GO TO THE ABOUT PAGE </Link>

     <br></br>


     <button onClick={()=>router.push('/login')}>Login page </button>

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