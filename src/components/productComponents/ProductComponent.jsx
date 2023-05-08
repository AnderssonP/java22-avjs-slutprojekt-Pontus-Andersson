export default function Products({id, name, img, price, stock, handleAddToBasket }) {
  console.log('produkt id', id)

  return (
      <div className="productDisplay">
          <h1>{name}</h1>
          <img src={img} alt="" />
          <h2>Pris: {price}</h2>
          {stock > 0 ? (
              <div>
                  <p>Antal kvar: {stock}</p>
                  <button onClick={handleAddToBasket}>Lägg i kassan</button>
              </div>
          ) : (
              <p>Tyvärr slut i lager</p>
          )}
      </div>
  );
}
