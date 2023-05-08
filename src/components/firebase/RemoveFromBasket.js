export default async function DeleteFromFirebase( img, name, price, stock, amount){
    const url = `https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/cart/.json`

    const deleteItems = {
      img: img,
      name: name,
      price: price,
      stock: stock,
      amount: amount
  }

  const options = {
      method: 'DELETE',
      body: JSON.stringify(deleteItems),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  }

  const response = await fetch(url, options);
  const data = await response.json();
//   console.log(data);
}