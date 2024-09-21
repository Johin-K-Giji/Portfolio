import React from 'react'
import {animate, motion} from 'framer-motion'

const Transition = () => {
   const  TransitionVariants = {
        initial: {
            y:"100%",
            height :"100%"
        },
        animate:{
                y:"0%",
                height:"0%"

        },
        exit: {
                y:["0%","100%"],
                height:["0%","100%"]
        }
    }

  return (
    <div>
  {/* <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-white'
  variants={TransitionVariants}
  initial="initial"
  exit="exit"
  animate="animate"
  transition={{duration:0.6,delay:0.2,ease:"easeInOut"}}
  />


<motion.div className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-green-100'
  variants={TransitionVariants}
  initial="initial"
  exit="exit"
  animate="animate"
  transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
  /> */}

<motion.div className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-blue-200'
  variants={TransitionVariants}
  initial="initial"
  exit="exit"
  animate="animate"
  transition={{duration:0.8,delay:0.6,ease:"easeInOut"}}
  />


</div>

  
  )
}

export default Transition
