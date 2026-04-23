import React from "react";
import { motion } from "motion/react";


// repeatType: "reverse", repeatDelay: 5

/* This is the correct code I have written, but I don't know why it is not working */

const LiveBadge = () => {
  return (
    <motion.div>
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity   }}
        className="p-4 bg-purple-700 text-purple-200 rounded-2xl"
      >
        LIVE
      </motion.span>
    </motion.div>
  );
};

export default LiveBadge;
