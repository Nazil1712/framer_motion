import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DismissableAlert = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer w-full flex justify-center items-center"
      >
        Toggle Alert
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-red-500 rounded-2xl p-4 text-white"
          >
            This is an animated Alert
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DismissableAlert;
