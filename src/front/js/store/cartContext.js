import React, { createContext, useState } from 'react'; //importacion React

export const CartContext = createContext(); //creacion contexto para compartir el estado del carrito

export const cartProvider = ({ children }) => { //definicion de la funcion cartProvider con children como parametro
    const [cartItems, setCartItems] = useState([
        {   id: 1,
            name: 'PLATANILLO',
            description: 'Ground: Espresso\n1KG', 
            price: 46.7, 
            quantity: 1, 
            imageUrl: 'https://url-to-image-1'},  // Producto 1
        {   id: 2, 
            name: 'MUTHUTHUINI', 
            description: 'Ground: Café en grano\n250GR', 
            price: 16.5, 
            quantity: 1, 
            imageUrl: 'https://url-to-image-2' }   // Producto 2
        ]);

    const addItemToCart = (item) => { //funcion para agregar un item al carrito
        setCartItems(prevItems => { //actualiza el estado del carrito
            const existingItem = prevItems.find(i => i.id === item.id); //busca si el item ya esta en el carrito
            if (existingItem){ //si el item ya esta en el carrito
                return prevItems.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i); //actualiza la cantidad del item
            } else {
                return [...prevItems, {...item, quantity: 1}]; //si el item no esta en el carrito, lo agrega
            }
        });
    };

    const removeItemFromCart = (item) => { //funcion para remover un item del carrito
        setCartItems(prevItems => { //actualiza el estado del carrito
            const existingItem = prevItems.find(i => i.id === item.id); //busca si el item ya esta en el carrito
            if (existingItem && existingItem.quantity > 1){ //si la cantidad del item es mayor a 1
                return prevItems.map(i => i.id === item.id ? {...i, quantity: i.quantity - 1} : i); //actualiza la cantidad del item 
            }else {
                    return prevItems.filter(i => i.id !== item.id); //si la cantidad del item es 1, lo elimina del carrito
                }
        });

    };

    return (
        <CartContext.Provider value={{cartItems, addItemToCart, removeItemFromCart}}>
            {children}
        </CartContext.Provider> //retorna el contexto con los valores del carrito y las funciones para agregar y remover items
    );
};