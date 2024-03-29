import { motion } from 'framer-motion'


const variants = {
  open: {
    transition:{
      staggerChildren: .1
    }
  },

  closed: {
    transition:{
      staggerChildren: .05,
      staggerDirection: -1
    }
  },
  
}
const itemVariants = {
  open: {
    y: 0,
    opacity: 1
    
  },

  closed: {
    y: 50,
   opacity: 0
    
  },
  
}

interface Props{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  
}


const links=['homepage', 'about', 'portfolio','contact']
function LinkBtn({setOpen}:Props) {
  return (
    <motion.div variants={variants} className='h-[100%] w-[100%] absolute flex flex-col justify-center items-center capitalize gap-[20px]'>
      {links.map((p,i) => (
        <motion.a
          href={`#${p}`}
          key={i} variants={itemVariants}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}
          onClick={()=>setOpen((prev)=> !prev)}
            >
         { p}
        </motion.a >
      ))}
    </motion.div>
  )
}

export default LinkBtn