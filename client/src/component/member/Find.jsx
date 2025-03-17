import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Find() {
    const navigate = useNavigate();
    const [isFindId, setIsFindId] = useState(true); // 기본값 : 아이디 찾기
    const [formIdData, setFormIdData] = useState({ 'name': '', 'phone': '' }); // 아이디 찾기 폼 데이터
    const [formPwdData, setFormPwdData] = useState({ 'id': '', 'phone': '' }); // 비밀번호 찾기 폼 데이터
    const [message, setMessage] = useState(''); // 메시지를 저장할 상태
    const [isFormVisible, setIsFormVisible] = useState(true); // 폼의 표시 여부 상태
    const refs = {
        idRef: useRef(null),
        phoneRef: useRef(null),
        nameRef: useRef(null),
    };

    // 아이디 찾기 폼 데이터 처리
    const handleIdForm = (e) => {
        const { name, value } = e.target;
        setFormIdData({ ...formIdData, [name]: value });
    };

    // 비밀번호 찾기 폼 데이터 처리
    const handlePwdForm = (e) => {
        const { name, value } = e.target;
        setFormPwdData({ ...formPwdData, [name]: value });
    };

    // 아이디 찾기 폼 제출 처리
    const handleFindIdSubmit = (e) => {
        e.preventDefault();
        const name = formIdData.name;
        const phone = formIdData.phone;
        
        let result = true;

        if (!name) {
            setMessage('이름을 입력해주세요!'); // 메시지를 상태로 저장
            refs.nameRef.current.focus();
            result = false;
        } else if (!phone) {
            setMessage('전화번호 입력해주세요!'); // 메시지를 상태로 저장
            refs.phoneRef.current.focus();
            result = false;
        } else {
            // Axios 요청 - 아이디 찾기
            axios
                .post('http://localhost:9000/member/findid', { name, phone })
                .then((response) => {
                    if (response.data.success) {
                        setMessage(`아이디: ${response.data.id}`); // 성공 메시지 상태로 저장
                    } else {
                        setMessage('해당 정보에 대한 아이디를 찾을 수 없습니다.'); // 실패 메시지 상태로 저장
                    }
                    setIsFormVisible(false); // 폼을 숨기기
                })
                .catch((error) => {
                    console.error('아이디 찾기 오류:', error);
                    setMessage('서버 오류. 다시 시도해 주세요.'); // 오류 메시지 상태로 저장
                    setIsFormVisible(false); // 폼을 숨기기
                });
        }
    };

    // 비밀번호 찾기 폼 제출 처리
    const handleFindPwdSubmit = (e) => {
        e.preventDefault();
        const { id, phone } = formPwdData;
        let result = true;

        if (!id) {
            setMessage('아이디를 입력해주세요!'); // 메시지를 상태로 저장
            if (refs.idRef.current) {
                refs.idRef.current.focus();
            }
            result = false;
        } else if (!phone) {
            setMessage('전화번호 입력해주세요!'); // 메시지를 상태로 저장
            if (refs.phoneRef.current) {
                refs.phoneRef.current.focus();
            }
            result = false;
        }

        if (result) {
            // Axios 요청 - 비밀번호 찾기
            axios
                .post('http://localhost:9000/member/findpwd', { id, phone })
                .then((response) => {
                    if (response.data.success) {
                        setMessage(`비밀번호: ${response.data.pwd}`); // 성공 메시지 상태로 저장
                    } else {
                        setMessage('해당 정보에 대한 비밀번호를 찾을 수 없습니다.'); // 실패 메시지 상태로 저장
                    }
                    setIsFormVisible(false); // 폼을 숨기기
                })
                .catch((error) => {
                    console.error('비밀번호 찾기 오류:', error);
                    setMessage('서버 오류. 다시 시도해 주세요.'); // 오류 메시지 상태로 저장
                    setIsFormVisible(false); // 폼을 숨기기
                });
        }
    };

    // 아이디 찾기 폼으로 전환
    const showFindIdForm = () => {
        setIsFindId(true);
        setMessage(''); // 폼 전환 시 메시지 초기화
        setIsFormVisible(true); // 폼 다시 보이기
    };

    // 비밀번호 찾기 폼으로 전환
    const showFindPasswordForm = () => {
        setIsFindId(false);
        setMessage(''); // 폼 전환 시 메시지 초기화
        setIsFormVisible(true); // 폼 다시 보이기
    };

    return (
        <div className="content">
            <div className="member_form_box">
                <div className="login_box">
                    <div className="member_title_box">
                        <div>
                            <button onClick={showFindIdForm}>아이디 찾기</button>
                            <button onClick={showFindPasswordForm}>비밀번호 찾기</button>
                        </div>
                        <span>{isFindId ? '아이디 찾기' : '비밀번호 찾기'}</span>
                    </div>

                    {/* 메시지 출력 */}
                    {message && (
                        <div className="message-box">
                            <p>{message}</p>
                        </div>
                    )}

                    {/* 폼 */}
                    {isFormVisible && (
                        isFindId ? (
                            <form onSubmit={handleFindIdSubmit}>
                                <ul>
                                    <li>
                                        <input
                                            className="loginform_input"
                                            type="text"
                                            name="name"
                                            value={formIdData.name}
                                            onChange={handleIdForm}
                                            placeholder="이름을 입력하세요"
                                            ref={refs.nameRef}
                                        />
                                    </li>
                                    <li>
                                        <input
                                            className="loginform_input"
                                            type="text"
                                            name="phone"
                                            value={formIdData.phone}
                                            onChange={handleIdForm}
                                            placeholder="전화번호를 입력하세요"
                                            ref={refs.phoneRef}
                                        />
                                    </li>
                                    <li>
                                        <button className="member_true_button" type="submit">
                                            확인
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        ) : (
                            <form onSubmit={handleFindPwdSubmit}>
                                <ul>
                                    <li>
                                        <input
                                            className="loginform_input"
                                            type="text"
                                            name="id"
                                            value={formPwdData.id}
                                            onChange={handlePwdForm}
                                            placeholder="아이디를 입력하세요"
                                            ref={refs.idRef}
                                        />
                                    </li>
                                    <li>
                                        <input
                                            className="loginform_input"
                                            type="text"
                                            name="phone"
                                            value={formPwdData.phone}
                                            onChange={handlePwdForm}
                                            placeholder="전화번호를 입력하세요"
                                            ref={refs.phoneRef}
                                        />
                                    </li>
                                    <li>
                                        <button className="member_true_button" type="submit">
                                            확인
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
