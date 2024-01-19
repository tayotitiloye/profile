'use client'
import Image from 'next/image'
import React from 'react'
import {mirrorEasing, motion} from 'framer-motion'
import Link from 'next/link'

const textVariants = {
  initial: {
    x:-500,
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren:.1
    }
  },


}

const slideVariants = {
  initial: {
    x: 0,
      },
  animate: {
   x: '-220%',
      transition: {
      repeat: Infinity,
    //  repeatType: 'mirrror',
      duration: 20
    }
  }
}

function Hero() {
  return (
    <>

      {/* mobile view */}


     <div className=' block md:hidden '>
      <div className='h-[100%] overflow-hidden relative w-full flex flex-col justify-between'>
      
      <div className='h-full w-full relative flex-1  overflow-hidden'>
          <div className=' stroke-orange-400 fixed -z-10 left-10 w-[220px] h-[220px]'>
        <svg fill="#000000" viewBox="0 0 512 512" enable-background="new 0 0 512 512" id="computer_x5F_desk_1_" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="computer_x5F_desk">
          <motion.path
              initial={{pathLength:0}}
              animate={{ pathLength: 1 }}
              transition={{duration: 3}}

            d="M168.651,260.609H65.247v67.813h103.404V260.609z M161.451,321.222H72.447v-53.411h89.004V321.222z"></motion.path>
          <motion.path
               initial={{pathLength:0}}
               animate={{ pathLength: 1 }}
               transition={{duration: 4}}

            d="M168.651,369.222H65.247v67.8h103.404V369.222z M161.451,429.822H72.447v-53.4h89.004V429.822z"></motion.path>
          <motion.path 
              initial={{pathLength:0}}
              animate={{ pathLength: 1 }}
              transition={{duration: 5}}

            d="M462.123,206.601H338.977v-17.467h57.955c3.73,0,6.766-3.035,6.766-6.767V87.176c0-3.731-3.035-6.766-6.766-6.766H221.823 c-3.731,0-6.767,3.035-6.767,6.766v95.191c0,3.731,3.035,6.767,6.767,6.767h57.954v17.467H114.824l-31.071-62.928 c2.124-2.365,3.429-5.479,3.429-8.901c0-3.089-1.065-5.93-2.834-8.195l23.331-34.552l27.93,22.391 c1.063,0.853,2.372,1.306,3.71,1.306c0.374,0,0.75-0.036,1.124-0.107c1.712-0.329,3.187-1.387,4.046-2.904l21.066-37.195 c0.871-1.54,1.012-3.372,0.386-5.026c-0.626-1.654-1.943-2.934-3.615-3.511l-45.397-15.672c-2.705-0.936-5.693,0.195-7.104,2.686 L96.829,76.933c-1.443,2.548-0.832,5.727,1.453,7.558l3.76,3.014l-23.492,34.793c-1.469-0.558-3.055-0.877-4.718-0.877 c-7.361,0-13.35,5.989-13.35,13.35c0,7.361,5.989,13.35,13.35,13.35c1.325,0,2.602-0.2,3.811-0.561l29.152,59.04H49.877 c-4.762,0-8.636,3.874-8.636,8.636v28.575h0.006v101.411v7.2v100.02c0,4.731,3.849,8.58,8.581,8.58h134.244 c4.73,0,8.58-3.849,8.58-8.58v-100.02v-7.2V243.811h251.64v208.777c0,4.65,3.783,8.434,8.434,8.434h9.6 c4.65,0,8.435-3.783,8.435-8.434V243.811v-1.6v-26.975C470.759,210.474,466.885,206.601,462.123,206.601z M115.57,58.453 l42.97,14.834l-19.586,34.583l-35.33-28.324L115.57,58.453z M73.832,140.922c-3.391,0-6.15-2.759-6.15-6.15 c0-3.391,2.759-6.15,6.15-6.15c3.392,0,6.15,2.759,6.15,6.15C79.981,138.163,77.223,140.922,73.832,140.922z M222.257,181.934 V87.609h174.241v94.324h-57.521v-0.312h-59.199v0.312H222.257z M331.777,189.134v17.467h-44.801v-17.467H331.777z M185.451,452.441 c0,0.762-0.619,1.381-1.38,1.381H49.828c-0.761,0-1.38-0.619-1.38-1.381v-100.02h137.004V452.441z M185.451,345.222H48.447V243.811 h137.004V345.222z M463.559,452.588c0,0.681-0.554,1.234-1.234,1.234h-9.6c-0.68,0-1.233-0.554-1.233-1.234V243.811h12.067V452.588 z M463.559,236.611h-13.668h-257.24v-0.001H48.441v-21.374c0-0.792,0.644-1.436,1.436-1.436h229.9h59.199h123.146 c0.791,0,1.436,0.644,1.436,1.436V236.611z"></motion.path>
          <motion.path 
              initial={{pathLength:0}}
              animate={{ pathLength: 1 }}
              transition={{duration: 6}}

            d="M374.055,365.885H253.031l-18.152-51.053l-6.784,2.411l18.795,52.863v83.7c0,3.979,3.237,7.215,7.215,7.215H372.98 c3.979,0,7.215-3.236,7.215-7.215v-83.7l18.796-52.863l-6.784-2.411L374.055,365.885z M372.98,453.822H254.105l-0.015-80.736 h118.904L372.98,453.822z"></motion.path>
          <motion.path
                initial={{pathLength:0}}
                animate={{ pathLength: 1 }}
                transition={{duration: 7}}

            d="M281.979,407.2h63.127c2.563,0,4.647-2.085,4.647-4.647v-11.816c0-2.563-2.085-4.646-4.647-4.646h-63.127 c-2.562,0-4.647,2.084-4.647,4.646v11.816C277.332,405.115,279.418,407.2,281.979,407.2z M284.533,393.289h58.021V400h-58.021 V393.289z"></motion.path> <rect height="7.199" width="16.2" x="107.691" y="290.916"></rect> <rect height="7.2" width="16.2" x="107.691" y="400"></rect> </g> </g></svg>
      </div>
      </div>
                  
           <div className='m-auto flex-1 mt-[220px] mb-4'>
        
            <motion.div variants={textVariants} initial='initial' animate='animate' className='flex h-[100%] w-[60%] m-auto  flex-col gap-4 justify-center items-center'>
                  <motion.h1 variants={textVariants} className='text-3xl font-serif lg:text-4xl text-blue-300 font-medium tracking-wide'>Tayo Titiloye</motion.h1>
                  <motion.h2 variants={textVariants} className='text-3xl tracking-tighter text-justify lg:text-5xl font-medium'>Web developer and UI designer</motion.h2>
                  <motion.div variants={textVariants} className=' '>
                <Link href={`#portfolio`} className=''>


                  <motion.button variants={textVariants} className='border p-2 rounded-md m-2'>see the latest work</motion.button>
                </Link>
                <Link href={`#contact`} className=' text-transparent'>

                 
                <motion.button variants={textVariants} className='border p-2 rounded-md bg-white text-black'>contact me</motion.button>
                </Link>
            </motion.div>
            <motion.div variants={textVariants} animate='scrollVariant'>

              
            </motion.div>
           </motion.div>
       
      </div>
     
      </div>
</div>



      {/* tablet and desktop */}
  <div className=' hidden md:block'>

    
    <div className=' h-[100%] overflow-hidden relative w-full flex justify-between'>
       {/* <motion.div variants={slideVariants} initial="initial" animate="animate" className=' absolute textv text-violet-950 text-[300px] whitespace-nowrap'>writer content-creator influencer</motion.div> */}
      <div className='h-[100%] m-auto lg:max-w-[1066px] flex-1'>
        
            <motion.div variants={textVariants} initial='initial' animate='animate' className='flex h-[100%] w-[60%] m-auto  flex-col gap-4 justify-center items-center'>
                  <motion.h1 variants={textVariants} className='text-3xl f font-serif md:text-4xl text-blue-300 font-bold tracking-widest'>Tayo Titiloye</motion.h1>
                  <motion.h2 variants={textVariants} className='text-4xl md:text-5xl font-bold'>Web developer and UI designer</motion.h2>
                  <motion.div variants={textVariants} className=' '>
                <Link href={`#portfolio`} className=''>
                  

                      <motion.button variants={textVariants} className='border p-2 rounded-md mr-2 capitalize'>see my latest work</motion.button>
                </Link>
                <Link href={`#contact`} className=' '>
                
                  <motion.button variants={textVariants} className='border p-2 rounded-md bg-white text-black capitalize'>contact me</motion.button>
                </Link>
            </motion.div>
            <motion.div variants={textVariants} animate='scrollVariant'>

            </motion.div>
           </motion.div>
       
      </div>
      <div className='h-full w-full relative flex-1 overflow-hidden hidden md:block'>
          <div className=' stroke-orange-400 w-[400px] h-[400px]'>
        <svg fill="#000000" viewBox="0 0 512 512" enable-background="new 0 0 512 512" id="computer_x5F_desk_1_" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="computer_x5F_desk">
          <motion.path
              initial={{pathLength:0}}
              animate={{ pathLength: 1 }}
              transition={{duration: 3}}

            d="M168.651,260.609H65.247v67.813h103.404V260.609z M161.451,321.222H72.447v-53.411h89.004V321.222z"></motion.path>
          <motion.path
               initial={{pathLength:0}}
               animate={{ pathLength: 1 }}
               transition={{duration: 4}}

            d="M168.651,369.222H65.247v67.8h103.404V369.222z M161.451,429.822H72.447v-53.4h89.004V429.822z"></motion.path>
          <motion.path 
              initial={{pathLength:0}}
              animate={{ pathLength: 1 }}
              transition={{duration: 5}}

            d="M462.123,206.601H338.977v-17.467h57.955c3.73,0,6.766-3.035,6.766-6.767V87.176c0-3.731-3.035-6.766-6.766-6.766H221.823 c-3.731,0-6.767,3.035-6.767,6.766v95.191c0,3.731,3.035,6.767,6.767,6.767h57.954v17.467H114.824l-31.071-62.928 c2.124-2.365,3.429-5.479,3.429-8.901c0-3.089-1.065-5.93-2.834-8.195l23.331-34.552l27.93,22.391 c1.063,0.853,2.372,1.306,3.71,1.306c0.374,0,0.75-0.036,1.124-0.107c1.712-0.329,3.187-1.387,4.046-2.904l21.066-37.195 c0.871-1.54,1.012-3.372,0.386-5.026c-0.626-1.654-1.943-2.934-3.615-3.511l-45.397-15.672c-2.705-0.936-5.693,0.195-7.104,2.686 L96.829,76.933c-1.443,2.548-0.832,5.727,1.453,7.558l3.76,3.014l-23.492,34.793c-1.469-0.558-3.055-0.877-4.718-0.877 c-7.361,0-13.35,5.989-13.35,13.35c0,7.361,5.989,13.35,13.35,13.35c1.325,0,2.602-0.2,3.811-0.561l29.152,59.04H49.877 c-4.762,0-8.636,3.874-8.636,8.636v28.575h0.006v101.411v7.2v100.02c0,4.731,3.849,8.58,8.581,8.58h134.244 c4.73,0,8.58-3.849,8.58-8.58v-100.02v-7.2V243.811h251.64v208.777c0,4.65,3.783,8.434,8.434,8.434h9.6 c4.65,0,8.435-3.783,8.435-8.434V243.811v-1.6v-26.975C470.759,210.474,466.885,206.601,462.123,206.601z M115.57,58.453 l42.97,14.834l-19.586,34.583l-35.33-28.324L115.57,58.453z M73.832,140.922c-3.391,0-6.15-2.759-6.15-6.15 c0-3.391,2.759-6.15,6.15-6.15c3.392,0,6.15,2.759,6.15,6.15C79.981,138.163,77.223,140.922,73.832,140.922z M222.257,181.934 V87.609h174.241v94.324h-57.521v-0.312h-59.199v0.312H222.257z M331.777,189.134v17.467h-44.801v-17.467H331.777z M185.451,452.441 c0,0.762-0.619,1.381-1.38,1.381H49.828c-0.761,0-1.38-0.619-1.38-1.381v-100.02h137.004V452.441z M185.451,345.222H48.447V243.811 h137.004V345.222z M463.559,452.588c0,0.681-0.554,1.234-1.234,1.234h-9.6c-0.68,0-1.233-0.554-1.233-1.234V243.811h12.067V452.588 z M463.559,236.611h-13.668h-257.24v-0.001H48.441v-21.374c0-0.792,0.644-1.436,1.436-1.436h229.9h59.199h123.146 c0.791,0,1.436,0.644,1.436,1.436V236.611z"></motion.path>
          <motion.path 
              initial={{pathLength:0}}
              animate={{ pathLength: 1 }}
              transition={{duration: 6}}

            d="M374.055,365.885H253.031l-18.152-51.053l-6.784,2.411l18.795,52.863v83.7c0,3.979,3.237,7.215,7.215,7.215H372.98 c3.979,0,7.215-3.236,7.215-7.215v-83.7l18.796-52.863l-6.784-2.411L374.055,365.885z M372.98,453.822H254.105l-0.015-80.736 h118.904L372.98,453.822z"></motion.path>
          <motion.path
                initial={{pathLength:0}}
                animate={{ pathLength: 1 }}
                transition={{duration: 7}}

            d="M281.979,407.2h63.127c2.563,0,4.647-2.085,4.647-4.647v-11.816c0-2.563-2.085-4.646-4.647-4.646h-63.127 c-2.562,0-4.647,2.084-4.647,4.646v11.816C277.332,405.115,279.418,407.2,281.979,407.2z M284.533,393.289h58.021V400h-58.021 V393.289z"></motion.path> <rect height="7.199" width="16.2" x="107.691" y="290.916"></rect> <rect height="7.2" width="16.2" x="107.691" y="400"></rect> </g> </g></svg>
      </div>
      </div>
                  
      </div>
    </div>
       </>
  )
}

export default Hero