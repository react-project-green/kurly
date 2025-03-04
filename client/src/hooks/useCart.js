import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import axios from "axios";


export function useCart() {
    const { cartList, setCartList, cartCount, setCartCount, setAllChecked, setUserInfo } = useContext(CartContext);


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
        setAllChecked(result.data);
    };

/********************************************
        결제창 회원 정보 조회 (cartList와 id 대조)
        사용처 : Order
********************************************/
const getUserInfo = async () => {
    const id = localStorage.getItem("user_id");
    const result = await axios.post("http://localhost:9000/member/mypage", { id });
      setUserInfo({
            name: result.data.name,
            phone: result.data.phone,
            address: result.data.address,
            email: result.data.email
        });
};


/********************************************
        장바구니 새로운 아이템 저장
        사용처 : Detail
********************************************/
    const saveToCartList = async (formData) => {
        const result = await axios.post("http://localhost:9000/cart/add", formData);
        if (result.data.result_rows) {
            setCartCount(cartCount + 1);
            getCartList();
        }
        return result.data.result_rows;

    }

/********************************************
        장바구니 아이템 수량 저장
        사용처 : Detail, Carts
********************************************/
    const updateCartList = async (no, type, qty) => {
        console.log("보낼데이터->", { no, type, qty });
        const result = await axios.put('http://localhost:9000/cart/updateQty', 
        { "no": no, 'type': type, 'qty' : qty });
        result.data.result_rows && getCartList();
        return result.data.result_rows;
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

    const deleteCartItem = async(no) => { 
        const result = await axios.delete("http://localhost:9000/cart/deleteItem",{data :{ "no": no}})
        // 삭제 성공 후 장바구니 리스트 재호출
        result.data.result_rows && getCartList();
}


/********************************************
        장바구니 결제금액 계산
        사용처 : Carts, useOrder
********************************************/

// const calculateTotalPrice = (cartList) => {
//     const totalPrice = cartList.reduce((sum, item) => {
//         const dcPrice = item.price * (1 - item.dc / 100);
//         return sum + dcPrice * item.qty;
//     }, 0 )
//     setTotalPrice(totalPrice);
// }; 


return { saveToCartList, updateCartList, getCartList, getCount, setCount, deleteCartItem, getUserInfo  };
}