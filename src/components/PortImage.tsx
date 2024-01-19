'use client'
import React, { useState } from 'react'
import Image from 'next/image'


type Props1 = {
  id: number;
  title: string;
  link: string;
  coverImage: string;
  
  image: {
    image: string;
  }
};

type PropsPort = {
  id: number;
  title: string;
  link: string;
  coverImage: string;
  image: { image: string; }[];
}
type Data = {
  name: string
  title: string
}

interface Props{
  close: React.Dispatch<React.SetStateAction<boolean>>
  data: PropsPort

}

function PortImage( {close, data }:Props) {

   const [value, setValue] = useState(0)

  const [imageT, setImagetest] = useState(data.image)
  

  const {image} = imageT[value]
  
  function inc() {
    setValue(prev=> prev < imageT.length - 1 ? prev + 1 : 0)
  }
  
  function dec() {
    setValue(prev=> prev === 0 ? imageT.length - 1 :  prev -1)
  }



  return (
      <div className='h-screen w-screen fixed top-0 right-0 bottom-0 left-0 z-[100]'>
          
          
             <div className='h-screen w-screen relative bg-black/80 grid place-items-center'>
          
     <div className=' text-red-400 text-3xl right-10 top-6 absolute border px-2 mr-4 border-white rounded-md cursor-pointer' onClick={() => close(prev=>!prev)}>x</div>
    
        
               <div className='flex-1  relative w-[75%] grid place-items-center my-4'>
                            
                         <Image src={image} alt='mars image' width={900} height={900} className='contain'/>
         </div>
         <div className='font-bold text-lg'>
           {value + 1} of {imageT.length}
         </div>
         <div className='flex gap-2'>
           {imageT.map((p,i) => (
            <div key={i} className='relatative h-24 w-24'
              style={{
                borderColor: value === i ? 'white' : '',
                borderWidth: value === i ? '2px': ''
              }}
              onClick={()=>setValue(i)}
            >
                        <Image src={p.image} alt='mars image' width={90} height={90} className='contain p-1'/>

            </div>
          ))}
        </div>
                  <div className='flex justify-between items-center w-full absolute text-slate-500'>
                      <div onClick={dec} className=' border-2 border-slate-500 rounded-full text-center h-20 w-20  cursor-pointer ml-10 text-4xl grid place-items-center'>{'<'}</div>
                      <div onClick={inc} className=' border-2 border-slate-500 rounded-full text-center h-20 w-20 cursor-pointer mr-10 grid place-items-center text-4xl'>{ '>'}</div>
                  </div>

      </div>
    
    </div>
  )
}

export default PortImage