import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import {AnimatePresence, motion} from 'framer-motion';
const Navbar=({})=>{
  return(
    <div className="main-container">

      <motion.div 
      animate={{
        width:isOpen?"200px":"45px",

        transition:{
          duration:0.5,
          type:"spring",
          damping:10,
        },
      }}
       className="bg-black "
      >
       <div className="top_section"> 
         <AnimatePresence>
          {isOpen && (
            <motion.h1
            variants={showAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="logo"
            >
              Do Some Coding
            </motion.h1>
          )}
         </AnimatePresence>
       </div>
      </motion.div>
    </div>
  )
}
export default Navbar;