import React from "react";
import { motion } from "motion/react";

const FeatureList = () => {
  const features = ["Fast", "Declarative", "Powerful", "Fun"];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 5} },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.ul variants={container} initial="hidden" animate="visible">
        {features.map((feature) => (
          <motion.li variants={item} className="text-2xl">
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default FeatureList;
