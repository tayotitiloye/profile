'use client'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y:100,
        opacity:0
    },
    animate: {
        x: 0,
        y:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .1,
                   }
    }
}


function Services() {
    return (
        <>
        <div className='block md:hidden bg-mycolor'>
                {/* mobile view */}

                <div   className='h-[100%] flex flex-col justify-around'>
          <div  className='flex-1 mb-3 self-end flex items-center gap-2 md:gap-3 lg:gap-5'>
              <p className='md:text-lg font-medium text-end text-slate-400'>I focus on helping your brand grow <br /> and move forward </p>
              <hr className='w-[150px] md:w-[350px] lg:w-[500px] border-t-gray-500' />
          </div >
          <div    className='flex-2 flex flex-col items-center '>
              <div   className='flex items-center gap-3 md:gap-5 lg:gap-8 '>
                  <img className='w-[200px] md:w-[200px] lg:w-[300px] h-[100px] rounded-lg object-cover' src='/images/image-product-4.jpg' alt="" />
                    <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold'><b className=' hover:text-orange-400'>Unique </b><span className='font-thin'>Ideas</span></h1>
              </div >
              <div   className='flex gap-8'>
                    <h1 className=' text-2xl md:text-4xl lg:text-7xl'><b className=' hover:text-orange-400'>For Your </b>Business</h1>
                    <button className=' w-[90px] md:w-[150px] lg:w-[200px] h-[80px] px-1 mb-2 rounded-lg bg-orange-400 border-none font-[18px] md:font-[24px] cursor-pointer capitalize'>what i do?</button>
              </div >
          </div >
          <div    className='flex-1 flex flex-col md:flex-row lg:w-[1066px] m-auto mx-4 lg:mx-auto'>
              <div   className='p-4 mx-2 flex flex-col gap-2 border hover:bg-slate-300 hover:text-slate-600'>
                  <h2>Branding</h2>
                  <p> Lorem adipisicing elit. Officiis aperiam saepe hic exercitationem excepturi. Repellat numquam libero sequi, sapiente ab quibusdam maxime, earum tempora dolorum at, sed nam eum rerum.</p>
                    <button className=' p-2 bg-orange-400 rounded-lg border-none'>Go</button>
              </div >
              <div   className='p-4 mx-2 flex flex-col gap-2 border hover:bg-slate-300 hover:text-slate-600'>
                  <h2>Branding</h2>
                  <p> Lorem adipisicing elit. Officiis aperiam saepe hic exercitationem excepturi. Repellat numquam libero sequi, sapiente ab quibusdam maxime, earum tempora dolorum at, sed nam eum rerum.</p>
                    <button className=' p-2 bg-orange-400 rounded-lg border-none'>Go</button>
              </div >
              <div   className='p-4 mx-2 flex flex-col gap-2 border hover:bg-slate-300 hover:text-slate-600'>
                  <h2>Branding</h2>
                  <p> Lorem adipisicing elit. Officiis aperiam saepe hic exercitationem excepturi. Repellat numquam libero sequi, sapiente ab quibusdam maxime, earum tempora dolorum at, sed nam eum rerum.</p>
                    <button className=' p-2 bg-orange-400 rounded-lg border-none'>Go</button>
              </div >
              
          </div >
        </div >

     </div >

            {/* tablet and computer view */}
       <div className=' hidden md:block box-border h-[100vh]'>             
            <motion.div variants={variants} initial='initial' whileInView='animate' className='h-[100%] flex flex-col justify-around'>
                <motion.div variants={variants} className='flex-1 self-end flex items-center gap-2 md:gap-3 lg:gap-4'>
                    <motion.p className='  md:text-lg font-medium text-end text-slate-500'>I focus on helping your brand grow <br /> and move forward </motion.p>
                    <hr className='w-[200px] md:w-[350px] lg:w-[500px] border-t-gray-500' />
                </motion.div>
                <motion.div variants={variants}  className='flex-2 flex flex-col items-center '>
                    <div className='flex items-center gap-3 md:gap-5 lg:gap-8 '>
                        <img className='w-[150px] md:w-[200px] lg:w-[300px] h-[100px] rounded-lg object-cover' src='/images/image-product-4.jpg' alt="" />
                            <h1 className='text-2xl md:text-2xl lg:text-5xl font-medium'><b className=' hover:text-orange-400'>Unique </b><span className=' font-thin'>Ideas</span></h1>
                    </div>
                    <div className='flex gap-8'>
                            <h1 className=' text-2xl md:text-2xl lg:text-5xl'><b className=' hover:text-orange-400'>For Your </b>Business</h1>
                            <button className=' w-[90px] md:w-[150px] lg:w-[200px] h-[80px] px-1 mb-2 rounded-lg bg-orange-400 border-none font-[18px] md:font-[24px] cursor-pointer capitalize'>what i do?</button>
                    </div>
                </motion.div>
                <motion.div variants={variants}  className='flex-1 flex flex-col md:flex-row lg:w-[1066px] m-auto mx-4 lg:mx-auto'>
                    <div className='p-4 flex flex-col gap-2 border hover:bg-slate-300 hover:text-slate-600'>
                        <h2>Branding</h2>
                        <p> Repellat numquam libero sequi, sapiente ab quibusdam maxime, earum tempora dolorum at, sed nam eum rerum.</p>
                            <button className=' p-2 bg-orange-400 rounded-lg border-none'>Go</button>
                    </div>
                    <div className='p-10 flex flex-col gap-2 border hover:bg-slate-300 hover:text-slate-600'>
                        <h2>Branding</h2>
                        <p> Repellat numquam libero sequi, sapiente ab quibusdam maxime, earum tempora dolorum at, sed nam eum rerum.</p>
                            <button className=' p-2 bg-orange-400 rounded-lg border-none'>Go</button>
                    </div>
                    <div className='p-10 flex flex-col gap-2 border hover:bg-slate-300 hover:text-slate-600'>
                        <h2>Branding</h2>
                        <p> Repellat numquam libero sequi, sapiente ab quibusdam maxime, earum tempora dolorum at, sed nam eum rerum.</p>
                            <button className=' p-2 bg-orange-400 rounded-lg border-none'>Go</button>
                    </div>
                    
                </motion.div>
                </motion.div>
        </div>
    </>
  )
}

export default Services