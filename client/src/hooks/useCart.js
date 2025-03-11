    import React, { useContext } from "react";
    import { CartContext } from "../context/CartContext.js";
    import { useCalculate } from "../hooks/useCalculate.js";
    import axios from "axios";

    export function useCart() {
        const { cartList, setCartList, cartCount, setCartCount, userInfo, setUserInfo, setCheckProduct } = useContext(CartContext);


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
                { "no": no, 'type': type, 'qty': qty });
            result.data.result_rows && getCartList();
            return result.data.result_rows;
        }


        /********************************************
                장바구니 전체 카운트 조회
                사용처 : Header
        ********************************************/
        const getCount = async () => {
            const id = localStorage.getItem("user_id");
            const result = await axios.post("http://localhost:9000/cart/count", { "id": id })
            setCartCount(result.data.count)
            return result.data.count;
        };



        /********************************************
            장바구니 카운트 초기화
            사용처 : Header
        ********************************************/

        const setCount = (value) => { setCartCount(value); }


        /********************************************
                장바구니 아이템 삭제
                사용처 : Carts
        ********************************************/

        const deleteCartItem = async (no) => {
            const result = await axios.delete("http://localhost:9000/cart/deleteItem", { data: { "no": no } })
            // 삭제 성공 후 장바구니 리스트 재호출
            result.data.result_rows && getCartList();
        }




        return { saveToCartList, updateCartList, getCartList, getCount, setCount, deleteCartItem};
    }