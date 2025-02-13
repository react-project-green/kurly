import React, { useState, useRef } from 'react';
import '../../scss/member.scss'

export default function Signup() {
    const [formData, setFormData] = useState({
        id: '',
        pwd: '',
        cpwd: '',
        cname: '',
        emailname: '',
        emaildomain: 'default',
        phone: '',
        birthy: '',
        birthm: '',
        birthd: '',
        gender: 'none',
        address: ''
      });
    

      const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const { pwd, cpwd } = formData;
    
        if (pwd !== cpwd) {
          alert('비밀번호가 일치하지 않습니다.');
        } else {
          console.log('폼 제출 완료!');
          console.log('이름:', formData.cname);
          console.log('이메일:', formData.emailname + '@' + formData.emaildomain);
          console.log('비밀번호:', pwd);
          console.log('휴대폰 번호:', formData.phone);
          // Add further form submission logic here (e.g., API call)
        }
      };
    
      
    return (
        <div className='content'>
            <div className='signup-body'>
            <div>
                <div className='signup-title'>회원가입</div>
                <div className='signup-sub-title'>*필수입력사항</div>
            </div> 
            <div className='member-signup-form'></div>
                <form className= 'signup-form'  onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label className='signup_con_title'>아이디* </label>
                            <input type="text" 
                            placeholder='아이디를 입력해주세요'
                            name='id'
                            onChange={handleChangeForm}
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>비밀번호* </label>
                            <input type="password" 
                            placeholder='비밀번호를 입력해주세요'
                            name='pwd'
                            onChange={handleChangeForm}
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>비밀번호 확인* </label>
                            <input type="password" 
                            placeholder='비밀번호를 한번 더 입력해주세요'
                            name='cpwd'
                            onChange={handleChangeForm}
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>이름* </label>
                            <input type="text" 
                            placeholder='이름을 입력해주세요'
                            name='cname'
                            onChange={handleChangeForm}
                            className='signup_input'/>
                        </li>
                        <li>
                            <label>이메일* </label>
                            <div className='email-full'>
                                <input type="text" 
                                placeholder='예:marketkurly'
                                name='emailname'
                                onChange={handleChangeForm}
                                className='email-address'/>
                                <span>@</span>
                                <select 
                                name="emaildomain"
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
                            <label>휴대폰</label>
                            <input type="number" 
                                name='phone'
                                onChange={handleChangeForm}
                                placeholder='숫자만 입력해주세요' 
                                className='signup_input'/>
                            <button type='button' className='signup-phone-botton'>인증번호받기</button>
                        </li>
                        <li>
                            <label>주소</label>
                            <button type="button"
                                name='address'
                             className='address-botton'>주소검색</button>
                              {/* <p> 배송지에 따라 상품 정보가 달라질 수 있습니다.</p> */} 
                        </li>
                        <li> 
                            <label>성별</label>
                            <input type='radio' name='gender' value='male'/> 남자 
                            <input type="radio" name='gender' value='female'/> 여자
                            <input type="radio" name='gender' value='none' checked="checked"/> 선택 안함
                        </li>
                        <li  className='signup_birth'>
                            <label>생년월일</label>
                            <div>
                                <input type="number"
                                name='birthy'
                                placeholder='YYYY'/>
                                <span>/</span>
                                <input type="number"
                                name='birthm'
                                 placeholder='MM'/>
                                <span>/</span>
                                <input type="number" 
                                name='birthd'
                                placeholder='DD'/> 
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
                        <div> 
                            <li>
                                <div>
                                    <label>이용약관동의</label>
                                </div>  
                            </li>
                            <li>
                                <input type="checkbox" name="d" />
                                <span>전체 동의합니다.</span>
                                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p> 
                            </li>
                                <li>
                                    <input type="checkbox" name="" />
                                    이용약관 동의(필수)
                                    <a href="#">약관보기</a>
                                </li>
                                <li>
                                <input type="checkbox" name="" />
                                    개인정보 수집·이용 동의(필수)
                                    <a href="#">약관보기</a>
                                </li>
                                <li>
                                <input type="checkbox" name="" />
                                    개인정보 수집·이용 동의(선택)
                                    <a href="#">약관보기</a>
                                </li>
                                <li>
                                    <input type="checkbox" name="" />
                                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)
                                        <div>
                                            <input type="checkbox" name="" /> <span>SMS</span>
                                            <input type="checkbox" name="" /><span>이메일</span> 
                                        </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="" />
                                        본인은 만 14세 이상입니다</li> 
                                <div className='button-box'>
                                    <button type="submit"
                                    className='member-true-button' 
                                    >가입하기</button>
                                </div>
                        </div>
                    </ul>{/* signup-body-end */} 
                </form>
            </div>
        </div>// signup-end
        
    );
}
