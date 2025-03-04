import React, { useState, useEffect, useContext } from 'react';
import { CiMemoPad, CiGift, CiHeart, CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useAddress } from '../../hooks/useAddress.jsx';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import MemberError from './MemberError.jsx';

export default function MemberUpdate() {

        const { Postcode, data } = useAddress(); 

    // user의 기본값
    const [userName, setUserName] = useState('');

        // AuthContext에서 로그인 상태(isLogin)와 userId를 가져옴
        const { isLogin, setIsLogin, userType } = useContext(AuthContext);

    // 로그인 상태 확인 후 로그인 상태가 아닐 경우 오류 페이지 출력
    useEffect(() => {
        const id = localStorage.getItem("user_id");
        axios
            .post('http://localhost:9000/member/mypage', { 'id': id })
            .then(res => setUserName(res.data.name))
            .catch((error) => console.log(error));
    }, [])

    if (!isLogin) {
        return (
            <MemberError />
        )
    }

    return (
        <div className='content'>
            <form action="">
                <ul>
                    <li>
                        <label>이름</label>
                        <span>{`${userName}`}</span>
                    </li>
                    <li>
                        <label>아이디</label>
                        <span></span>
                    </li>
                    <li>
                        <label>비밀번호</label>
                        <input type="password" />
                    </li>
                    <li>
                        <label>이메일</label>
                        <input type="text" />
                        <select
                            name="emaildomain"
                            className='email_domain'>
                            <option value="default">선택</option>
                            <option value="naver">naver.com</option>
                            <option value="google">gmail.com</option>
                            <option value="hanmail">hanmail.net</option>
                            <option value="kakao">kakao.com</option>
                            <option value="daum">daum.net</option>
                        </select>
                    </li>
                    <li>
                        <label>주소<span>*</span></label>
                        <div >
                            <div className='address_zipcode'>
                                <input type="text" 
                                    name='zipcode' 
                                    value={data.zipcode}
                                    className='address_zipcode_input'
                                    placeholder='  우편번호' />
                                <div>
                                    <Postcode />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
}

