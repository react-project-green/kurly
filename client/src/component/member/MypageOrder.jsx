import React, { useState, useContext, useEffect } from 'react';
import MemberError from './MemberError.jsx';
import { useNavigate } from 'react-router-dom';

import { useCart } from "../../hooks/useCart.js";
import { useCalculate } from "../../hooks/useCalculate.js";
import { CartContext } from "../../context/CartContext.js";
import { AuthContext } from "../../component/auth/AuthContext.js";

export default function MypageOrder() {
    const { cartList, checkProduct, userInfo, cartCount } = useContext(CartContext);  // cartList를 먼저 가져옴
    const checkedList = cartList.filter(item => checkProduct.has(item.no));  // 그 후에 필터링

    const { totalPriceAll, totalPriceDc, totalPriceCal } = useCalculate();
    const navigate = useNavigate();
    const { isLogin } = useContext(AuthContext);

    if (!isLogin) {
        return <MemberError />;
    }

    return (
        <>
            <div>
                <div className='member_my_right_title'>주문내역</div>
                <div>
                    <label>주문번호:: </label>
                    <span> 20250307-56871567</span>
                </div>
                <div>
                    <div className='order-list-wrap'>
                        <div className='order-list-bar'></div>
                        <ul>
                            {checkedList.map(item => (
                                <li key={item.no}>
                                    <div className='order-item flex'>
                                        <img style={{ width: "56px", borderRadius: "10px" }} src={`http://localhost:9000/${item.upload_img}`} alt="" />
                                        <div className='order-item-text' >
                                            <p>{item.subject}</p>
                                            <p style={{ fontSize: "13px", color: "#bcc4cc" }}>{item.sub_desc}</p>
                                            <div className='flex'>

                                                <p className="product-price f16 w600">
                                                    {`${((item.price * (1 - item.dc / 100)) * item.qty).toLocaleString()}원`} </p>
                                                <p className='discount' style={{ fontSize: "13px", textDecoration: "line-through", color: "#bcc4cc" }}>{`${(item.price * item.qty).toLocaleString()}원`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='member_my_right_2'>
                <div className='order-summury-content' >
                    <div className='flex space-between pmfont1'>
                        <div>주문금액</div>
                        <div>
                            <span>{`${totalPriceCal.toLocaleString()}원`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}

