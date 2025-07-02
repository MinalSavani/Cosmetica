import React, { useState, useEffect, useRef } from "react";
import faq from "../../api/faq.json";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

const AccordionItem = ({ item, openId, toggleAccordion }) => (
  <ul className="w-[400px] p-4 m-4 dark:text-white">
    <li className="font-semibold flex justify-between items-center">
      {item.question}
      <button onClick={() => toggleAccordion(item.id)}>
        {openId === item.id ? (
          <MdKeyboardArrowUp size={24} />
        ) : (
          <MdKeyboardArrowDown size={24} />
        )}
      </button>
    </li>
    {openId === item.id && (
      <li className="text-sm text-gray-400 mt-2">{item.answer}</li>
    )}
  </ul>
);

const Faq = () => {
  const [data, setData] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [activeSection, setActiveSection] = useState("Placing an Order");

  const placingRef = useRef(null);
  const shippingRef = useRef(null);
  const returnsRef = useRef(null);
  const supportRef = useRef(null);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    setData(faq); // ✅ Load data on mount

    const sections = [
      { ref: placingRef, name: "Placing an Order" },
      { ref: shippingRef, name: "Shipping and Delivery" },
      { ref: returnsRef, name: "Returns and Exchanges" },
      { ref: supportRef, name: "Support and Contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find((s) => s.ref.current === entry.target);
            if (matched) setActiveSection(matched.name);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  // ✅ Group data into categories
  const placingOrderFaqs = data.filter(
    (item) => item.category === "Placing an Order"
  );
  const shippingDelivery = data.filter(
    (item) => item.category === "Shipping and Delivery"
  );
  const returnsExchanges = data.filter(
    (item) => item.category === "Returns and Exchanges"
  );
  const supportContact = data.filter(
    (item) => item.category === "Support and Contact"
  );

  return (
    <div className="flex  justify-between w-full">

      {/* Sidebar */}
      <div className="w-[450px] mt-20  ml-9 p-4 sticky top-0 h-screen bg-black text-white space-y-4">
        {[
          "Placing an Order",
          "Shipping and Delivery",
          "Returns and Exchanges",
          "Support and Contact",
        ].map((title) => (
          <div
            key={title}
            className={`cursor-pointer ${
              activeSection === title ? "font-bold border-l-2 pl-2" : ""
            }`}
            onClick={() => {
              const refs = {
                "Placing an Order": placingRef,
                "Shipping and Delivery": shippingRef,
                "Returns and Exchanges": returnsRef,
                "Support and Contact": supportRef,
              };
              refs[title].current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {title}
          </div>
        ))}
      </div>

      {/* Main Content */}
    
        <div className="flex-1 mt-20  pl-2 overflow-y-auto">

        <div ref={placingRef}>
          <div className="w-[720px] bg-zinc-800   p-5 m-4 text-white">
            Placing an Order
          </div>
          {placingOrderFaqs.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
              
            />
          ))}
        </div>

        <div ref={shippingRef}>
          <div className="w-[720px] bg-zinc-800 p-5 m-4 text-white">
            Shipping and Delivery
          </div>
          {shippingDelivery.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>

        <div ref={returnsRef}>
          <div className="w-[720px] bg-zinc-800 p-5 m-4 text-white">
            Returns and Exchanges
          </div>
          {returnsExchanges.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>

        <div ref={supportRef}>
          <div className="w-[720px] bg-zinc-800 p-5 m-4 text-white">
            Support and Contact
          </div>
          {supportContact.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
