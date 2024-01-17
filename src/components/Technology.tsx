'use client'
import NavbarSpace from '@/components/NavbarSpace'
import { technology, technologyType, technologyType2 } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props{
    data: technologyType
}

function Technology({ data }:Props) {

  const [tech, setTech] = useState(data)
  const [value, setValue] = useState(0)

  const {name, images, description} = tech[value]

  return (
      <section className='text-slate-300 lg:h-screen relative w-[100vw] overflow-hidden' >
        
        <Image src='/assets/technology/background-technology-desktop.jpg' className='-z-10 hidden lg:block' alt='image' fill/>
        <Image src='/assets/technology/background-technology-tablet.jpg' className='-z-10 hidden md:block lg:hidden' alt='image' fill/>
        <Image src='/assets/technology/background-technology-mobile.jpg' className='-z-10 block md:hidden' alt='image' fill />

      <NavbarSpace />
      

   

      <h1 className='my-5 font-medium text-lg ml-10 md:text-xl lg:text-2xl'>
        03 Space launch 101
      </h1>

 

      
 
          <div className='relative w-full h-[50vh] block lg:hidden rounded-lg'>
                      
                  <Image src={images} alt='image' fill className='contain block lg:hidden'/>
                  {/* <Image src={images.landscape} alt='image' fill className='contain block lg:hidden'/> */}
                  {/* <Image src='/assets/destination/image-mars.webp' alt='mars image' width={300} height={300} className='contain'/> */}
             </div>
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-1 mx-5 md:mx-10 mt-5'>
        

      <div className='flex lg:mt-10 flex-col items-center'>
        {tech.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: value === i ? 'white' : '',
              color: value === i ? 'black' : 'white'
             }}
            className='cursor-pointer grid place-items-center h-16 w-16 m-2 border rounded-full'
            
          onClick={()=>setValue(i)}
          >
              {i + 1}
          </div>
        ))}
      </div>
    
     <div className='flex md:mt-5 lg:mt-10 mx-2 md:mx-5 lg:mx-10 flex-col gap-2 md:gap-3 lg:gap-4'>
              
            <h3 className='text-lg'>
              The terminology...
            </h3>
            <h1 className='font-bold text-2xl uppercase md:text-3xl lg:text-5xl lg:whitespace-nowrap'>{ name}</h1>
            <div>
                {description}  
          </div>
      </div>
    </div>
 
 
              <div className='relative w-full grid  place-items-center my-4 flex-1 lg:mb-10'>
                      
                  <Image src={images} alt='mars image' width={300} height={300} className='contain hidden lg:block'/>
                  {/* <Image src={images.portrait} alt='mars image' width={300} height={300} className='contain hidden lg:block'/> */}
                
                  </div>
      </div>
                 
    
    </section>
  )
}

export default Technology