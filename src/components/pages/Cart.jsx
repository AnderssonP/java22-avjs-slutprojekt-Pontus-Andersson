import React from "react";
import { FcFullTrash } from "react-icons/fc";
import CartItems from "../productComponents/CartComponent"
import React, { useState, useEffect } from "react";
import DeleteFromFirebase from "../firebase/RemoveFromBasket";


export default function Cart() {
    const [cart, setCart] = useState([]);
    const cartUrl = "https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json";
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(cartUrl);
            const data = await response.json();
            if (data) {
              const cartArray = Object.entries(data).map(([id, cart]) => ({
                id,
                ...cart,
              }));
              setCart(cartArray);
            }
          };
      fetchData();
    }, []);
  
    const totalPrice = cart.reduce((acc, item) => {
      const price = parseInt(item.price);
      const quantity = item.amount || 1; 
      return acc + price * quantity;
    }, 0);

      async function remove(img, name, price, stock, amount) {
        await DeleteFromFirebase(img, name, price, stock, amount);
        alert("Dina produkter har tagits bort från kassan, gå gärna tillbaka och se om du hittar någon annan vara!")
        setCart([]);
        location.reload()
      }
      
      async function updateStock(id, img, name, price, stock, amount) {
        const productUrl = `https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Products/product${id}.json`;
      
        const productResponse = await fetch(productUrl);
        const productData = await productResponse.json();
      
        if (productData) {
          const productQuantity = amount || 1;
          const newStock = productData.stock - productQuantity;
      
          if (newStock < 0) {
            alert(`Det finns inte tillräckligt med ${productData.name} i lager för att slutföra köpet`);
            return;
          }
      
          await fetch(productUrl, {
            method: "PATCH",
            body: JSON.stringify({ stock: newStock }),
            headers: {
              "Content-type": "application/json",
            },
          });
        }
      
        await DeleteFromFirebase(img, name, price, stock, amount);
        setCart([]);
        alert("Ditt köp har gått igenom");
        location.reload();
      }
    return (
      <div>
        <h1 className="header">Kassa</h1>
        <div className="cart-border">
          {cart.map((item) => {
            return (
              <CartItems
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price +" kr"}
                amount={"antal: " + item.amount}
              />
              
            );
          })}
          <div className="checkout">
            <h1>Checkout</h1>
            <h2>Totalt pris: {totalPrice} kr</h2>
            <p>Förnamn</p>
            <p>Efternamn</p>
            <p>Adress</p>
            <button onClick={() => cart.map((item)=>updateStock(item.id, item.img, item.name, item.price, item.stock, item.amount)) } className="">Genomför köp</button>
            <button onClick={() => remove(<CartItems/> )} className="trash"><FcFullTrash/></button>
          </div>
        </div>
      </div>
    );
  }
  