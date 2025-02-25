import React, { useState, useRef, useContext  } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; 
import '../../scss/member.scss'
import Signup from './Signup.jsx';
import axios from 'axios';
import { validateLogin } from '../utils/funcValidate.js'; 
import { AuthContext } from '../auth/AuthContext.js';

export default function Login() {
    const navigate = useNavigate();
    const {isLogin, setIsLogin} = useContext(AuthContext);
    const [formData, setFormData] = useState({ 'id' : '', 'pwd' : '', })
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null) 
    }  
    
    const handleChangeForm = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log({ ...formData, [name]: value });
    };
    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        if(validateLogin(refs)){
            console.log('로그인 데이터==>', formData);

            //서버전송
            axios
            .post('http://localhost:9000/member/login', formData)
            .then(res=>{
                if(res.data.result_rows === 1){
                    alert("로그인 성공 홈으로 이동합니다.");
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user_id", formData.id);
                    setIsLogin(true);
                    navigate('/')
                } else {
                    alert("아이디와 비밀번호를 확인해주세요.")
                }
            })
            .catch(error=>{
                alert("로그인 실패. 서버 오류")
                console.log(error); 
            });
            
        }
    }
    return (
        <div className='content'> 
                <div className='member-form-box'>
            <div className='login-box'>
                <div className='member-title-box'>
                    <span>
                        로그인
                    </span>
                </div>
                    <form onSubmit={handleLoginSubmit}>
                        <ul>
                            <li>
                                <div>
                                    <input 
                                        className='loginform-input'
                                        type="text"
                                        name='id'
                                        placeholder='아이디를 입력해주세요'
                                        onChange={handleChangeForm} 
                                        ref={refs.idRef}
                                        />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <input 
                                        className='loginform-input'
                                        type="password"
                                        name='pwd'
                                        placeholder='비밀번호를 입력해주세요'
                                        onChange={handleChangeForm}   
                                        ref={refs.pwdRef}
                                        />
                                </div>
                            </li>
                            <li>
                                <div className='login-founder'>
                                <a href="#">아이디 찾기</a> 
                                <span>&gt;</span>
                                <a href="#">패스워드 찾기</a> 
                                <span>&gt;</span>
                                </div>
                            </li>
                            <li>
                                <button className='member-true-button'>로그인</button>
                            </li>
                            <li> 
                                <button className='member-none-button'>
                                    <Link to={'/member/signup'}>
                                    회원가입
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
                {/* form-box end */}
            </div> 
            {/* Loginbox end */}
        </div> // content end 
    );
} 