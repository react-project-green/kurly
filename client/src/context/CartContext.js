import React, { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkProduct, setCheckProduct] = useState(new Set());
    const setAllChecked = (list) => {
        setCheckProduct(new Set(list.map(item => item.no)));
    }

    return (
        <CartContext.Provider value={{cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice, checkProduct, setCheckProduct, setAllChecked }}> 
        {children}
        </CartContext.Provider>
    )

}
