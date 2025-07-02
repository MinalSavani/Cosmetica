import { useState } from "react";
import { useParams } from "react-router-dom";
import {allProducts} from "../data/allProduct"
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { div } from "framer-motion/client";
import { useDispatch } from "react-redux";
import {addToCart} from "../features/ShopCart/cartSlice";
const Accordion = ({ title, content }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center py-3 text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
      </button>
      {isOpen && <div className="text-gray-600 pb-4">{content}</div>}
    </div>
  );
};

// Product Detail Component
const ProductDetail = () => {
  const dispatch=useDispatch();
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }
  
  const handleAddToCart=()=>{
    const numericPrice=Number(product.price.replace("$",''));

    dispatch(addToCart({
      id:product.id,
      name:product.name,
      price:numericPrice,
      image:product.image

    }));
    console.log("Item added",product.name)
  }
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded" />
      </div>

      <div className="md:w-1/2">
        <h1 className="font-semibold tracking-wider text-3xl mt-6 font-sans">{product.name}</h1>
        <p className="tracking-wider text-xl mt-5 font-sans">{product.price}</p>

        <div className="mt-8">
          <Accordion
            title="Product Description"
            content={`Current trends and vibrant colors:\n\nKeep up with fashion by choosing clothes inspired by the latest trends. Vibrant colors and modern prints will help you create unique and personal outfits.\n\nFor an impeccable shopping experience:\n\nOur team is dedicated to your satisfaction. Visit our stores or explore the online collection and benefit from personalized advice, fast delivery, and free returns.\n\nDiscover the new collection and redefine your personal style!`}
          />
           <Accordion
            title="Material"
            content={`Current trends and vibrant colors:\n\nKeep up with fashion by choosing clothes inspired by the latest trends. Vibrant colors and modern prints will help you create unique and personal outfits.\n\nFor an impeccable shopping experience:\n\nOur team is dedicated to your satisfaction. Visit our stores or explore the online collection and benefit from personalized advice, fast delivery, and free returns.\n\nDiscover the new collection and redefine your personal style!`}
          />
           <Accordion
            title="Delivery and Returns"
            content={`Current trends and vibrant colors:\n\nKeep up with fashion by choosing clothes inspired by the latest trends. Vibrant colors and modern prints will help you create unique and personal outfits.\n\nFor an impeccable shopping experience:\n\nOur team is dedicated to your satisfaction. Visit our stores or explore the online collection and benefit from personalized advice, fast delivery, and free returns.\n\nDiscover the new collection and redefine your personal style!`}
          />

          <button
            onClick={handleAddToCart}
           className=" mt-5 border bg-zinc-900 text-white  border-white rounded-2xl py-4 px-4 ">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;