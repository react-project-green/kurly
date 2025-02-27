import React, { useState } from 'react';
import { CiMemoPad, CiGift, CiHeart, CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; 
import MypageOrder from './MypageOrder.jsx';
import MypageCoupon from './MypageCoupon.jsx';
import MypageHeart from './MypageHeart.jsx';

export default function Mypage() {
    const navigate = useNavigate();
    
    // 마이페이지 기본값
    const [activeTab, setActiveTab] = useState('order');
    
    // 메뉴 클릭마다 탭 변경 
    const handleMenuClick = (tab) => {
        setActiveTab(tab); 
    }

    return (
        <div className='member-content-outline'>
            <div className='member-content'>
                <div className='member-my-page'>
                    <div className='member-my-side'>
                        <div className='member-my-side-1'>
                            <div className='member-my-customer'>
                                <span className='shimmer-text'>반가워요!</span>
                                <span> member님!</span>
                            </div>
                            <div className='member-my-side-point'>
                                <div>
                                    <label>적립금</label>
                                    <label>  0원</label>
                                </div>
                                <div>
                                    <label>포인트</label>
                                    <label>  0원</label>
                                </div>
                            </div>
                        </div>
                        <div className='member-my-sand'></div>
                        <div className='member-my-side-2'>
                            <p>자주찾는 메뉴</p>
                            <div
                            className='member-click'>
                                
                                <div>
                                    <CiMemoPad size={30} />
                                </div>
                                <label
                                    onClick={() => handleMenuClick('order')}
                                >
                                    주문내역
                                </label>
                            </div>
                            <div
                                className='member-click'
                                onClick={() => handleMenuClick('coupon')}>
                                <div>
                                    <CiGift size={30} />
                                </div>
                                <label>
                                    쿠폰
                                </label>
                                <span>0</span>
                            </div>
                            <div
                                className='member-click'
                                onClick={() => handleMenuClick('heart')}>
                                <div>
                                    <CiHeart size={30} />
                                </div>
                                <label>
                                    찜한 상품
                                </label>
                                <span>0</span>
                            </div>
                            <div>
                                <div>
                                    <CiDeliveryTruck size={30} />
                                </div>
                                <label
                                className='member-click'>
                                    자주 구매
                                </label>
                            </div>
                        </div>
                        <div className='member-popup'>
                            <div>
                                <img
                                    onClick={() => navigate("/main/category/special")}
                                    src="https://product-image.kurly.com/hdims/resize/%5E%3E350x/cropcenter/1150x/quality/85/format/jpg/src/banner/da-banner/5b045588-641b-4276-b98c-27711d762d59.jpg"
                                    alt="" />
                            </div>
                        </div>
                        <div className='member-my-side-3'>
                            <div>
                                <p>내 정보 관리</p>
                                <div>
                                    <label>개인정보 수정
                                    </label>
                                </div>
                                <div>
                                    <label>1:1문의
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='memever-my-right'>
                        <div className='member-my-right-1'>
                            {/* 노출되는 값 */}
                            {activeTab === 'order' && <MypageOrder />}
                            {activeTab === 'coupon' && <MypageCoupon />}
                            {activeTab === 'heart' && <MypageHeart />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
