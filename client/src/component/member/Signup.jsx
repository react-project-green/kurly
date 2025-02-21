import React, { useState, useRef } from 'react';
import '../../scss/member.scss'

export default function Signup() {
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
        cpwd: '',
        cname: '',
        emailname: '',
        emaildomain: '',
        phone: '',
        birthy: '',
        birthm: '',
        birthd: '',
        gender: 'none',
        address: ''
    });

    const refs = {
        "idRef": useRef(null),
        "pwdRef": useRef(null),
        "cpwdRef": useRef(null),
        "nameRef": useRef(null),
        "emailnameRef": useRef(null),
        "emaildomainRef": useRef("default"),
        "phoneRef": useRef(null),
        "addressRef": useRef(null)
    }

    const handleChangeForm = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { pwd, cpwd } = formData;

        if (pwd !== cpwd) {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            alert('폼 제출 완료!');
            console.log('폼 제출 완료!');
            console.log('이름:', formData.cname);
            console.log('이메일 주소:', formData.emailname);
            console.log('이메일 도메인:', formData.emaildomain);
            console.log('비밀번호:', pwd);
            console.log('휴대폰 번호:', formData.phone);
            console.log(isChecked)
            // Add further form submission logic here (e.g., API call)
        }
    };
    const [isChecked, setIsChecked] = useState(false);
    const [allCheck, setAllCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);
    const [persnalCheck, setPersonalCheck] = useState(false);
    const [persnalMktCheck, setPersonalMktCheck] = useState(false);
    const [marketingCheck, setMarketingCheck] = useState(false);
    const [ageCheck, setAgeCheck] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };
    const allBtnEvent = () => {
        if (allCheck === false) {
            setAllCheck(true);
            setUseCheck(true);
            setPersonalCheck(true)
            setPersonalMktCheck(true)
            setMarketingCheck(true);
            setAgeCheck(true);
        } else {
            setAllCheck(false);
            setUseCheck(false);
            setPersonalCheck(false);
            setPersonalMktCheck(false);
            setMarketingCheck(false);
            setAgeCheck(false);
        }
    };

    return (
        <div className='content'>
            <div className='signup-body'>
                <div>
                    <div className='signup-title'>회원가입</div>
                    <div className='signup-sub-title'><span>*</span>필수입력사항</div>
                </div>
                <div className='member-signup-form'></div>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label className='signup_con_title'>아이디<span>*</span> </label>
                            <input type="text"
                                placeholder='아이디를 입력해주세요'
                                name='id'
                                ref={refs.idRef}
                                onChange={handleChangeForm}
                                className='signup_input' />
                        </li>
                        <li>
                            <label>비밀번호<span>*</span></label>
                            <input type="password"
                                placeholder='비밀번호를 입력해주세요'
                                name='pwd'
                                ref={refs.pwdRef}
                                onChange={handleChangeForm}
                                className='signup_input' />
                        </li>
                        <li>
                            <label>비밀번호 확인<span>*</span> </label>
                            <input type="password"
                                placeholder='비밀번호를 한번 더 입력해주세요'
                                name='cpwd'
                                ref={refs.cpwdRef}
                                onChange={handleChangeForm}
                                className='signup_input' />
                        </li>
                        <li>
                            <label>이름<span>*</span> </label>
                            <input type="text"
                                placeholder='이름을 입력해주세요'
                                name='cname'
                                ref={refs.nameRef}
                                onChange={handleChangeForm}
                                className='signup_input' />
                        </li>
                        <li>
                            <label>이메일<span>*</span></label>
                            <div className='email-full'>
                                <input type="text"
                                    placeholder='예:marketkurly'
                                    name='emailname'
                                    ref={refs.emailnameRef}
                                    onChange={handleChangeForm}
                                    className='email-address' />
                                <span>@</span>
                                <select
                                    name="emaildomain"
                                    ref={refs.emaildomainRef}
                                    onChange={handleChangeForm}
                                    className='email-domain'>
                                    <option value="default">선택</option>
                                    <option value="naver">naver.com</option>
                                    <option value="google">gmail.com</option>
                                    <option value="hanmail">hanmail.net</option>
                                    <option value="kakao">kakao.com</option>
                                    <option value="daum">daum.net</option>
                                </select>
                            </div>
                        </li>
                        <li className='phone-full'>
                            <label>휴대폰<span>*</span></label>
                            <input type="number"
                                name='phone'
                                ref={refs.phoneRef}
                                onChange={handleChangeForm}
                                placeholder='숫자만 입력해주세요'
                                className='signup_input' />
                            <button type='button' className='signup-phone-botton'>인증번호받기</button>
                        </li>
                        <li>
                            <label>주소<span>*</span></label>
                            <button type="button"
                                name='address'
                                ref={refs.addressRef}
                                onChange={handleChangeForm}
                                className='address-botton'>주소검색</button>
                            {/* <p> 배송지에 따라 상품 정보가 달라질 수 있습니다.</p> */}
                        </li>
                        <li>
                            <label>성별</label>
                            <div className='signup_gender'>
                                <input type='radio' name='gender' value='male' /> 남자
                                <input type="radio" name='gender' value='female' /> 여자
                                <input type="radio" name='gender' value='none' defaultChecked="checked" /> 선택 안함
                            </div>
                        </li>
                        <li className='signup_birth'>
                            <label>생년월일</label>
                            <div>
                                <input type="number"
                                    name='birthy'
                                    placeholder='YYYY' />
                                <span>/</span>
                                <input type="number"
                                    name='birthm'
                                    placeholder='MM' />
                                <span>/</span>
                                <input type="number"
                                    name='birthd'
                                    placeholder='DD' />
                            </div>
                        </li>
                        <li>
                            <div className='member-additional'> </div>
                            {/* <label>추가입력사항</label>
                            <input type="radio" name="" />친구초대 추천인 아이디
                        </li>
                        <li>
                            <input type="text" 
                            placeholder='추천인 아이디 입력'
                            className='signup_input'/>
                            <button type='button' className='member-id-founder'>아이디 확인</button>
                        </li>
                        <li>
                            <div className='member-additional'>
                                <p>· 가입 후 7일 이내 첫 주문 배송 완료 시, 친구초대 적립금이 지급됩니다.</p>
                                <p>· ID입력시, 대소문자 및 띄어쓰기에 유의 부탁드립니다.</p>
                                <p>· 가입 이후 수정이 불가능합니다.</p>
                            </div> */}
                        </li>
                        <div className='signup-bottom'>
                            <div className='signup-bottom-title'>
                                <label>이용약관동의</label>
                            </div>
                            <div className="signup-notic">
                                <div className="control-container">
                                    <div className="label-box">
                                        <label className='member-radio' >
                                            <input type="checkbox"
                                                checked={allCheck}
                                                onChange={allBtnEvent}
                                                className='radio-input' />
                                            <div className='radio-btn'>
                                                {/* 라디오버튼 체크x */}
                                                <svg className={`icon unchecked ${allCheck ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                {/* 라디오버튼 체크o */}
                                                <svg className={`icon checked ${allCheck ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
                                        </label>
                                        <label className='member-radio-title'>전체 동의합니다.</label>
                                    </div>
                                    <p className='signup-notic-sub'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                </div>

                                <div className="control-container">
                                    <label className='member-radio' >
                                        <input type="checkbox"
                                            checked={useCheck}
                                            onChange={handleRadioChange}
                                            className='radio-input' />
                                        <div className='radio-btn'>
                                            {/* 라디오버튼 체크x */}
                                            <svg className={`icon unchecked ${useCheck ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            {/* 라디오버튼 체크o */}
                                            <svg className={`icon checked ${useCheck ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </label>
                                    <label>이용약관 동의(필수)<a href="#" className='signup-link'>약관보기</a></label>

                                </div>

                                <div className="control-container">
                                    <label className='member-radio' >
                                        <input type="checkbox"
                                            checked={persnalCheck}
                                            onChange={handleRadioChange}
                                            className='radio-input' />
                                        <div className='radio-btn'>
                                            {/* 라디오버튼 체크x */}
                                            <svg className={`icon unchecked ${persnalCheck ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            {/* 라디오버튼 체크o */}
                                            <svg className={`icon checked ${persnalCheck ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </label>
                                    <label>개인정보 수집·이용 동의(필수)<a href="#" className='signup-link'>약관보기</a></label>

                                </div>

                                <div className="control-container">
                                    <label className='member-radio' >
                                        <input type="checkbox"
                                            checked={persnalMktCheck}
                                            onChange={handleRadioChange}
                                            className='radio-input' />
                                        <div className='radio-btn'>
                                            {/* 라디오버튼 체크x */}
                                            <svg className={`icon unchecked ${persnalMktCheck ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            {/* 라디오버튼 체크o */}
                                            <svg className={`icon checked ${persnalMktCheck ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </label>
                                    <span className="check-icon" aria-hidden="true"></span>
                                    <label>개인정보 수집·이용 동의(선택)<a href="#" className='signup-link'>약관보기</a></label>

                                </div>

                                <div className="control-container">
                                    <label className='member-radio' >
                                        <input type="checkbox"
                                            checked={marketingCheck}
                                            onChange={handleRadioChange}
                                            className='radio-input' />
                                        <div className='radio-btn'>
                                            {/* 라디오버튼 체크x */}
                                            <svg className={`icon unchecked ${marketingCheck ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            {/* 라디오버튼 체크o */}
                                            <svg className={`icon checked ${marketingCheck ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </label>
                                    <span className="check-icon" aria-hidden="true"></span>
                                    <label>무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)</label>

                                </div>
                                <div className="control-container">
                                    <label className='member-radio' >
                                        <input type="checkbox"
                                            checked={ageCheck}
                                            onChange={handleRadioChange}
                                            className='radio-input' />
                                        <div className='radio-btn'>
                                            {/* 라디오버튼 체크x */}
                                            <svg className={`icon unchecked ${ageCheck ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd" fill="#fff"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            {/* 라디오버튼 체크o */}
                                            <svg className={`icon checked ${ageCheck ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </label>
                                    <span className="check-icon" aria-hidden="true"></span>
                                    <label>본인은 만 14세 이상입니다</label>

                                </div>
                            </div>
                        </div>
                        <div className='button-box'>
                            <button type="submit"
                                className='member-true-button'
                            >가입하기</button>
                        </div>
                    </ul>{/* signup-body-end */}
                </form>
            </div>
        </div>// signup-end

    );
}
