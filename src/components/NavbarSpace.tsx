'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function NavbarSpace() {

    const [selected, setSelected] = useState(0)
     const [open, setOpen] = useState(false)


    return (
      <>
     <div className='flex items-center justify-center'>

          
          <Link href='/' className='flex-1 mt-3 mx-7 lg:m-14'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
          </Link>
         

        <div className='hidden md:flex flex-1 lg:mr-[100px]  justify-center h-fit items-center backdrop-blur-3xl lg:gap-3 text-white lg:mt-4'>
              {linksExplore.map((p, index) => (
                  <Link key={index} className='active:border-b-2' onClick={() => setSelected(index)}
                     // className='border-b-2'
                      // style={{
                      //     borderBottomWidth: selected === index ? '2px' : '',
                          
                      // }}
                      href={p.url}>
                        <div className='cursor-pointer md:text-sm lg:text-base flex gap-1 p-4' key={p.id}>
                        <span className='hidden lg:block'>{ p.number}</span> {p.title}
                        </div>
                  </Link>
              ))}
          </div>
                {open ? (<svg className='block md:hidden m-10 cursor-pointer' onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>) :
        
        (<svg className='block md:hidden m-10 cursor-pointer' onClick={()=>setOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>)
        
        }
      </div>
    
            <div>
                {open && <MobileView/> }
        </div>
</>

  )
}

export default NavbarSpace

const linksExplore = [
  { 
    id: 1,
    title: 'Home',
        number: '00',
    url: '/'
  },
  { 
    id: 2,
    title: 'Destination',
      number: '01',
    url: '/destination'
           
  },
  { 
    id: 3,
    title: 'Crew',
      number: '02',
    url: '/crew'
      },
  { 
    id: 4,
    title: 'Technology',
      number: '03',
    url:'/technology'
  },
]

function MobileView() {

   
    return (
        <div className='top-[5rem] h-screen w-[100vh] absolute text-2xl bg-slate-500 opacity-90 p-4 z-50'>

            {linksExplore.map((p,i )=> (
                <Link key={i} className='flex flex-col gap-4 p-4 hover:scale-95 hover:bg-slate-700 transition  text-white' href={p.url}>
                {p.title}
                </Link>
            ))}

        </div>
    )
}