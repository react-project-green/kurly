import React, { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkProduct, setCheckProduct] = useState([]);

    

    return (
        <CartContext.Provider value={{cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice, checkProduct, setCheckProduct }}> 
        {children}
        </CartContext.Provider>
    )

}
