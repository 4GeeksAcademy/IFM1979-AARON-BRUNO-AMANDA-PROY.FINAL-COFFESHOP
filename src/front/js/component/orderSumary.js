import React, { useContext } from 'react';  // Importamos React y useContext para usar el estado global del carrito
import { CartContext } from '../store/CartContext';  // Importamos el contexto del carrito

const OrderSummary = () => {  // Definimos el componente OrderSummary
  const { cartItems } = useContext(CartContext);  // Obtenemos los productos del carrito desde el contexto

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);  // Calculamos el precio total de los productos

  return (
    <div className="order-summary">  // Creamos un contenedor para el resumen del pedido
      <h2>Order Summary</h2>  // Título del resumen
      {cartItems.map((item) => (  // Iteramos sobre cada producto en el carrito
        <div key={item.id} className="summary-item">  // Mostramos cada producto en el resumen
          <p>{item.name}</p>  // Mostramos el nombre del producto
          <p>{item.price.toFixed(2)}€</p>  // Mostramos el precio del producto
        </div>
      ))}
      <div className="total">  // Mostramos el subtotal
        <p>Subtotal</p>
        <p>{totalPrice.toFixed(2)}€</p>  // Mostramos el total del carrito
      </div>
      <div className="shipping-methods">  // Opciones de envío o recogida
        <button>Envío</button>  // Botón para elegir envío
        <button>Recogida en Tienda</button>  // Botón para elegir recogida en tienda
      </div>
      <label>  // Checkbox para aceptar los términos y condiciones
        <input type="checkbox" /> Acepto los términos y condiciones
      </label>
      <button className="checkout-button">Proceed to Checkout</button>  // Botón para proceder al pago
    </div>
  );
};

export default OrderSummary;  // Exportamos el componente para su uso en otras partes del proyecto
