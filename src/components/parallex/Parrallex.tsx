import Image from 'next/image'
import React from 'react'

interface Props{
    type: string
}

function Parrallex({type}:Props) {
  return (
      <div className='w-full h-full relative'
          style={{
              background: type === 'services' ? 'gray' : 'blue'
          }}>
          <h1 className=' capitalize w-[100px]'>{ type === 'services' ? 'what we do' : 'what we did'}</h1>
       
          <div></div>
        <div></div>
        <div></div>
                <Image src={'/images/image-product-4.jpg'} fill className='object-cover -z-10' alt='image' />
        
      </div>
  )
}

export default Parrallex