import React from "react";
import { motion } from "motion/react";
import Buttons from "./components/Buttons";
import FeatureList from "./components/FeatureList";
import DraggableCard from "./components/DraggableCard";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        {/* <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-4xl"
        >
          Hello World
        </motion.h1> */}


        {/* <Buttons/> */}
        {/* <FeatureList/> */}
        <DraggableCard/>


      </div>
    </>
  );
};

export default App;
