import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [wishListCnt, setWishListCnt ] = useState(0);
    const [checkProduct, setCheckProduct] = useState(new Set());
    const setAllChecked = (list) => {
        setCheckProduct(new Set(list.map(item => item.no)));
    }
    const [userInfo, setUserInfo] = useState({
        name: "",
        phone: "",
        address: "",
        email: ""
    });

   
    return (
        <CartContext.Provider value={{cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice, checkProduct, setCheckProduct, setAllChecked, userInfo, setUserInfo, wishListCnt, setWishListCnt }}> 
        {children}
        </CartContext.Provider>
    )

}
