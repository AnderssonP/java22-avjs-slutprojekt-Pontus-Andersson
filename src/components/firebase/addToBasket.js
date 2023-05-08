export default async function PutToFirebase(img, name, price, amount, id) {
    const cartUrl =
      "https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json";
    const response = await fetch(cartUrl);
    const data = await response.json();
  
    const existingCartItem = data ? data[`product${id}`] : null;
    const url = `https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart/product${id}.json`;
  
    if (existingCartItem) {
      const newAmount = existingCartItem.amount + amount;
      const updatedCartItem = {
        img: img,
        name: name,
        price: price,
        amount: newAmount,
        id: id,
      };
  
      const options = {
        method: "PUT",
        body: JSON.stringify(updatedCartItem),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } else {
      const newCartItem = {
        img: img,
        name: name,
        price: price,
        amount: 1,
        id: id,
      };
  
      const options = {
        method: "PUT",
        body: JSON.stringify(newCartItem),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    }
  }
  