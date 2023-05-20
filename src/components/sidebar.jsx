import React, { useState, useEffect } from "react";
import { MdAccountCircle, MdShoppingCart, MdHome, MdList, MdLogin } from "react-icons/md";
import { GiPirateHat } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import AuthDetails from "../authDetails";

export default function Sidebar({children}) {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
      const fetchCart = async () => {
        const response = await fetch(
          "https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
        );
        const data = await response.json();
        if (data) {
          const cartArray = Object.entries(data).map(([id, cart]) => ({
            id,
            ...cart,
          }));
          setCart(cartArray);
        }
      };
      fetchCart();
    }, []);
  
    useEffect(() => {
      const totalAmount = cart.reduce((acc, item) => {
        const amount = parseInt(item.amount);
        return acc + amount;
      }, 0);
      setCartTotal(totalAmount);
    }, [cart]);
  
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    const menuItems = [
      {
        path: "./myaccount",
        name: "Mitt konto",
        icon: <MdAccountCircle />,
      },
      {
        path: "./productpage",
        name: "Produkter",
        icon: <MdHome />,
      },
      {
        path: './cart',
        name: `Kassa (${cartTotal})`,
        icon: <MdShoppingCart />
      },
      {
        path: "./login",
        name: "Logga in",
        icon: <MdLogin />,
      },
      {
        path: "./createaccount",
        name: "Skapa konto",
        icon: <MdAccountCircle />,
      },
    ];
  
    return (
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top-section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              <GiPirateHat />
            </h1>
            <p style={{ display: isOpen ? "block" : "none" }} className="header"><AuthDetails/></p>
            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
              <MdList onClick={toggle} />
            </div>
          </div>
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    );
  }
  
