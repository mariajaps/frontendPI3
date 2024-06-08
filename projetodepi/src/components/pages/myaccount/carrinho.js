import React from 'react';
import { useCart } from '../../../CartContext';
// import from app.css

function Carrinho() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleFinalizarCompra = () => {
    // Lógica para processar a compra
    alert('Compra finalizada com sucesso!');
    clearCart(); 
  };

  return (
    <div className="cart">
      <h2>MEU CARRINHO</h2>
      {cart.length === 0 ? (
        <p className='empty-cart'>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3 className='name-product'>{item.name}</h3>
                  <p className='price-product'>{item.price}</p>
                  <button onClick={() => removeFromCart(item)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Limpar Carrinho</button>
          <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
