import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import img1 from "../assets/black-1.png";
import img2 from "../assets/black2.png";
import img3 from "../assets/black3.png";
import img4 from "../assets/black4.png";
import img5 from "../assets/black5.png";

const cards = [
  { url: img1, id: 1 },
  { url: img2, id: 2 },
  { url: img3, id: 3 },
  { url: img4, id: 4 },
  { url: img5, id: 5 },
  { url: img3, id: 33 },
  { url: img2, id: 22 },

];

const ImageSlider = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
    target: targetRef,
  });  

const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-8">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card }) => {
  return (
    <div className="group relative h-[350px] w-[250px] overflow-hidden rounded-xl shadow-lg bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export default ImageSlider;
