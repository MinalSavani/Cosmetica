import React from 'react';
import v from "../../assets/v.mp4"
import Welcome from '../Welcome';
import { motion } from "framer-motion";
import ImageScroller from '../ImageSlider';
import ImageSlider from '../ImageSlider';

const Home = () => {
  
  return (
    <motion.div 
       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
>
    <div className='w-full ' >
      <div className='w-full h-[100vh]'>
        <video className='w-[100%] h-[100%] object-cover '
       src={v} autoPlay loop muted></video>
      </div>
       <Welcome/>
       <ImageSlider/>
    </div>
    </motion.div>
  );
}

export default Home;
