'use client'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

function Cursor() {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    
    useEffect( ()=> {
       const mouseMove= (e:any)=>{ setPosition({x:e.clientX,y:e.clientY})}
    
        window.addEventListener('mouseover', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    },[])
 

  return (
    <motion.div animate={{x:position.x+3, y:position.y+3}} className='hidden lg:block h-[40px] w-[40px] fixed border-white border rounded-full z-[999px]'></motion.div>
  )
}

export default Cursor