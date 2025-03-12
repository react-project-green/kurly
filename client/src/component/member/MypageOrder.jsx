import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../component/auth/AuthContext.js";
import { LuCopy } from "react-icons/lu";
import axios from 'axios';

export default function MypageOrder() {

    // AuthContext에서 로그인 상태(isLogin) 가져오기
    const { isLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const textRef = useRef(); // 주문 번호 텍스트를 복사할 때 사용할 ref

    const [orderList, setOrderList] = useState([]);
    const [totalPriceByTid, setTotalPriceByTid] = useState({}); // 각 주문 번호(tid)마다의 총 가격 저장

    useEffect(() => {
        if (isLogin) {
            const id = localStorage.getItem("user_id");

            axios
                .post('http://localhost:9000/member/order', { id })
                .then((res) => {
                    const orders = res.data; // 서버에서 받은 데이터
                    if (Array.isArray(orders)) {
                        setOrderList(orders); // 배열 형태로 설정

                        // 주문 목록을 순회하면서 tid별로 total_price 계산
                        const priceByTid = orders.reduce((acc, order) => {
                            // 주문 번호(tid)가 이미 존재하면 기존 가격에 추가, 없으면 새로운 값으로 시작
                            if (acc[order.tid]) {
                                acc[order.tid] += order.total_price;
                            } else {
                                acc[order.tid] = order.total_price;
                            }
                            return acc;
                        }, {});

                        setTotalPriceByTid(priceByTid); // 계산된 총 가격을 상태에 저장
                    } else {
                        console.error("서버 응답이 배열이 아닙니다:", orders);
                    }
                })
                .catch((error) => {
                    console.error("데이터 요청 실패:", error);
                });
        }
    }, [isLogin]); // useEffect가 로그인 상태(isLogin)가 변경될 때만 실행

    if (!isLogin) {
        navigate("/member/error");
    }

    // 텍스트 복사 함수
    const handleCopy = () => {
        const text = textRef.current.innerText;  // ref로 가져온 span의 텍스트
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('주문번호가 복사되었습니다!');
            })
            .catch((err) => {
                console.error('복사 실패: ', err);
            });
    };

    return (
        <div className='member_order_box'>
            <div className='member_my_right_title'>주문내역</div>
            {Array.isArray(orderList) && orderList.length > 0 ? (
                orderList.map((order) => (
                    <div key={order.tid} className='member_order' onClick={()=>navigate(`/goods/detail/${order.pid}`)}>
                        <div className='member_order_num'>
                            <p>{order.odate}</p>
                            <label>주문번호:: </label>
                            <span ref={textRef}>{order.tid}</span>
                            <button onClick={handleCopy} style={{ marginLeft: "10px" }}><LuCopy /></button>
                        </div>
                        <div className='member_order_border'></div>
                        <div>
                            <ul>
                                <li className='member_order_list'>
                                    <div className='member_order_detail'>
                                        <img style={{ width: "70px", height: "auto", borderRadius: "10px" }} src={order.upload_img} />
                                        <div className='member_order_sub'>
                                            <span>샛별배송</span>
                                            <p className='member_order_pname'>{order.subject}</p>
                                            <div className='member_order_price'>
                                                <p>{order.total_price}원</p>
                                                <span style={{ margin: "0 5px" }}>|</span>
                                                <span>{order.qty}개</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* 각 주문 번호별 총 가격 표시 */}
                        <div className='order-summury-content' style={{ width: "auto", borderRadius: "8px" }}>
                            <div className='flex space-between pmfont1'>
                                <div><span>총금액</span></div>
                                <div className='order_total_price'>
                                    {/* 해당 주문 번호(tid)의 총 가격을 표시 */}
                                    <span>{totalPriceByTid[order.tid] ? totalPriceByTid[order.tid].toLocaleString() : 0}원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className='member_order_box_false'>
                    <div>
                        <span style={{color: '#999999'}}> 주문내역이 없습니다. </span>
                    </div>
                </div>
            )}
        </div>
    );
}
