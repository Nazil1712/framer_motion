import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const StepSwitcher = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center ">
      <button
        onClick={() => setStep((s) => (s == 1 ? 2 : 1))}
        className="bg-black text-white p-4 rounded-2xl cursor-pointer"
      >
        Toggle Step
      </button>

      <div>
        <AnimatePresence mode="wait">
          {step == 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-green-700 text-white p-8 rounded-2xl"
            >
              Step One
            </motion.div>
          )}
          {step == 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-green-700 text-white p-8 rounded-2xl"
            >
              Step Two
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StepSwitcher;
