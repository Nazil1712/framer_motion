import React from 'react'
import { motion } from 'motion/react'

const Play = () => {
  return (
    <div>
        {/* <motion.div 
            initial={{
                x:0
            }}
            animate={{
                x:1000,
                rotate:360
            }}
            transition={{
                duration:2,
                delay:2,
                repeat:Infinity,
                repeatType:"reverse",
                ease:"anticipate"
            }}
        className='w-64 h-64 m-40 bg-red-600 border-2 border-yellow-900'>

        </motion.div> */}


        <motion.div 
            initial={{
                x:0,
                y:0
            }}
            animate={{
                x:[0,800,800,0,0],
                y:[0,0,300,300,0],
            }}
            transition={{
                duration:5,
                delay:2
            }}
        className='w-64 h-64 m-40 bg-red-600 border-2 border-yellow-900'>

        </motion.div>
      
    </div>
  )
}

export default Play
