import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className='flex items-center justify-center py-24 dark:bg-zinc-900'>
      <div className='flex flex-col gap-4 p-6 m-6'>
        <motion.span
          ref={ref}
          variants={fadeInUpAnimation}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className='text-xs px-4 text-black dark:text-white'
        >
          WELCOME TO
        </motion.span>

        <motion.span
          variants={fadeInUpAnimation}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          transition={{ delay: 0.5 }}
          className='text-4xl tracking-wide font-mono text-center mt-5 font-bold'
        >
          COMETICA
        </motion.span>
      </div>
    </div>
  );
};

export default Welcome;
