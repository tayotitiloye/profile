'use client'
import React, { useState } from 'react'
import LinkBtn from './link/LinkBtn'
import ToggleBtn from './toggle/ToggleBtn'
import { motion, spring } from 'framer-motion'

const variants = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness:20,
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: .5,
                type: 'spring',
                stiffness:400,
                dumping:40
            },
        },
    }


function Sidebar() {
    const [open, setOpen] = useState(false)

    
  return (
      <motion.div className='flex flex-col items-center justify-center text-black' animate={open ? 'open' : 'closed'}>
          <motion.div className='fixed top-0 bottom-0 left-0 z-50 w-[400px] bg-white' variants={variants}><LinkBtn /></motion.div>
          <ToggleBtn setOpen={ setOpen} />
    </motion.div>
  )
}

export default Sidebar