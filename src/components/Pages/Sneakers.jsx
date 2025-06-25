import { div } from 'framer-motion/client';
import React from 'react';
import one  from "../../assets/shoes1.png";
import two from "../../assets/shoes2.png";
import three from "../../assets/shoes3.png";

const Sneakers = () => {
  const SneakersData=[
    {
      id:1,
      name:"Sneakers Black",
      price:"$50.0",
      image:one,
    },

    {
      id:2,
      name:"Sneakers Blue",
      price:"$50.00",
      image:two,
    },
    {
      id:3,
      name:"Sneakers White",
      price:"$50.0",
      image:three,
    }
  ]
  return (

    <div className=' p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6'>
      {SneakersData.map((item)=>(
        <div key={item.id}>
          <img
          className='h-[450px] w-full object-cover rounded '
           src={item.image} alt="" />
           <h2 className='mt-2 text-xl font-semibold'>
            {item.name}
           </h2>
           <p className='text-white font-bold'>
            {item.price}
           </p>
        </div>
      ))}
    
      
    </div>
  );
}

export default Sneakers;
