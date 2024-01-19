'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const variants = {
    initial: {
        y: 500,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1,
        transition: {
            duration: .5,
            staggerChildren:.1
        }
    },
}

function Contact() {

    const viewRef = useRef<any>()
    const inView = useInView(viewRef, {margin:'-100px'} )
    const formRef = useRef<any>();
    
    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_a1md7nb', 'template_8ulx15t', formRef.current, '1OwN3WVlk-IAwh3x-')
      .then((result) => {
          console.log(result.text);
    
     toast.success('email sent, thanks for reaching out')
        }, (error) => {
            console.log(error.text);
        });
        
    
        
    };
    



    return (
      
      <motion.div  ref={viewRef} variants={variants} initial='initial' animate='animate' className='flex flex-col md:flex-row lg:w-[1066px] h-[100vh] lg:h-screen justify-center items-center m-auto gap-2'>
          <motion.div variants={variants} className='flex-1 flex flex-col text-center md:text-left gap-6'>
              <motion.h1 variants={variants} className='text-3xl md:text-6xl font-bold'>Let&apos;s work together</motion.h1>
              <motion.div variants={variants}>
                  <h2 className=' text-xl font-bold capitalize'>mails</h2>
                  <span className=' text-slate-400' >tayotitidev@gmail.com</span>
              </motion.div>
              <motion.div variants={variants}>
                    {/* <h2 className=' text-xl font-bold capitalize'>linkedIn</h2> */}
                    <a href="https://www.linkedin.com/in/tayo-titiloye-0738a92a3/" target="_blank" className=" cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                        https://www.linkedin.com/in/tayo-titiloye-0738a92a3/
                    </a>
                  {/* <span className=' text-slate-400' >my address@yahoo.co.uk</span> */}
              </motion.div>
              <motion.div variants={variants}>
                  <h2  className=' text-xl font-bold capitalize'>phone</h2>
                  <span className=' text-slate-400'>234 8036 6900 96</span>
              </motion.div>
          </motion.div>
          <div className='flex-1 relative'>
              <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className=' absolute m-auto stroke-orange-400 hidden md:block -z-10'
              >
                   
                  <svg viewBox="0 0 24 24" width="400px" height="400px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                      <motion.path
                         
                          initial={{pathLength:0}}
                          animate={inView && { pathLength: 1 }}
                            transition={{duration: 3}}
                          className='stroke-orange-400 '
                          d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></motion.path> </g></svg>
              
                 </motion.div>
              
              {/* mobile */}
              <div className='block md:hidden'>
                  
              <motion.form
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                     transition={{ delay: 1, duration: 1 }}
                      ref={formRef}
                      
                      onSubmit={sendEmail}
                      
                     
                   
                   className='flex flex-col gap-2 w-full z-50 mb-5 pb-5'>
                  <input type="text" required placeholder='Name' className='p-2 border rounded-md bg-transparent' name='user_name'/>
                  <input type="email" required placeholder='Email' className='p-2 border rounded-md bg-transparent' name='user_email'/>
                  <textarea rows={7} placeholder='message' className='p-2 border rounded-md bg-transparent' name='message'/>
                    <button type='submit' className=' bg-orange-400 rounded-md p-2'>Submit</button>                  
              </motion.form>
                </div>
             
              {/* tablet and desktop */}
              <div className='hidden md:block mr-10 lg:mr-0 z-[1000]'>
                  
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 1 }}
                      ref={formRef}
                      onSubmit={sendEmail}
                        
                        className='flex flex-col gap-3 w-full z-50'>
                        <input  type="text" required placeholder='Name' className='p-2 border rounded-md bg-transparent' name='user_name'/>
                        <input  type="email" required placeholder='Email' className='p-2 border rounded-md bg-transparent' name='user_email'/>
                        <textarea  rows={7} placeholder='message' className='p-2 border rounded-md bg-transparent' name='message'/>
                            <button type='submit' className=' bg-orange-400 rounded-md p-2'>Submit</button>                  
                  </motion.form>
                
                </div>
             
                </div>
            </motion.div>
              
  )
}

export default Contact

