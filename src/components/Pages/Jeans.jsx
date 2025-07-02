import React from 'react';
import { useNavigate } from 'react-router-dom';
import jean3 from "../../assets/jean3.png";
import jeans4 from "../../assets/jeans4.png";
import jeans from "../../assets/jeans.png";
import jeans2 from "../../assets/jeans2.png";
import shorts from "../../assets/shorts.png";
import BeforeBottom from '../BeforeBottom';
import Footer from "../Footer";

export const jeansData = [
  { id: 1, image: shorts, name: "Vintage Vibes", price: "$50.00" },
  { id: 2, image: jeans, name: "High-Rise Hustle", price: "$150.00" },
  { id: 3, image: jean3, name: "Black Jeans", price: "$50.00" },
  // { id: 4, image: jeans4, name: "White Jeans", price: "$50.00" },
  { id: 5, image: jeans2, name: "Black Jeans", price: "$50.00" }
];


const Jeans = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className='p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {jeansData.map((item) => (
        <div key={item.id} className='cursor-pointer' 
        onClick={() => handleClick(item.id)}>
          <img src={item.image} className='h-[450px] w-full object-cover rounded' alt={item.name} />
          <h2 className='mt-2 text-xl font-semibold'>{item.name}</h2>
          <p className='text-amber-100 font-bold'>{item.price}</p>
        </div>
      ))}

      {/* <BeforeBottom/> */}
     
    </div>
  );
};

export default Jeans;