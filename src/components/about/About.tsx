'use client'
import {motion} from 'framer-motion'

const slideLeft = {
    initial: {
        x: - 500,
        y: 100,
        opacity:0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
          staggerChildren: .1,
            type: 'spring'
            
         }
    }
    
}
const slideLeftMobil = {
    initial: {
        x: - 50,
        y: 30,
        opacity:0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
          staggerChildren: .1,
            type: 'spring'
            
         }
    }
    
}

function About() {
    return (
      
        <>
            {/* mobile */}
           <div   className=' text-slate-300 p-6 bg-mycolor m-auto block md:hidden border'>
          <div >
                <h1  className=' font-bold hover:text-orange-400 border-b my-2 md:my-4 text-xl md:text-3xl text-center capitalize'>who i am</h1>  
              <p  className=' my-2 md:my-4 tracking-wider md:leading-7 text-center'>
                    I am a highly skilled full-stack developer with a passion for creating efficient and user-friendly web applications. I transitioned from management field and I have worked on numerous portfolio projects some of which are in the portfolio section,
                    My expertise lies in both front-end and back-end development, allowing me to seamlessly integrate various technologies and deliver robust solutions.
                    I am a quick learner, adaptable to new technologies, and always strive to stay up-to-date with the latest industry trends.

              </p>
              <h2  className='text-lg md:text-2xl font-bold my-2 md:my-4 border-b hover:text-orange-400 text-center mt-3 md:mt-5'>Skills</h2>
         <div className='flex flex-col md:flex-row gap-2'>
              <ul  className='flex-1 border p-3 rounded-lg leading-7 md:p-4 list-inside list-disc lg:hover:text-slate-700 lg:hover:bg-slate-200'>
                  <li> <span className=' text-orange-400 font-bold'>Programming languages</span>: Javascript, HTML5, CSS  </li>
                  <li> <span className=' text-orange-400 font-bold'>Front-End Development</span>: React.js / Nextjs, ,Tailwind CSS, Framer- Redux,Typescript</li>
                     <li><span className=' text-orange-400 font-bold'> Back-end Development</span>: Nodejs(Prisma)</li>
                </ul>
                  
                <ul  className='flex-1 border p-3 rounded-lg leading-7 md:p-4 list-inside list-disc lg:hover:text-slate-700 lg:hover:bg-slate-200'>
                      
                  <li> <span className=' text-orange-400 font-bold'>Databases</span>: PostgreSQL, MongoDB</li>
                  <li><span className=' text-orange-400 font-bold'>Version Control</span>: Git,GitHub </li>
                  <li> <span className=' text-orange-400 font-bold'>API Development</span>: RESTful APIs, integration of third-party APIs </li>
                </ul>

                <ul  className='flex-1 border p-3 rounded-lg leading-7 md:p-4 list-inside list-disc lg:hover:text-slate-700 lg:hover:bg-slate-200'>
                  <li> <span className=' text-orange-400 font-bold'>Testing and Debugging</span>: Postman, Thunder Client </li>
                  <li><span className=' text-orange-400 font-bold'> Agile Methodologies</span>: Scrum(theoretical knowledge)</li>
              </ul>
                  
            </div>
                
            
          </div>
          
            </div>
             
        
        
      
            {/* tablet and desktop */}
      
          <motion.div variants={slideLeft} initial='initial' whileInView='animate'  className='h-[100vh] text-slate-300 p-6 lg:w-[1066px] bg-mycolor m-auto hidden md:block'> 
                <motion.h1 variants={slideLeft} className=' font-bold hover:text-orange-400 border-b my-2 md:my-4 text-xl md:text-3xl text-center capitalize'>About</motion.h1>  
              <motion.p variants={slideLeft} className=' my-2 md:my-4 tracking-wider lg:leading-7 text-center'>
                    I am a highly skilled full-stack developer with a passion for creating efficient and user-friendly web applications. I transitioned from management field, so I bring the problem solving skills I've acquired over the years to bear on technology while working on projects. I have worked on numerous portfolio projects some of which are in the portfolio section.
                    My expertise lies in both front-end and back-end development, allowing me to seamlessly integrate various technologies and deliver robust solutions.
                    I am a quick learner, adaptable to new technologies, and always strive to stay up-to-date with the latest industry trends.

              </motion.p>
              <motion.h2 variants={slideLeft} className='text-lg md:text-2xl font-bold my-2 md:my-4 border-b hover:text-orange-400 text-center mt-3 md:mt-5'>Skills</motion.h2>
         <motion.div className='flex flex-col md:flex-row gap-2'>
              <motion.ul variants={slideLeft} className='flex-1 border p-3 rounded-lg leading-7 md:p-4 list-inside list-disc lg:hover:text-slate-700 lg:hover:bg-slate-200'>
                  <li> <span className=' text-orange-400 font-bold'>Programming languages</span>: Javascript, HTML5, CSS  </li>
                  <li> <span className=' text-orange-400 font-bold'>Front-End Development</span>: React.js / Nextjs ,Tailwind CSS, Framer-motion, Redux,Typescript</li>
                     <li><span className=' text-orange-400 font-bold'> Back-end Development</span>: Nodejs(Prisma)</li>
                </motion.ul>
                  
                <motion.ul variants={slideLeft} className='flex-1 border p-3 rounded-lg leading-7 md:p-4 list-inside list-disc lg:hover:text-slate-700 lg:hover:bg-slate-200'>
                      
                  <li> <span className=' text-orange-400 font-bold'>Databases</span>: PostgreSQL, MongoDB</li>
                  <li><span className=' text-orange-400 font-bold'>Version Control</span>: Git,GitHub </li>
                  <li> <span className=' text-orange-400 font-bold'>API Development</span>: RESTful APIs, integration of third-party APIs </li>
                </motion.ul>

                <motion.ul variants={slideLeft} className='flex-1 border p-3 rounded-lg leading-7 md:p-4 list-inside list-disc lg:hover:text-slate-700 lg:hover:bg-slate-200'>
                  <li> <span className=' text-orange-400 font-bold'>Testing and Debugging</span>: Postman, Thunder Client </li>
                  <li><span className=' text-orange-400 font-bold'> Agile Methodologies</span>: Scrum</li>
              </motion.ul>
                  
            </motion.div>
          </motion.div>
          
            
        </>
  )
}

export default About

