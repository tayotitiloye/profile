'use client'
import React, { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
const item = [
    {
        id: 1,
        title: 'Nextjs Ecommerce site',
        img:'/images/image-product-4.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam!'
    },
    {
        id: 2,
        title: 'Nextjs Fantasy galaxy exploration site',
        img:'/images/image-product-4.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam!'
    },
    {
        id: 3,
        title: 'Nextjs Ecommerce site',
        img:'/images/image-product-4.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam!'
    },
    {
        id: 4,
        title: 'Nextjs Ecommerce site',
        img:'/images/image-product-4.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam!'
    },
]

interface Props{
    id: number;
    title: string;
    img: string;
    desc:string
}

interface Props2{
    item:Props
}


const SinglePort = ({ item }: Props2) => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
      // offset:['start start','end start'],
    })
    const y = useTransform(scrollYProgress, [0,1],[-300,300])

        return (
            // <section ref={ref}>
            <section>
                <div className='flex justify-center h-[100%] items-center'>
                    <div className=' max-w-[1066px] h-[100%] m-auto flex gap-4'>
                         <div className='flex-1 h-[50%] m-auto'>
                            <img src={item.img} className=' w-[100%] h-[100%] object-cover' alt="" />
                            
                            </div>
                            {/* <motion.div style={{y}} className='flex-1 flex flex-col gap-4'> */}
                            <div className='flex-1 flex flex-col gap-4'>
                                <h1 className=' text-xl'> {item.title} </h1>
                                <p className=' text-slate-400 font-[20px]'>{item.desc}</p>
                                <button className=' bg-orange-400 rounded-md py-2 w-fit px-4'>see more</button>
                            </div>
                    </div>
                </div>  
            </section>
        )
    }
function Portfolio() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset:['end end','start start'],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping:10
    })

  return (
      <div className=' relative'>
          {/* <div ref={ref} className='top-0 left-0 text-center text-orange-400 pt-12 text-2xl sticky'> */}
          <div className='top-0 left-0 text-center text-orange-400 pt-12 text-2xl sticky'>
              <h1>featured work</h1>
              {/* <motion.div style={{scaleX}} className=' h-3 bg-white'></motion.div> */}
              <div className=' h-3 bg-white'></div>
          </div>
          {item.map(p => (
              <SinglePort item={p} key={p.id} />
          ))}
    </div>
  )
}

export default Portfolio