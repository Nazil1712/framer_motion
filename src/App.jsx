import React from 'react'
import { motion } from 'motion/react'

const App = () => {
  return (
    <motion.div 
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration: 2, ease: "easeInOut"}}
      className='flex justify-center items-center w-full h-screen text-4xl'
    >
      <h1>Hello World</h1>
    </motion.div>
  )
}

export default App
