import React from 'react';
import { OrderContext } from '../context/orderContext.js';
import { useContext } from 'react';
import { useCalculate } from './useCalculate.js';
import axios from 'axios';


export function useOrder() {

    const {totalPriceAll, totalPriceDc, totalPriceCal} = useCalculate();
    const { setOrderList, setUserInfo } = useContext(OrderContext);

    /* 전체 주문정보 가져오기 : getOrderList */
    const getOrderList = async() => {
        const id = localStorage.getItem('user_id');
        const checkedItems = JSON.parse(localStorage.getItem("checkedItems")) 

        const result = await axios.post('http://localhost:9000/order/all', {'id': id, 'checkedItems' : checkedItems});
        setOrderList(result.data);
        // setMember(result.data[0]);
        // useCalculate(result.data); 
        return result.data;
    }

    const saveToOrder = async (orderList, totalPrice, tid , type ) => {
        console.log('orderlist', orderList);
        console.log('orderprice', totalPrice);
        const id = localStorage.getItem('user_id');
        const formData = {
            "id" : id,
            "tid" : tid,
            "type" : type,
            "totalPrice" : totalPrice,
            "orderList" : orderList
        }
        

        const result = await axios.post('http://localhost:9000/order/add', formData);
        console.log('orderlist', result.data);
    }
    

        /********************************************
                결제창 회원 정보 조회
                사용처 : Order
        ********************************************/
                const getUserInfo = async () => {
                    const id = localStorage.getItem("user_id");
                    const result = await axios.post("http://localhost:9000/member/mypage", { id });
                    setUserInfo({
                        name: result.data.name,
                        phone: result.data.phone,
                        address: result.data.address,
                        emailname: result.data.emailname,
                        emaildomain: result.data.emaildomain
                    });
                    
                };
        




    return {getOrderList, saveToOrder , getUserInfo} ;
}

