import React, { useState, useContext } from 'react';
import MemberError from './MemberError.jsx';
import { useNavigate } from 'react-router-dom';
import { useCalculate } from "../../hooks/useCalculate.js";
import { AuthContext } from "../../component/auth/AuthContext.js";

export default function MypageOrder() {
    const [orderList, setOrderList] = useState([
        {
            brand: "[설화수]",
            img: "http://localhost:9000/upload_files/1.jpg",
            link:"/goods/detail/1",
            name: "자음 2종 세트 (자음수, 자음유액)",
            qty: "3",
            price: "126,000",
            tPrice: "378,000"
        },
        {
            brand: "[달바]",
            img: "http://localhost:9000/upload_files/2.jpg",
            link:"/goods/detail/2",
            name: "화이트 트러플 퍼스트 스프레이 세럼 100ml 2개 세트 (옐로우 미스트 세럼)(+마스크팩 1매 증정)",
            qty: "5",
            price: "34,086",
            tPrice: "170,430"
        },
        {
            brand: "[설화수]",
            img: "http://localhost:9000/upload_files/3.jpg",
            link:"/goods/detail/3",
            name: "자음 2종 세트 (자음수, 자음유액)",
            qty: "1",
            price: "95,200",
            tPrice: "95,200"
        }
    ]);

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
                <div className='member_order'>
                    <div className='member_order_num'>
                        <p>2025.03.07</p>
                        <label>주문번호:: </label>
                        <span> 65456871567</span>
                    </div>
                    <div className='member_order_border'></div>
                    <div>
                        <ul>
                            {orderList.map((item, index) => (
                                <li key={index} className='member_order_list'>
                                    <div className='member_order_detail' 
                                        onClick={()=>{
                                            navigate(`${item.link}`)
                                        }}
                                        >
                                        <img style={{ width: "70px", height:"auto", borderRadius: "10px" }} src={item.img} alt={item.name}/>
                                        <div className='member_order_sub'>
                                            <span>샛별배송</span>
                                            <p className='member_order_pname'>{item.name}</p>
                                            <div className='member_order_price'> 
                                                <p>{item.tPrice}원 </p>
                                                <span style={{margin:"0 5px 0 5px"}}>|</span>
                                                <span>{item.qty}개</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                </div>
                <div className='order-summury-content' style={{ width: "auto", borderRadius: "8px" }}>
                    <div className='flex space-between pmfont1 '>
                        <div><span>상품금액</span></div>
                        <div>
                            <span>643,630원</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}
