import React,{useRef, useState, useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { VscBell } from "react-icons/vsc";

import ProductInfo from '../component/detail/ProductInfo.jsx';
import DetailInfo from '../component/detail/DetailInfo.jsx';
import ReviewInfo from '../component/detail/ReviewInfo.jsx';
import InquireInfo from '../component/detail/InquireInfo.jsx';
import CartBottom from '../component/detail/CartBottom.jsx';

import axios from 'axios';
import '../scss/detail.scss';

export default function Detail({cartInfo}) {
  
    const refs = {
        tab1Ref:useRef(null),
        tab2Ref:useRef(null),
        tab3Ref:useRef(null),
        tab4Ref:useRef(null) 
    }
    const tabRefs = {
        nav1Ref:useRef(null),
        nav2Ref:useRef(null),
        nav3Ref:useRef(null),
        nav4Ref:useRef(null)
    }
    const [count, setCount] = useState(1);
    let { pid } = useParams();
    const [product, setProduct] = useState({});
    const btmCartRef = useRef(null);
    const [btnCheck, setBtnCheck] = useState(false);
    const [offset,setOffset] = useState([]);

    // tab nav click event
    const navClass = (ref) => {
        let children = ref.current && ref.current.parentElement ? ref.current.parentElement.children : [];

        for(let tab of children){
            tab.classList.remove('on');
        }
        ref.current.classList.add('on');
    }
    const tabActive = (ref, target) => {
        navClass(ref);
        if(target.current) target.current.scrollIntoView({behavior: "smooth", block: "start"});
    }

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

    useEffect(() =>{
        const updateOffsets = () => {
            setOffset([
                window.scrollY + refs.tab1Ref.current?.getBoundingClientRect().top,
                window.scrollY + refs.tab2Ref.current?.getBoundingClientRect().top,
                window.scrollY + refs.tab3Ref.current?.getBoundingClientRect().top,
                window.scrollY + refs.tab4Ref.current?.getBoundingClientRect().top
            ]);
        };

        setTimeout(updateOffsets,2000);
        
        const scrollCheck = () =>{
            if(window.scrollY < offset[0]){
                navClass(tabRefs.nav1Ref);       
            }else if(window.scrollY >= offset[0] && window.scrollY < offset[1]){
                navClass(tabRefs.nav1Ref);               
            }else if(window.scrollY >= offset[1] && window.scrollY < offset[2]){
                navClass(tabRefs.nav2Ref);
            }else if(window.scrollY >= offset[2] && window.scrollY < offset[3]){
                navClass(tabRefs.nav3Ref);
            }else if(window.scrollY >= offset[3] ){
                navClass(tabRefs.nav4Ref);
            }

            if(btmCartRef.current){
                if(window.scrollY > 400){
                    btmCartRef.current.classList.add('scroll');
                }else{
                    btmCartRef.current.classList.remove('scroll');
                }
            }
        }
        scrollCheck();
        
        window.addEventListener('scroll',scrollCheck);
    },[]);

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
        // 넘어가는 정보
        const addItem = {
            "pid": product.pid,
            "name": product.name,
            "brand": product.brand,
            "description": product.description,
            "originalPrice": product.originalPrice,
            "discountRate": product.discountRate,
            "discountedPrice":product.discountedPrice ,
            "specialPrice": product.specialPrice,
            "delivery": {
                "type": product.type,
                "details": product.details
                },
            "seller": product.seller,
            "packaging": product.packaging,
            "total_price": product.discountedPrice * count,
            "image_url": product.image_url,
            "addCount":count
        };   
        cartInfo(addItem);
    }

    return (
        <div>
            <div className="detail_area">
                <div className="inner">
                    <div className="top_info">
                        {/* left */}
                        <div className="img_area">
                            <div className="img">
                                <img src={product.image_url} alt={product.name} />
                                <div className="dc">+{product.discountRate} 쿠폰</div>
                                <div className="payback">페이백</div>
                            </div>
                            <div className="brand">
                                <div className="thumb"><img src={product.image_url} alt={product.brand} /></div>
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
                                <div className="heart"><GoHeart /></div>
                                <div className="bell"><VscBell /></div>
                                <div className="add_cart" onClick={cartAddItem}>장바구니 담기</div>
                            </div>
                        </div>
                        {/* right */}
                    </div>
                    <div className="detail_tap_area">
                        <nav>
                            <ul>
                                <li ref={tabRefs.nav1Ref} onClick={() => tabActive(tabRefs.nav1Ref,refs.tab1Ref)} className='on'>상품설명</li>
                                <li ref={tabRefs.nav2Ref} onClick={() => tabActive(tabRefs.nav2Ref,refs.tab2Ref)}>상세정보</li>
                                <li ref={tabRefs.nav3Ref} onClick={() => tabActive(tabRefs.nav3Ref,refs.tab3Ref)}>후기(1,234)</li>
                                <li ref={tabRefs.nav4Ref} onClick={() => tabActive(tabRefs.nav4Ref,refs.tab4Ref)}>문의</li>
                            </ul>
                        </nav>
                        <div className="tab_box">
                            {/* 1 상품설명 */}
                            <div ref={refs.tab1Ref}>
                                <ProductInfo detailImgs={product.info_imgs}/>
                            </div>
                            {/* 2 상세정보 */}

                            <div ref={refs.tab2Ref}>
                                <DetailInfo detailImgs={product.detail_imgs} />
                            </div>
                            {/* 3 상품 후기 */}
                            <div ref={refs.tab3Ref}>
                                <ReviewInfo src={product.image_url} name={product.name} />
                            </div>
                            {/* 4 상품 문의 */}
                            <div ref={refs.tab4Ref} >
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

