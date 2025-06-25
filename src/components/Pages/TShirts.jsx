import React from 'react';
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t-2.png";
import shirt4 from "../../assets/shirt4.png";
import three from "../../assets/t3.png";
import four from "../../assets/t4.png";
import five from "../../assets/t5.png";
import { div } from 'framer-motion/client';

const TShirts = () => {

  const TShirt=[
    {
      id:1,
      name:"T-Shirt Kids",
      price:"$50.0",
      image:t1,

    },
    {
      id:2,
      name:"T-Shirt  Black Women",
      price:"$50.0",
      image:t2,
    },
   
    {
      id:3,
      name:"T-Shirt White Kids",
      price:"$50.0",
      image:three,

    },
    {
      id:4,
      name:"T-Shirt Green Women",
      price:"$50.0",
      image:four,
    },
    {
      id:5,
      name:"T-Shirt Green Kids",
      price:"$50.00",
      image:five,
    }
  ]

  return (
    <div className=' p-8 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
     
        {
          TShirt.map((product)=>(
            <div className= {product.id}>
             <img src={product.image} 
             className=' h-[450px] w-full object-cover  rounded'
             alt="" />
             <h2 className='mt-2 font-semibold '> 
              {product.name}
             </h2>
             <p className='text-white font-bold'>
              {product.price}
             </p>
            </div>

          ))}
    </div>
  );
}

export default TShirts;
