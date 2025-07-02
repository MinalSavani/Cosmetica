// TShirts.jsx
import React from 'react';
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t-2.png";
import three from "../../assets/t3.png";
import four from "../../assets/t4.png";
import five from "../../assets/t5.png";
import { useNavigate } from 'react-router-dom';

export const TShirt = [
  {
    id: 10,
    name: "T-Shirt Kids",
    price: "$50.0",
    image: t1,
  },
  {
    id: 20,
    name: "T-Shirt Black Women",
    price: "$50.0",
    image: t2,
  },
  {
    id: 30,
    name: "T-Shirt White Kids",
    price: "$50.0",
    image: three,
  },
  {
    id: 40,
    name: "T-Shirt Green Women",
    price: "$50.0",
    image: four,
  },
  {
    id: 50,
    name: "T-Shirt Green Kids",
    price: "$50.00",
    image: five,
  }
];

const TShirts = () => {
  const navigate=useNavigate();

  const handleClick=(id)=>{
    navigate(`/products/${id}`);
  }
  return (
    <div className='p-8 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
      {TShirt.map((item) => (
        <div key={item.id}
        onClick={()=>handleClick(item.id)}
        >
          <img
            src={item.image}
            className='h-[450px] w-full object-cover rounded'
            alt=""
          />
          <h2 className='mt-2 font-semibold'>{item.name}</h2>
          <p className='text-white font-bold'>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TShirts;
