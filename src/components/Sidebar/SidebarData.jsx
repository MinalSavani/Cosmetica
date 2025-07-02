import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "HOME",
    path: "/",
   
    cName: "nav-text",
  },
  {
    title: "CONTACT",
    path: "/contact",
  
    cName: "nav-text",
  },
  {
    title: "PRODUCT",
    path: "/product",
   cName: "nav-text",
  },
  {
    title: "SORT BY",
    // path: "/sortby",
    // cName: "nav-text",
    iconClosed:<AiIcons.AiOutlineDown/>,
    iconOpened:<AiIcons.AiOutlineUp/>,
  subMenu:[
      {title:"Jeans",path:"/jeans"},
      {title:"Shirts",path:"/shirts"},
      {title:"TShirts",path:"/tshirts"},
      {title:"Sneakers",path:"/sneakers"},
      {title:"Promotions",path:"/promotions"},
    ]
  },

  {
    title:"FAQ",
    path:"/faq",
    cName:"nav-text",
  },
  {
    title: "BLOG",
    path: "/blog",
    cName: "nav-text",
  },
  
];