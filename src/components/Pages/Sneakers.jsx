// Sneakers.jsx
import one  from "../../assets/shoes1.png";
import two from "../../assets/shoes2.png";
import { useNavigate } from 'react-router-dom';
import three from "../../assets/shoes3.png";
import React, { use } from 'react';

export const SneakersData = [
  {
    id: 101,
    name: "Sneakers Black",
    price: "$50.0",
    image: one,
  },
  {
    id: 201,
    name: "Sneakers Blue",
    price: "$50.00",
    image: two,
  },
  {
    id: 301,
    name: "Sneakers White",
    price: "$50.0",
    image: three,
  }
];

const Sneakers = () => {

  const navigate=useNavigate();
  const handleClick=(id)=>{
  
    navigate(`/products/${id}`);

  }

  return (
    <div className='p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {SneakersData.map((item) => (
        <div key={item.id}
         className="cursor-pointer "
         onClick={()=>handleClick(item.id)}
        >
          <img
            className='h-[450px] w-full object-cover rounded'
            src={item.image}
            alt=""
          />
          <h2 className='mt-2 text-xl font-semibold'>{item.name}</h2>
          <p className='text-white font-bold'>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Sneakers;
