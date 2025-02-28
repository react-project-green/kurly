import React,{useRef, useState, useEffect, useContext} from 'react';
import WritePopup from './WritePopup.jsx';
import { LuThumbsUp } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import { IoMdClose } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import axios from 'axios';
import 'swiper/css';

export default function ReviewInfo({src, name, pid, setReviewCount}) {

    const [data, setData] = useState([]);
    const [dimiDisplay, setDimiDisplay] = useState(false);
    const [isTrue, setIsTrue] = useState(false);
    const [slideImgs, setSlideImgs] = useState([]);
    const [totalImages, setTotalImages] = useState([]);
    const [update, setUpdate] = useState(0);
    const [count, setCount] = useState({'index':'', 'count':''});

    useEffect(() => {
        axios.post('http://localhost:9000/review/getList',{'pid':pid})
                .then(res => {
                    setData(res.data);
                    setReviewCount(res.data.length);
                })
                .catch(err => console.log(err));
                
        axios.post('http://localhost:9000/review/getImages')
                .then(res => {
                    let newList = [];
                    for(let item of res.data){
                       newList.push(...item.images);      
                    } 
                    setTotalImages(newList);
                })
                .catch(err => console.log(err));
        
    },[update]);

    const checkIsTrue = (check) => {
            setIsTrue(check);
    }
    const openSlider = (index) => {
        setDimiDisplay(true);
        setSlideImgs(data[index].images);
    }
    const openTotalSlider = () => {
        setDimiDisplay(true);
        setSlideImgs(totalImages);
    }
    const orderByDate = () => {       
        axios.post('http://localhost:9000/review/getDateList',{'pid':pid})
                .then(res => setData(res.data))
                .catch(err => console.log(err));
    }
    const increment = (count, index) => {
        setCount({'index':index, 'count':count+1});
    }
    return (
        <div className="tab_review_info">
            <div className="tit_area"> 
                <strong>상품 후기</strong>
                <button type="button" onClick={()=>{setIsTrue(!isTrue)}}>등록하기</button>
            </div>
            <div className='thumb_list'>
                <ul>
                    {
                        totalImages && totalImages.map((img, i)=>
                            (i  < 8 ) ? <li onClick={openTotalSlider}><img src={img} alt="" /></li> :''
                        )
                    }

                </ul>
                {totalImages.length >= 8 && <a href="">+ 더보기</a>}
            </div>
            <div className="table_area">
                <div className='top'>
                    <div className="total">총 {data.length}개</div>
                    <div className="select">
                        <button type="button" className='active'>추천순</button>
                        <button type="button" onClick={orderByDate}>최근등록순</button>
                    </div>
                </div>
                <table>
                    <colgroup>
                        <col style={{width:'225px'}} />
                        <col style={{width:'auto'}}/>
                    </colgroup>
                    <tbody>
                        {
                            data && data.map((item,index)=>
                                <tr key={index}>
                                    <td>
                                        {/* <span className='icon_best'>베스트</span> */}
                                        <strong>{item.name}</strong>
                                    </td>
                                    <td>
                                        <div>{item.subject}</div>
                                        <p>{item.detail_txt}</p>
                                        <div className='thumb_list'>
                                            <ul>
                                                {item.images && item.images.map((img)=>
                                                    <li onClick={() => openSlider(index)}><img src={img} alt="" /></li>
                                                )}
                                            </ul>
                                            <a href="">+ 더보기</a>
                                        </div>
                                        <div className="t_btm_area">
                                            <div className="date">{item.date.substr(0,10)}</div>
                                            <button type="button" onClick={() => increment(item.count, index)}><LuThumbsUp/> 도움돼요 {count.index === index ? count.count : 0}</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
                <div className="paging">
                    <button type="button"><IoIosArrowBack /></button>
                    <button type="button"><IoIosArrowForward /></button>
                </div>
            </div>
            { dimiDisplay && <div className='dim_layer_area'>
                <div className="content_area">
                    <button onClick={() =>{setDimiDisplay(!dimiDisplay)}}><IoMdClose /></button>
                    <div className="tit">사진후기</div>
                    <div className="slide_area">
                    <div className="pop_slide">
                        <Swiper
                            modules = {[Navigation, Pagination]}
                            slidesPerView= {1}
                            centeredSlides = {true}
                            speed = {500}
                            loop = {true}
                            className = {"slider"}
                            navigation = {{nextEl: '.pop_slide .swiper-next', prevEl: '.pop_slide .swiper-prev'} }  
                        >
                            {slideImgs && slideImgs.map((img) =>
                                <SwiperSlide><a href='' target='_blank'><img src={img} alt="" /></a></SwiperSlide>
                            )}
                        </Swiper>
                        {
                            (slideImgs.length !== 1) &&
                            <>
                                <div className="swiper-prev"><MdArrowBackIos /></div>
                                <div className="swiper-next"><MdArrowForwardIos  /></div>
                            </>
                        }
                        
                    </div>
                    </div>
                </div>
            </div>}
            { isTrue && <WritePopup src={src} name={name} pid={pid} checkIsTrue={checkIsTrue} file="true" setUpdate={setUpdate} />}
        </div>
    );
}

