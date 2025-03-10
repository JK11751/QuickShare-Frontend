import React from "react";
import "./style.css";
import { motion } from "framer-motion";
const IconButton = ({ svg, children, ...other }) => {
  const transition = { duration: 0.1 };
  return (
    <div>
      <motion.button
        {...other}
        className="button-primary"
        type="button"
        transition={transition}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children ? children : ""}
        {svg ? <img src={svg} alt="icon" /> : null}
      </motion.button>
    </div>
  );
};

export default IconButton;
