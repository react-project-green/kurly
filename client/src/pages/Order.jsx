import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/cart.scss';

import { useCart } from "../hooks/useCart.js";
import { useCalculate } from "../hooks/useCalculate.js";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../component/auth/AuthContext.js";

export default function Order() {

    const { cartList, checkProduct } = useContext(CartContext);
    const { totalPriceAll, totalPriceDc, totalPriceCal } = useCalculate();
    const { getCartList } = useCart();
    const { isLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            getCartList();
        } else {
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?")
            select ? navigate('/member/login') : navigate('/');
        }

    }, [isLogin])


    const checkedList = cartList.filter(item => checkProduct.has(item.no));

    /* radio button */
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };

    /* cartlist toggle */
    const [isToggled, setIsToggled] = useState(false)

    const toggleList = () => {
        setIsToggled(isToggled => !isToggled);
    };


    /* svg icons */
    const icons = [
        {
            label: "toggle",
            icon: (<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="#333" strokeWidth="2" strokeLinecap="square" transform="rotate(135 15.5 16.5)">
                    <path d="M11 12h9v9"></path>
                </g>
            </svg>)
        },
        {
            label: "fold-toggle",
            icon: (<svg width="30" height="30" viewBox="0 0 30 30">
                <defs>
                    <path id="7a02qqg3ja" d="M11 12h9v9"></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path d="M0 0h30v30H0z"></path>
                    <use stroke="#333" strokeWidth="2" strokeLinecap="square" transform="rotate(-45 15.5 16.5)" href="#7a02qqg3ja"></use>
                </g>
            </svg>)
        },
        {
            label: "reply",
            icon: (<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 5H0V10V11H1H6V10H1V5Z" fill="#ddd"></path></svg>)
        }
    ]

    console.log('결제창 카트리스트', checkedList);





    return (
        <div className='content order-wrap'>
            <p className='c-title '>주문서</p>
            {/* 주문상품 */}
            <div className='order-page-title-n space-between'>
                <p className='order-title f20 w500 flex'>주문 상품</p>
                <button type='button' onClick={() => { toggleList() }}>
                    {isToggled
                        ? (icons.find(icon => icon.label === "toggle")?.icon || "실패")
                        : (icons.find(icon => icon.label === "fold-toggle")?.icon || "실패")
                    }
                </button>
            </div>
            {/* <div className='order-list'> */}
            <div className={isToggled ? 'order-list' : 'hide-list'}>

                {isToggled ? (
                    <div className='order-list-wrap'>
                        <p className='f16 w600' style={{padding:"16px 0px 0px 16px"}} >샛별배송</p>
                        <div className='order-list-bar'></div>
                        <ul>
                            {checkedList.map(item => (
                                    <li key={item.no}>
                                    <div className='order-item flex'>
                                        <img style={{width : "56px", borderRadius:"10px"}} src={`http://localhost:9000/${item.upload_img
}`} alt="" />
                                        <div className='order-item-text' >
                                            <p>{item.subject}</p>
                                            <p  style={{ fontSize: "13px", color: "#bcc4cc" }}>{item.sub_desc}</p>
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

                ) : (
                    <p className='f16'>{checkedList[0]?.subject}</p>
                )}
            </div>
            {/* </div> */}
            {/* 주문자 정보 */}
            <div className='order-page-title flex'>
                <p className='f20 w500'>주문자 정보</p>
            </div>
            <div className='orderer-info-content'>
                <div className='orderer-info-row flex '>
                    <span className='w500 order-mt'>보내는 분</span>
                    <div className='flex110'>이름</div>
                </div>
                <div className='orderer-info-row flex'>
                    <span className='w500 order-mt'>휴대폰</span>
                    <div className='flex110'>번호</div>
                </div>
                <div className='orderer-info-row flex'>
                    <span className='w500 order-mt'>이메일</span>
                    <div className='flex110'>
                        {checkedList[0]?.phone}
                        <div>

                            <p className='f12' style={{ color: "#666666" }}>이메일을 통해 주문처리 과정을 보내드립니다.</p>
                            <p className='f12' style={{ color: "#666666" }}>정보변경은 마이컬리  &gt; 개인정보 수정 메뉴에서 가능합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 배송정보 */}
            <div className='order-page-title'>
                <p className='f20 w500'>배송정보</p>
            </div>
            <div className='delivery-content flex'>
                <span className='order-mt'>배송지</span>
                <div className='delivery-detail flex110'>
                    <span className='delivery-default'>기본배송지</span>
                    <p className>서울 강남구 강남대로 78길 8 한국빌딩 4층,8층</p>
                    <button className='w-btn2'>변경</button>
                </div>
            </div>
            <div className='delivery-content flex'>
                <span className='order-mt'>배송요청사항</span>
                <div className='delivery-detail flex110'>
                    <div>
                        <span>문앞</span>
                        <span className='line'></span>
                        <span>자유 출입 가능</span>
                    </div>
                    <div>홍길동, 010-0000-0000</div>
                    <button className='w-btn2'>수정</button>
                </div>
            </div>
            <div className='order-delivery-b'>
                {/* 결제창 아래 왼쪽 */}
                <div className='order-delivery-bl'>

                    <div className='order-page-title'>
                        <p className='f20 w500'>쿠폰</p>
                    </div>
                    <div className='delivery-content flex'>
                        <span className='order-mt'>쿠폰적용</span>
                        <div className='flex110'>
                            <div>
                                <button className='coupon1'>
                                    사용가능 쿠폰 1장 / 전체 1장
                                    <span></span>
                                </button>
                            </div>
                            <button>
                                <span className='f12' style={{ color: "rgb(95, 0, 128)" }}>쿠폰 사용 문의(카카오톡) </span>
                                <span className='move'></span>
                            </button>
                            <div className='coupon-event'>
                                <img src="https://product-image.kurly.com/banner/da-banner/3b9e207f-dc01-4120-b848-7c50969b8fcb.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* 컬리카드 시작 */}

                    <div className='order-page-title'>
                        <p className='f20 w500'>컬리카드 혜택</p>
                    </div>
                    <div className='order-card-content flex'>
                        <span className='order-mt'>즉시할인</span>
                        <div className='flex110'>
                            <div className='order-card-row'>
                                <div><p>[컬리카드] 첫 결제 3만원 할인</p>
                                    <div>
                                        <label className='coupon-radio' >
                                            <input type="checkbox"
                                                checked={isChecked}
                                                onChange={handleRadioChange}
                                                className='radio-input' />
                                            <div className='radio-btn'>
                                                {/* 라디오버튼 체크x */}
                                                <svg className={`icon unchecked ${isChecked ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                {/* 라디오버튼 체크o */}
                                                <svg className={`icon checked ${isChecked ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
                                        </label>
                                        <span style={{ color: "rgb(153, 153, 153)" }}>-30,000원 즉시할인 적용</span>
                                    </div>
                                </div>
                                <button className='order-btn2'>카드발급</button>
                            </div>
                        </div>

                    </div>
                    {/* 적립금 시작 */}

                    <div className='order-page-title'>
                        <p className='f20 w500'>적립금 · 컬리캐시</p>
                    </div>
                    <div className='order-miles-content flex'>
                        <span className='order-mt'>적립금 · 컬리캐시</span>
                        <div className='flex110'>
                            <div className='miles-left'>
                                <div className='miles-left-row space-between'>

                                    <span>사용가능 잔액</span>
                                    <span>0원</span>
                                </div>
                                <div className='space-between miles-left-row'>
                                    <div>
                                        {icons.find(icon => icon.label === "reply")?.icon || "실패"}
                                        <span>적립금</span>

                                    </div>
                                    <span>0원</span>
                                </div>
                                <div className='order-miles-detail-row space-between'>
                                    <div>
                                        {icons.find(icon => icon.label === "reply")?.icon || "실패"}
                                        <span>컬리캐쉬</span>

                                    </div>
                                    <span>0원</span>
                                </div>
                            </div>
                            <div className='miles-input'>
                                <div>0</div>
                                <button>모두사용</button>
                            </div>
                            <div className='miles-description'>
                                <p>사용시 적립금이 먼저 소진됩니다.</p>
                                <p>컬리캐시 사용 시 컬리페이 가입이 필요합니다.</p>
                                <p>컬리캐시 사용 후 결제 잔액은 컬리페이 간편결제만 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                    {/* 결제 수단 */}
                    <div className='order-page-title'>
                        <p className='f20 w500'>결제수단</p>
                    </div>
                    <div className='order-miles-content flex'>
                        <span className='order-mt'>결제수단 선택</span>
                        <div className='flex110'>
                            <div className='order-payment-content'>
                                <div></div>
                            </div>
                        </div>
                    </div>


                    {/* 개인정보 및 결제 동의 */}
                    <div className='order-page-title'>
                        <p className='f20 w500'>개인정보 및 결제 동의</p>
                    </div>
                    <div className='privacy-policy'>
                        <div className='flex space-between'>
                            <span>개인정보 수집 이용 및 처리 동의</span>
                            <button>보기</button>
                        </div>
                        <div className='flex space-between'>
                            <span>결제대행 서비스 약관 동의</span>
                            <button>보기</button>
                        </div>
                        <div className='flex space-between'>
                            <span>전자지급 결제대행 서비스 이용약관 동의</span>
                            <button>보기</button>
                        </div>
                        <p className='f16 w500'>위 내용을 확인 하였으며 결제에 동의합니다.</p>
                    </div>
                    <p className='privacy-policy-des'>주문완료 상태일 경우에만 주문 취소가 가능하며, 상품 미배송 시 결제하신 수단으로 환불됩니다.</p>
                    <p className='privacy-policy-des'>컬리 내 개별 판매자가 등록한 오픈마켓 상품의 경우 컬리는 통신판매중개자로서 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
                    <div>
                        <button className='order-btn3'>49,790원 결제하기</button>
                    </div>



                </div> {/* 결제창 아래 왼쪽 끝 */}
                {/* 결제창 아래 오른쪽 */}
                <div className='order-delivery-br'>
                    <div className='sticky-order-summury'>
                        <span className='f20 sticky-order-title '>결제금액</span>
                        <div className='order-summury-content' >
                            <div className='flex space-between pmfont1'>
                                <div>주문금액</div>
                                <div>
                                    <span>49,790원</span>
                                </div>
                            </div>

                            <div>
                                <div className='flex space-between smallgrayf'>
                                    <div>
                                        {icons.find(icon => icon.label === "reply")?.icon || "실패"}
                                        <span>상품금액</span>

                                    </div>
                                    <span>59,900원</span>

                                </div>
                            </div>


                            <div>
                                <div className='flex space-between smallgrayf'>
                                    <div>
                                        {icons.find(icon => icon.label === "reply")?.icon || "실패"}
                                        <span>상품할인금액</span>

                                    </div>
                                    <span>-10,110원</span>

                                </div>
                            </div>

                            <div className='flex space-between pmfont2'>
                                <div>배송비</div>
                                <div>
                                    <span>0원</span>
                                </div>
                            </div>

                            <div className='flex space-between pmfont2'>
                                <div>쿠폰할인</div>
                                <div>
                                    <span>0원</span>
                                </div>
                            </div>

                            <div className='flex space-between pmfont2'>
                                <div>카드즉시할인</div>
                                <div>
                                    <span>0원</span>
                                </div>
                            </div>

                            <div className='flex space-between pmfont2'>
                                <div>적립금 · 컬리캐시</div>
                                <div>
                                    <span>0원</span>
                                </div>
                            </div>

                            <div>
                                <div className='flex space-between smallgrayf'>
                                    <div>
                                        {icons.find(icon => icon.label === "reply")?.icon || "실패"}
                                        <span>적립금</span>

                                    </div>
                                    <span>0원</span>

                                </div>
                            </div>

                            <div>
                                <div className='flex space-between smallgrayf'>
                                    <div>
                                        {icons.find(icon => icon.label === "reply")?.icon || "실패"}
                                        <span>컬리캐시</span>

                                    </div>
                                    <span>0원</span>

                                </div>
                            </div>

                            <div className='flex space-between order-total-sum'>
                                <div >최종결제금액</div>
                                <div>
                                    <span className='f22 w600'>49,790</span>
                                    <span>원</span>
                                </div>
                            </div>
                            <div className='f12 flex' style={{ color: "#8D4CC4", justifyContent: "flex-end" }}>컬리카드 결제 시 최대 2,490원 추가 적립

                            </div>

                        </div>
                        <img className='sticky-summury-img' src="https://product-image.kurly.com/banner/da-banner/3ba822e8-a989-46a4-8b6b-9ddbc3d1fadb.png" alt="" />
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
