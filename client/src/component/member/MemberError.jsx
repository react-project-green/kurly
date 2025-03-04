import React from 'react';
import { Link } from 'react-router-dom';


export default function MemberError() {
    return (
        <div className='content'>
            <div className='member-form-box'>
                <div className='login-box'>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/ad0bd6106586491.Y3JvcCw4MDgsNjMyLDAsMA.png"
                        alt="Welcome to Kurly" style={{ margin: "50px 0px 50px 0px" }} /> 
                    <div style={{ marginLeft: "50px" }}>
                        <button className='member-true-button'>
                            <Link to={'/member/login'} style={{ color: "#ffff" }} >
                                로그인
                            </Link>
                        </button>
                        <button className='member-none-button'>
                            <Link to={'/member/signup'}>
                                회원가입
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

