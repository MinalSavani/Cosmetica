import React from 'react';
import white from "../../assets/white.png";
import black from "../../assets/shirt3.png";
import shirt from "../../assets/shirt.png";
import shirt4 from "../../assets/shirt4.png";
import shirt5 from "../../assets/shirt5.png";
import greenshirt from "../../assets/green shirt.png"
import { li } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';

export  const ShirtsData=[
    {
      id:12,
      name:"Shirt White",
      image:white,
      price:"$94.00"
    },
    {
      id:22,
      name:"Shirt Black",
      image:black,
      price:"$100.0"
    },
    {
      id:33,
      name:"Shirt Green Women",
      image:shirt,
      price:"$50.0"
    },
    {
      id:44,
      name:"Shirt Green",
      image:greenshirt,
      price:"$94.00"
    }
  ]
const Shirts = () => {

  const navigate=useNavigate();

  const handleClick= (id)=>{
    navigate(`/products/${id}`);
  }

 
  return (
    <div className='p-8 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 '>
     {ShirtsData.map((item)=>(
      <div key={item.id}
      className='cursor-pointer' onClick={()=>handleClick(item.id)}
      >
        <img src={item.image}
        className='h-[450px] w-full  object-cover rounded' alt="" />
          <h2 className='mt-2 text-xl font-semibold '>
               {item.name}
          </h2>
          <p className='text-amber-100 font-bold '>
              {item.price}
          </p>
      </div>
      
     ))}
    </div>
  );
}

export default Shirts;

