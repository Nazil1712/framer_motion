import React, { useState } from "react";
import { motion } from "motion/react";

const CollapsibleList = () => {
  const [expanded, setExpanded] = useState(null);

  const items = [1, 2, 3];

  return (
    <div className="flex flex-col gap-4">
      {items.map((id) => (
        <motion.div
          key={id}
          layout
          onClick={() => setExpanded((prev) => (prev == id ? null : id))}
          className="bg-black p-4 rounded-2xl text-white cursor-pointer"
        >
          <h3>Item {id}</h3>

          {expanded == id && (
            <motion.p layout>This section expands and contracts with layout</motion.p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CollapsibleList;
