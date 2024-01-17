import Cursor from '@/components/Cursor'
import NavbarPort2 from '@/components/NavbarPort2'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Hero from '@/components/hero/Hero'
import Parrallex from '@/components/parallex/Parrallex'
import Portfolio from '@/components/portfolio/Portfolio'
import Portfolio2 from '@/components/portfolio/Portfolio2'
import Services from '@/components/services/Services'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const navlink = ['#homepage', '#about', '#portfolio', '#contact']

function page() {


  return (
    <div className=' overflow-hidden mx-3  text-slate-200'>
        <Cursor/>
           
      <div className=''>

        <div className='hidden md:block fixed right-5 top-[250px] z-50'>
            <div className='flex flex-col gap-4 w-full p-2 h-full'>
                  
                {navlink.map((p,i) => (
                    <div
                        key={p}
                        className=' h-2 w-2 hover:h-3 hover:w-3 hover:bg-white cursor-pointer active:bg-black bg-slate-500 rounded-full'>
                    <Link href={`port2${p}`} className=' text-transparent'>{ p}</Link>
                    </div>
                ))}
            </div>
    </div>
      </div>
      <section className='h-[100vh]' id='homepage'>
        <NavbarPort2 />
        <Hero />
      </section>
          {/* <section className='h-[100%]' id='service'><Services/></section> */}
      <section className='h-[100%]' id='about'> <About /></section>
         <section  className='h-[100%]' id='portfolio'> <Portfolio2 /></section>
      <section className='h-[100%]' id='contact'> <Contact /></section>
             
      
    </div>
  )
}

export default page


