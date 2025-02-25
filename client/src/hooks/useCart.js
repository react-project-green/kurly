import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import axios from "axios";


export function useCart() {
    const { cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice } = useContext(CartContext);


        /******** 장바구니 전체 리스트 조회 ********/
    const getCartList = async() => {
            // const id = localStorage.getItem("user_id");
            const result = await axios.post("http://localhost:9000/cart/items");
            console.log('result data', result.data);
            setCartList(result.data);
        
        };
        
        return { getCartList };
}