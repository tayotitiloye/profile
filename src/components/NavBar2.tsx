'use client'
import React, { useState } from 'react'

const navlink = ['#homepage', '#service', '#portfolio', '#contact']

function NavBar2() {

    const [nav, setNav] = useState(0)

    return (
      <div className=' fixed right-5 top-[250px] z-50'>
      <div className='flex flex-col gap-4 w-fit p-2 '>
            
          {navlink.map((p,i) => (
              <div
                  key={p}
                  onClick={() => setNav(i)}
                  style={{
                      backgroundColor: nav === i ? 'white' : 'darkslategrey'
                  }}
                  className=' h-2 w-2 hover:h-3 hover:w-3 cursor-pointer rounded-full'>
                  <a href={p}></a>
              </div>
          ))}
      </div>
    </div>
  )
}

export default NavBar2