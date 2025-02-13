import React from 'react';
import { Link  } from 'react-router-dom'; 
import '../../scss/member.scss'
import Signup from './Signup.jsx';

export default function Login() {
    return (
        <div className='content'> 
                <div className='form-box'>
            <div className='login-box'>
                <div className='member-title-box'>
                    <span>
                        로그인
                    </span>
                </div>
                    <form>
                        <ul>
                            <li>
                                <div>
                                    <input 
                                        className='loginform-input'
                                        type="text"
                                        placeholder='아이디를 입력해주세요' />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <input 
                                        className='loginform-input'
                                        type="password"
                                        placeholder='비밀번호를 입력해주세요' />
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