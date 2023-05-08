import '../../css/style.css'
import Products from '../productComponents/ProductComponent'
import { useEffect, useState } from "react";
import PutToFirebase from '../firebase/addToBasket';

export default function ProductPage() {
    const amount = 0;
    const [products, setProducts] = useState([]);
    const ProductUrl =
        "https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app/Products.json";
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(ProductUrl);
            const data = await response.json();
            const productArray = Object.entries(data).map(([id, product]) => ({
                id,
                ...product,
            }));
            setProducts(productArray);
        };
        fetchData();
    }, []);

    async function displayProduct(img, name, price, stock, amount, id) {
        await PutToFirebase(img, name, price, stock, amount, id);
        location.reload()
    }
    
    return (
        <div>
            <h1 className="header">Not pirated movies</h1>
            <div className="product-container">
                {products.map((product) => {
                    return (
                        <Products
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            stock={product.stock}
                            handleAddToBasket={() => {
                                if (product.stock > 0) {
                                  displayProduct(product.img, product.name, product.price, 1, product.id);
                                }
                              }}
                            disabled={product.stock <= 0}
                        />

                    );
                })}
            </div>
        </div>
    );
}

