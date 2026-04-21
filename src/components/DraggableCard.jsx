import React from "react";
import { motion } from "motion/react";

const DraggableCard = () => {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={{left: -80, top: -80, right: 80, bottom:80}}
        dragElastic={0.2}
        className="bg-black text-white rounded-2xl cursor-pointer p-4"
      >
        Drag me !
      </motion.div>
    </div>
  );
};

export default DraggableCard;
