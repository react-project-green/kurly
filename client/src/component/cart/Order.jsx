import React from 'react';
import './cart.scss'

export default function Order() {
    return (
        <div className='cart-layout content'>
            <p className='cart-title'>주문서</p>
            {/* 주문상품 */}
            <div ><p className='order-title f20 w500 flex'>주문 상품</p></div>
            <div className='order-list'>
                <p>[KF365] 노르웨이 생연어회 200g (냉장) 외 2개 상품을 주문합니다.</p>
            </div>
            {/* 주문자 정보 */}
            <div ><p className='orderer-info order-title f20 w500 flex'>주문자 정보</p></div>
            <div className='orderer-info-content'>
                <div className='orderer-info-row flex'>
                    <span className='w500'>보내는 분</span>
                    <div>홍길동</div>
                </div>
                <div className='orderer-info-row flex'>
                    <span className='w500 aaa'>휴대폰</span>
                    <div>010-0000-0000</div>
                </div>
                <div className='orderer-info-row flex'>
                    <span className='w500'>이메일</span>
                    <div className='order-info-email'>
                        abcdef12@google.com
                        <div>

                        <p className='f12' style={{color:"#666666"}}>이메일을 통해 주문처리 과정을 보내드립니다.</p>
                        <p className='f12'style={{color:"#666666"}}>정보변경은 마이컬리  &gt; 개인정보 수정 메뉴에서 가능합니다.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}


/* 주문상품  컴포넌트 */
const OrderProducts = () => {

}

/* 주문자 정보 */
const OrdererInfo = () => {

}


const DeliveryInfo = () => {


}
