import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import axios from "axios";


export function useCart() {
    const { cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice } = useContext(CartContext);


/********************************************
        장바구니 전체 리스트 조회 
        사용처 : Carts
********************************************/
    const getCartList = async () => {
        const id = localStorage.getItem("user_id");
        // 로컬 스토리지에 id 저장되도록 업뎃 되면 수정 예정
        const result = await axios.post("http://localhost:9000/cart/items", { "id": id });
        setCartList(result.data);
        setCartCount(result.data.length);
    };


/********************************************
        장바구니 새로운 아이템 저장
        사용처 : Detail
********************************************/
    const saveToCartList = async (formData) => {
        const result = await axios.post("http://localhost:9000/cart/add", formData);
        
    }

/********************************************
        장바구니 아이템 수량 저장
        사용처 : Detail, Carts
********************************************/
    const updateCartList = async () => {
    }


/********************************************
        장바구니 전체 카운트 조회
        사용처 : Header
********************************************/
    const getCount = async () => {
        
        
    };



/********************************************
 장바구니 카운트 초기화
 사용처 : Header
 ********************************************/

const setCount = () => { setCartCount();}


/********************************************
        장바구니 아이템 삭제
        사용처 : Carts
********************************************/

    const deleteCartItem = async() => { 

}


/********************************************
        장바구니 총 주문금액 계산하기
        사용처 : useOrder
********************************************/

    const calculateTotalPrice = () => {
    
}; 





return { saveToCartList, updateCartList, getCartList, getCount, setCount, deleteCartItem, calculateTotalPrice };
}