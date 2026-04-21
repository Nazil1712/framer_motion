import React from "react";
import { motion } from "motion/react";

const Buttons = () => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{scale: 0.9, y:1}}
        transition={{type:"spring", stiffness:300}}
        className="text-2xl border p-4 rounded-2xl hover:border-blue-600 cursor-pointer"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Buttons;
