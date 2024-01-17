'use client'
import { motion } from "framer-motion"
import Sidebar from "./sidebar/Sidebar"

function NavbarPort2() {


  return (
   <div className='h-[100px] flex justify-center items-center'>
          <div>
              {/* <Sidebar/> */}
          </div>  
          <motion.div
                initial={{opacity:0, scale: .5}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration:.3}}
              className='max-w-[1066px]  w-full m-auto flex justify-between items-center'>
              
          <span className=" text-orange-400 font-mono text-2xl italic">
              TayoDev
          </span>
          <div>social icons</div>   
      </motion.div>
    </div>
  )
}

export default NavbarPort2
