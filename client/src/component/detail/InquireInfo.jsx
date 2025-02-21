import React,{useState} from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { MdClose } from "react-icons/md";

export default function InquireInfo({src, name}) {
    const [isTrue, setIsTrue] = useState(false);
    const [isTextarea, setIsTextarea] = useState(true);
    return (
        <>
        <div className="tab_inquire_info">
            <div className="tit_area"> 
                <strong>상품 문의</strong>
                <ul>
                    <li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                    <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내<a href="">1:1문의</a>에 남겨주세요.</li>
                </ul>
                <button type="button" onClick={()=>{setIsTrue(!isTrue)}}>문의하기</button>
            </div>

            <table>
                <colgroup>
                    <col style={{width:'660px'}}/>
                    <col style={{width:'100px'}}/>
                    <col style={{width:'150px'}}/>
                    <col style={{width:'100px'}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>답변상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, unde.</a></td>
                        <td>연*연</td>
                        <td>2025.01.03</td>
                        <td>답변완료</td>
                    </tr>
                </tbody>
            </table>
            <div className="paging">
                <button type="button"><SlArrowLeft className='icon' /><span>이전</span></button>
                <button type="button"><SlArrowRight className='icon' /><span>다음</span></button>
            </div>
        </div>

        { isTrue && <div className="inquire_area">
            <div className="box_area">
                <div className="tit">상품 문의하기<button type="button" onClick={() => setIsTrue(false)}><MdClose /></button></div>
                <div className="product">
                    <div className="thumb"> <img src={src} alt={name} /></div>
                    <div>{name}</div>
                </div>
                <form>
                    <div className="form_box">
                        <span>제목</span>
                        <div><input type="text" placeholder='제목을 입력해 주세요' /></div>
                    </div>
                    <div className="form_box">
                        <span>내용</span>
                        <div className='text_form'>
                            <textarea name="" id=""></textarea>
                            { isTextarea && <div class="textarea_info" onClick={()=>{setIsTextarea(!isTextarea)}}>
                                <strong>상품문의 작성 전 확인해 주세요</strong>
                                <ul>
                                    <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
                                    <li>해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
                                    <li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</li>
                                    </ul>
                                <strong>제품</strong>
                                <ul>
                                    <li>입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어 있습니다. (종 모양을 클릭하여, 재입고 알림 설정 가능)</li><li>제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등 제품 정보는 상세이미지 또는 상세정보에서 확인 가능합니다.</li></ul>
                                <strong>주문취소</strong>
                                <ul>
                                    <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
                                    <li>[입금확인] 단계 : [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소 가능</li>
                                    <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
                                    <li>생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의 양해 부탁드립니다.</li><li>비회원은 모바일 App 또는 모바일 웹사이트에서 [마이컬리 &gt; 비회원 주문 조회 페이지]에서 취소가 가능합니다.</li>
                                    <li>일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</li>
                                </ul>
                                <p>※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매 해주세요.</p>
                                <strong>배송</strong>
                                <ul>
                                    <li>주문 완료 후 배송 방법(샛별배송/하루배송)은 변경이 불가능합니다.</li>
                                    <li>배송일 배송시간 지정은 불가능합니다. (예약배송 포함)</li>
                                </ul>
                                <p>※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지 않도록 주의해 주시기 바랍니다.</p>
                            </div> }
                        </div> 
                    </div>
                    <div className="btns">
                        <button type='reset'>취소</button>
                        <button type='submit'>등록</button>
                    </div>
                </form>
            </div>
        </div>}
        </>
    );
}

