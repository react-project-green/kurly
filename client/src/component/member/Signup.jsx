import React from 'react';
import '../../scss/member.scss'

export default function Signup() {
    return (
        <div className='signup-form'>
            <div className='signup-top'>
                <div className='signup-top1'><span>회원가입</span></div>
                <div className='signup-top2'><h5>*필수입력사항</h5></div>
            </div> {/* signup-top-end */}
            <hr />
            <div className='signup-body'>
                <form className= 'signup-form ' action="">
                    <ul>
                        <li>
                            <label className='signup_con_title'>아이디* </label>
                            <input type="text" 
                            placeholder='아이디를 입력해주세요'
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>비밀번호* </label>
                            <input type="password" 
                            placeholder='비밀번호를 입력해주세요'
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>비밀번호 확인* </label>
                            <input type="password" 
                            placeholder='비밀번호를 한번 더 입력해주세요'
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>이름* </label>
                            <input type="text" 
                            placeholder='이름을 입력해주세요'
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>이메일* </label>
                            <div className='email-full'>
                                <input type="text" 
                                placeholder='예:marketkurly'
                                className='email-address'/>
                                <span>@</span>
                                <select name="" id=""
                                className='email-domain'>
                                    <option value="">naver.com</option>
                                    <option value="">gmail.com</option>
                                    <option value="">hanmail.net</option>
                                    <option value="">kakao.com</option>
                                    <option value="">daum.net</option>
                                    <option value="">hotmaul.com</option>
                                    <option value="">yahoo.co.kr</option>
                                    <option value="">직접입력</option>
                                </select>
                            </div>
                        </li>
                        <li className='phone-full'>
                            <label>휴대폰</label>
                            <input type="number" 
                            placeholder='숫자만 입력해주세요' 
                            className='signup_input'/>
                            <button type='button' className='signup-botton'>인증번호받기</button>
                        </li>
                        <li>
                            <label>주소</label>
                            <button type="button"
                             className='address-botton'>주소검색</button>
                             <div>
                              <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
                            </div>
                        </li>
                        <li> 
                            <input type='radio' name='gender' value='male'/> 남자 
                            <input type="radio" name='gender' value='female'/> 여자
                            <input type="radio" name='gender' value='none' checked="checked"/> 선택 안함
                        </li>
                        <li  className='signup_birth'>
                            <label>생년월일</label>
                            <div>
                                <input type="number"placeholder='YYYY'/>
                                <span>/</span>
                                <input type="number" placeholder='MM'/>
                                <span>/</span>
                                <input type="number" placeholder='DD'/> 
                            </div>
                        </li>
                        <li>
                            <input type="radio" name="" />친구초대 추천인 아이디
                        </li>
                        <li>
                            <input type="text" 
                            placeholder='추천인 아이디 입력'
                            className='signup_input'/>
                            <button type='button'>아이디 확인</button>
                            <span>· 가입 후 7일 이내 첫 주문 배송 완료 시, 친구초대 적립금이 지급됩니다.</span>
                            <span>· ID입력시, 대소문자 및 띄어쓰기에 유의 부탁드립니다.</span>
                            <span>· 가입 이후 수정이 불가능합니다.</span>
                        </li>
                    </ul>{/* signup-body-end */}
                    <hr />
                    <div className='signup-footer'>
                        <ul>
                            <li>
                                <input type="radio" name="d" />
                                    <span>전체 동의합니다.</span>
                                    <span>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</span>
                            </li>
                            <li>
                                <input type="radio" name="" />
                                이용약관 동의(필수)
                                <a href="#">약관보기</a>
                            </li>
                            <li>
                            <input type="radio" name="" />
                                개인정보 수집·이용 동의(필수)
                                <a href="#">약관보기</a>
                            </li>
                            <li>
                            <input type="radio" name="" />
                                개인정보 수집·이용 동의(선택)
                                <a href="#">약관보기</a>
                            </li>
                            <li>
                                <input type="radio" name="" />
                                무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)
                                <ul>
                                    <li><input type="radio" name="" />SMS</li>
                                    <li><input type="radio" name="" />이메일</li>
                                </ul>
                            </li>
                            <li>
                            <input type="radio" name="" />
                                본인은 만 14세 이상입니다</li>
                        </ul>
                </div>{/* signup-footer-end */}
                <div className='button-box'>
                    <button type='button'>가입하기</button>
                </div>
                    </form>
            </div>
        </div>// signup-end
        
    );
}
