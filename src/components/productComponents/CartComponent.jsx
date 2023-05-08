export default function CartItems({ id,img, name, price, stock, amount}){

    return(
        <div className="cart-Display">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price }</p>
            <p>{stock}</p>
            <p>{amount}</p>
        </div>
    );
}