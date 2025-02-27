import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";

export default function MypageCoupon() {
    return (
        <>
            <div>
                <div className='member-my-right-title'>쿠폰 <p><FaPlus /> 쿠폰등록</p></div>
                <div className='member-coupon-box'>
                    <p>5,000원 할인</p>
                    <p>가입 감사 5천원 할인 쿠폰</p>
                    <p>컬리 상품 한정</p>
                    <p>2025년 3월 30일까지</p><span>쿠폰상세<GoChevronRight /></span>
                </div>
            </div>
            <div className='member-my-right-2'>
            </div>
        </>
    );
}

