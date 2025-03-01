import React,{useRef, useState, useEffect, useContext} from 'react';
import { useParams ,useNavigate } from "react-router-dom";
import { VscBell } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";

import ProductInfo from '../component/detail/ProductInfo.jsx';
import DetailInfo from '../component/detail/DetailInfo.jsx';
import ReviewInfo from '../component/detail/ReviewInfo.jsx';
import InquireInfo from '../component/detail/InquireInfo.jsx';
import CartBottom from '../component/detail/CartBottom.jsx';
import Nav from '../component/detail/Nav.jsx';
import {useCart} from '../hooks/useCart.js';
import {AuthContext} from '../component/auth/AuthContext.js';
import {CartContext} from '../context/CartContext.js';
import {useLogin} from '../hooks/useLogin.js';

import axios from 'axios';
import '../scss/detail.scss';

export default function Detail() {
    const {saveToCartList,updateCartList} = useCart();
    const {isLogin} = useContext(AuthContext);
    const {loginCheck} = useLogin();
    const {cartList} = useContext(CartContext);
    const navigate = useNavigate();
    const scrolls = [
        {id:'상품설명', ref:useRef(null)},
        {id:'상세정보', ref:useRef(null)},
        {id:'후기', ref:useRef(null)},
        {id:'문의', ref:useRef(null)},
    ];
    const topInfoRef = useRef(null);
    const [count, setCount] = useState(1);
    let { pid } = useParams();
    const [product, setProduct] = useState({});
    const btmCartRef = useRef(null);
    const [btnCheck, setBtnCheck] = useState(false);
    const [heart, setHeart] = useState(false);
    const [reviewCount, setReviewCount] = useState(0);
    
    // btm add cart btn
    const openCart = () => {
        if(btmCartRef.current){
            if(btnCheck === false){
                btmCartRef.current.classList.remove('scroll');
                btmCartRef.current.classList.add('active');
                return setBtnCheck(!btnCheck);
            }else{
                btmCartRef.current.classList.remove('active');
                btmCartRef.current.classList.add('scroll');
                return setBtnCheck(!btnCheck);
            }
        }
    }
    useEffect(() =>{
        axios.post('http://localhost:9000/product/detail',{'pid':pid})
                .then((res) => {
                    setProduct(res.data[0]);                                    
                })
                .catch((error) => console.log(error));
    },[]);

    useEffect(()=>{
        if(product.pid){   
            const checkArray = JSON.parse(localStorage.getItem('heartList')) || [];
            if(checkArray && product.pid){
                const samePid = checkArray.includes(product.pid);
                if(samePid) setHeart(true);
            }
            
        }
    },[product.pid]);

    useEffect(()=>{
        const pidArray = JSON.parse(localStorage.getItem('viewProducts')) || [];
        
        if(pidArray && product.pid){  
            const samePid = pidArray.includes(product.pid);
            if(!samePid){
                if(pidArray.length < 10){
                    pidArray.unshift(product.pid);
                }else{
                    pidArray.unshift(product.pid);
                    pidArray.pop();
                }
            }
        }
        localStorage.setItem('viewProducts', JSON.stringify(pidArray));   
        
    },[product.pid]); // pid

    // cart count
    const buttonCartCount = (type) => {
        if(type === '+'){
            (count === 10) ? setCount(10) : setCount(count + 1);   
        }else if(type === '-'){
            (count === 1) ? setCount(1) : setCount(count - 1);   
        }
    }
    // 장바구니 데이터
    const cartAddItem = () => {
        // 로그인 했을 때
        if(isLogin){
            const cartItem = {
                pid:product.pid,
                qty:count
            }
            console.log('cartItem',cartItem);

            // 카트 아이템에 같은 pid가 있는지 검색. 있으면 qty 수정. 없으면 추가.
            const findItem = cartList.find((item)=> item.pid === product.pid);
            if(findItem){
                const result = updateCartList(findItem.no, "increase", count);
                result && alert("장바구니에 추가되었습니다.")
                
            }else{
                const id = localStorage.getItem("user_id");

                // formdata 형식으로 db에 보내야해서 수정했어용
                // cartItem을 배열형식으로 보내서 서버로 map 돌릴 수 있어서
                // 테스트 때문에 수정했습니당ㅠㅠ
                const formData = { id: id, cartList: [cartItem] }
                const result = saveToCartList(formData);
                result && alert("장바구니에 추가되었습니다.")
            }
            
        }else{
            loginCheck();
        }
        
    }

    // 찜하기
    const handleAddHeart = () => {
        if(isLogin){
            let heartList =  JSON.parse(localStorage.getItem('heartList')) || [];
            const samePid = heartList.includes(product.pid);
            
            if(!samePid){
                heartList.unshift(Number(pid));       
                localStorage.setItem('heartList',JSON.stringify(heartList)); 
                setHeart(true);
            }else{
                const newArray = heartList.filter((item)=> item !== product.pid);
                localStorage.setItem('heartList',JSON.stringify(newArray)); 
                setHeart(false);
            }
        }else{
            loginCheck();
        }
        
    }  
    

    return (
        <div>
            <div className="detail_area">
                <div className="inner">
                    <div className="top_info" ref={topInfoRef}>
                        {/* left */}
                        <div className="img_area">
                            <div className="img">
                                <img src={`http://localhost:9000/${product.image_url}`} alt={product.name} />
                                <div className="dc">+{product.discountRate} 쿠폰</div>
                                <div className="payback">페이백</div>
                            </div>
                            <div className="brand">
                                <div className="thumb"><img src={`http://localhost:9000/${product.image_url}`} alt={product.brand} /></div> 
                                <div className="brand_info">
                                    <strong>브랜드관</strong>
                                    <span>{product.brand} &gt;</span>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* left */}

                        {/* right */}
                        <div className="detail_contents">
                            <div className="route">브랜드 | {product.brand} &gt;</div>
                            <div className="product_tit">
                                <strong>{product.name}</strong>
                                <span>{product.description}</span>
                            </div>
                            <div className="price"> 
                                <span className="dc">{product.discountRate}</span><strong>{product.discountedPrice}원</strong>
                            </div>
                            <div className="discount">첫 구매라면 10,000원 즉시 할인</div>
                            <div className="coupon">설 선물대전 {product.discountRate} 쿠폰 받기</div>
                            <ul>
                                <li>
                                    <span>배송</span>
                                    <div>
                                        {product.delivery?.type}
                                        <span className='smfont'>23시 전 주문 시 수도권/충청 내일 아침7시 전 도착<br />(그 외 지역 아침 8시 전 도착)</span>
                                    </div>
                                </li>
                                <li>
                                    <span>판매자</span>
                                    <div>컬리</div>
                                </li>
                                <li>
                                    <span>포장타입</span>
                                    <div>상온(종이포장)
                                        <span className='smfont'>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</span>
                                    </div>
                                </li>
                                <li>
                                    <span>상품선택</span>
                                    <div className='box_wrap'>
                                        <span class="product_name">{product.name}</span>
                                        <div className="count_box">
                                            <div className="count">
                                                <button type="button"onClick={()=>{buttonCartCount('-')}}>-</button>
                                                <div>{count}</div>
                                                <button type="button" onClick={()=>{buttonCartCount('+')}}>+</button>
                                            </div>
                                            <div className="price"><em>{product.originalPrice}</em><strong>{(product.dcPrice * count).toLocaleString()}원</strong></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="total_price"><span>총 상품금액:</span><strong>{(product.dcPrice * count).toLocaleString()}원</strong></div>
                            <div className="btns">
                                <div className="heart" onClick={handleAddHeart}><AiFillHeart className={heart ? 'on':''} /></div>
                                <div className="bell"><VscBell /></div>
                                <div className="add_cart" onClick={cartAddItem}>장바구니 담기</div>
                            </div>
                        </div>
                        {/* right */}
                    </div>
                    <div className="detail_tap_area">
                        <nav>
                            <Nav scrolls={scrolls} topInfoRef={topInfoRef} reviewCount={reviewCount} />
                        </nav>
                        <div className="tab_box">
                            {/* 1 상품설명 */}
                            <div ref={scrolls[0].ref}>
                                <ProductInfo detailImgs={product.info_imgs}/>
                            </div>
                            {/* 2 상세정보 */}

                            <div ref={scrolls[1].ref}>
                                <DetailInfo detailImgs={product.detail_imgs} />
                            </div>
                            {/* 3 상품 후기 */}
                            <div ref={scrolls[2].ref}>
                                <ReviewInfo src={product.image_url} name={product.name} pid={pid} setReviewCount={setReviewCount} />
                            </div>
                            {/* 4 상품 문의 */}
                            <div ref={scrolls[3].ref} >
                                <InquireInfo src={product.image_url} name={product.name} />  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btm_cart_area" ref={btmCartRef}>
                    <CartBottom product={product} openCart={openCart} buttonCartCount={buttonCartCount} cartAddItem={cartAddItem} count={count}/>
                </div>
            </div>
        </div>
    );
}

