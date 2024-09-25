import React, { useContext } from 'react';  // Importamos React y useContext para usar el estado global del carrito
import { CartContext } from '../store/CartContext';  // Importamos el contexto del carrito

const CartItem = ({ item }) => {  // Definimos el componente CartItem que recibe un objeto 'item' como prop
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);  // Obtenemos las funciones del contexto del carrito

  return (
    <div className="cart-item">  // Creamos un contenedor para cada producto del carrito
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />  // Mostramos la imagen del producto
      <div className="cart-item-details">  // Contenedor para los detalles del producto
        <p>{item.name}</p>  // Mostramos el nombre del producto
        <p>{item.description}</p>  // Mostramos la descripción del producto
        <div className="quantity-controls">  // Controles para cambiar la cantidad de productos
          <button onClick={() => removeItemFromCart(item.id)}>-</button>  // Botón para reducir la cantidad o eliminar el producto
          <span>{item.quantity}</span>  // Mostramos la cantidad actual del producto
          <button onClick={() => addItemToCart(item)}>+</button>  // Botón para aumentar la cantidad del producto
        </div>
        <p>{(item.price * item.quantity).toFixed(2)}€</p>  // Mostramos el precio total del producto
      </div>
    </div>
  );
};

export default CartItem;  // Exportamos el componente para su uso en otras partes del proyecto
