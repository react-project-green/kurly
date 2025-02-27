import React from 'react';
import { CiMemoPad, CiGift, CiHeart, CiDeliveryTruck } from "react-icons/ci";

export default function Mypage() {
    const memberClick = () => {
        alert("보유하고 있는 쿠폰이 없습니다")
    }
    return (
        <div className='member-content-outline'>
            <div className='member-content'>
                <div className='member-my-page'>
                    <div className='member-my-side'>
                        <div className='member-my-side-1'>
                            <div>
                                <span>반가워요!</span>
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
                            <div>
                                <div>
                                    <CiMemoPad size={30} />
                                </div>
                                <label>
                                    주문내역
                                </label>
                            </div>
                            <div
                                className='member-click'
                                onClick={memberClick}>
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
                                onClick={memberClick}>
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
                                <label>
                                    자주 구매
                                </label>
                            </div>
                        </div>
                        <div className='member-popup'>
                            <img src="https://product-image.kurly.com/hdims/resize/%5E%3E350x/cropcenter/1150x/quality/85/format/jpg/src/banner/da-banner/5b045588-641b-4276-b98c-27711d762d59.jpg" alt="" />
                        </div>
                        <div className='member-my-side-3'>
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
                    <div className='memever-my-right'>
                        <div className='member-my-right-1'>
                            <div className='member-my-right-title'>주문내역</div>
                            <div className='member-my-button'>
                                <button>3개월</button>
                                <button>6개월</button>
                                <button>1년</button>
                                <button>3년</button>
                            </div>
                        </div>
                        <div className='member-my-right-2'>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

