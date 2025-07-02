import React from 'react';
import { motion } from "framer-motion";
import movingImage from "../assets/photo.avif";

const BeforeBottom = () => {
  return (
    <div>
    <motion.img
  src={movingImage}
  alt="Moving"
  initial={{ x: "100%" }}
  animate={{ x: "-100%" }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  className="w-[300px]"
/>

    </div>
  );
}

export default BeforeBottom;
