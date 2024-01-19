'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import PortImage from '../PortImage';
import { portfolio } from '@/data';

interface Portfolio {
  id: number;
  title: string;
  link: string;
  coverImage: string;
  image: {
    image: string;
  }
}[];

type PropsPort = {
  id: number;
  title: string;
  link: string;
  coverImage: string;
  image: { image: string; }[];
}

interface PropsPort2{
    project: PropsPort
}

const slideLeft = {
    initial: {
        opacity: 0,
        x:-200
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            type:'spring',
            staggerChildren: .5,
            staggerDirection:1

        }
    }
}

const slideRight = {
    initial: {
        opacity: 0,
        x:500
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: .05,
            staggerDirection:-1
        }
    }
}

const mobileVariant = {
    initial: {
        opacity: 0,
        x:-50
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 1,
            staggerDirection:1

        }
    }
}





function Portfolio2() {

    const [data, setData] = useState(portfolio)

  return (
      <div className='pt-[60px] md:m-auto md:pt-[100px] lg:max-w-[1066px] bg-mycolor h-[100vh]'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center p-2 w-full'>
            Portfolio Projects
          </h1>
          <div className=' flex flex-col md:flex-row md:h-full justify-center items-center'>
              {data.map(p => (
                  <SingleProject project={p} key={p.id}/>
              ))}
          </div>
      </div>
  )
}

export default Portfolio2




function SingleProject({ project }: PropsPort2) {

    const [open, setOpen] = useState(false)
    
    return (
        <>
            {/* mobile view */}
         <motion.a variants={mobileVariant} initial='initial' whileInView='animate' href={project.link} target='_blank' className='cursor-pointer'>

            <motion.div variants={mobileVariant} className=' block md:hidden bg-mycolor '>
                 <motion.div className='flex flex-col md:flex-row gap-3 md:gap-4 m-auto p-3 md:p-4 lg:p-5'>
                    <motion.div variants={mobileVariant} className='relative flex-1 mx-auto w-full h-full group cursor-pointer'>
                     
                      <Image className=' m-auto rounded-lg' src={ project.coverImage} width={250} height={250} alt='image' />
                       
                    </motion.div>
                    <motion.div variants={mobileVariant} className='flex-1 m-auto p-2 w-[300px] h-full'>
                            <motion.h2 variants={mobileVariant} className=' text-xl md:text-xl lg:text-3xl font-bold'>{project.title}</motion.h2>
                     
                    </motion.div>
                </motion.div>
   
            </motion.div>
        </motion.a>
            
            {/* tablet and desktop */}
            <div className=' hidden md:block'>

                <motion.div variants={slideLeft} initial='initial' whileInView='animate' className='flex flex-col gap-3 md:gap-4 m-auto p-3 md:p-4 lg:p-5'>
                   
                        <motion.div variants={slideLeft}  className='relative group flex-1 w-full h-full'>
                        
                            <Image className=' m-auto rounded-lg' src={project.coverImage} width={400} height={400} alt='image' />
                            <div className=' grid place-items-center font-bold  text-lg absolute -bottom-10 bg-black/50 w-full h-full border rounded-lg opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300'>
                                { project.title}
                            <div className=' flex gap-3'>
                                <span className='cursor-pointer mx-2' onClick={() => setOpen(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
    
                                </span>  
                                <a href={project.link} target='_blank' className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>

                                </a>    
                                    
                                </div>
                        </div>
                       
                        </motion.div>

                    <motion.div variants={slideLeft} className='italic'>
                        <h2 className='font-bold text-xl'>{ project.title}</h2>
                         <p className='flex cursor-pointer' onClick={() => setOpen(true)}>
                            <span className='cursor-pointer mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
    
                                </span>:Sneak Peek</p>
                            <p className='flex cursor-pointer underline text-orange-400'>
                                 <a href={project.link} target='_blank' className='flex cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                         :  {project.link}
                                </a>
                                   

                            </p>
                        </motion.div>
                   </motion.div>
                {open && <PortImage data={project} close={setOpen} />}
               
        </div>
        </>
    )
    
}

