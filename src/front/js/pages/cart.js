import React, { useContext } from 'react';  // Importamos React y useContext para acceder al estado global
import CartItem from '../components/CartItem';  // Importamos el componente CartItem
import OrderSummary from '../components/OrderSummary';  // Importamos el componente OrderSummary
import { CartContext } from '../store/CartContext';  // Importamos el contexto del carrito

const Cart = () => {  // Definimos el componente Cart
  const { cartItems } = useContext(CartContext);  // Obtenemos los productos del carrito desde el contexto

  return (
    <div className="cart-page">  // Creamos un contenedor principal para la página del carrito
      <div className="cart-items-container">  // Contenedor para los productos del carrito
        {cartItems.length > 0 ? (  // Si hay productos en el carrito, los mostramos
          cartItems.map((item) => (  // Iteramos sobre los productos
            <CartItem key={item.id} item={item} />  // Mostramos cada producto usando el componente CartItem
          ))
        ) : (
          <p>El carrito está vacío.</p>  // Si no hay productos, mostramos un mensaje
        )}
        <button className="add-more-products">+ Add more products</button>  // Botón para agregar más productos (no funcional en este ejemplo)
      </div>
      <OrderSummary />  // Mostramos el resumen del pedido con el componente OrderSummary
    </div>
  );
};

export default Cart;  // Exportamos el componente Cart para su uso en otras partes del proyecto
