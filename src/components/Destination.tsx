'use client'
import NavbarSpace from '@/components/NavbarSpace'
import { destinations, destinationsType } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'



interface Props{
    data2: destinationsType
}

function Destination({data2}:Props) {


    const [data, setDate] = useState(data2)
    const [value, setValue] = useState(0)

    const {name, images, description, distance, travel} = data[value]
    
   
    return (
            
           
      <section className=' text-slate-300 lg:h-screen relative w-[100vw] overflow-hidden' >
        
        <Image src='/assets/destination/background-destination-desktop.jpg' className='-z-10 hidden lg:block' alt='image' fill/>
        <Image src='/assets/destination/background-destination-tablet.jpg' className='-z-10 hidden md:block lg:hidden' alt='image' fill/>
        <Image src='/assets/destination/background-destination-mobile.jpg' className='-z-10 block md:hidden' alt='image' fill />

          <NavbarSpace />
          
          <div className='flex flex-col lg:flex-row gap-4'>
              
              <div className='flex flex-col gap-4 flex-1'>
                  <h1 className='ml-6 text-xl md:text-2xl lg:text-4xl my-4 font-medium'> 01 Pick your destination </h1>
                  <div className='relative w-full grid place-items-center my-4'>
                      
                  <Image src={images} alt='mars image' width={300} height={300} className='contain'/>
                  {/* <Image src='/assets/destination/image-mars.webp' alt='mars image' width={300} height={300} className='contain'/> */}
                  </div>
                  

                  
            </div>
              

              <div className='flex-1  mx-10 lg:mt-[50px]'>
                  
                  
                  
                  <div className='flex justify-center items-center lg:justify-start'>
                      
                  {data.map((p,index )=> (
                      <button
                          key={index}
                          className='flex items-center justify-center cursor-pointer p-2 md:p-4 text-xl font-medium'
                          style={{
                              borderBottomWidth: value === index ? '2px' : ''
                              
                          }}
                          onClick={() => setValue(index)}
                            >{p.name}</button>
                      ))}
                  </div>
                  <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl my-4 grid place-items-center lg:place-content-start lg:my-5'>{ name}</h1>
                    

                  <div className=''>
                      {description}
                      
                   </div>
                 
                 <div className='flex justify-between'>
                           
                            <div className='my-8 md:my-10'>
                                <p>
                                        Avg. distance
                                        
                                </p>  
                                <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl  '>
                                    
                              
                                     {distance}
                                </h2>
                            </div>
                            <div className='my-8 md:my-10 '>
                                <p>
                                        Est. travel time
                                </p>  
                                <h2 className='font-bold text-2xl md:text-3xl lg:pb-4 lg:text-4xl  '>
                                    {/* 9 months */}
                                   {travel} 
                                </h2>
                            </div>
                </div>

                    
                    
                </div>
          </div>
    </section>

  )
}

export default Destination


