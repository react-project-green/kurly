import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios';

export default function RecentlyViewItemSlider() {
  const [ recentlyItems, setRecentlyItem ] =useState([]);
  const sliderRef = useRef(null);
  
  const getLocalPid = () =>{
    try {
      const data = localStorage.getItem('viewProducts');
      return data ? JSON.parse(data) : []; 
    } catch (error) {
      console.log('로컬스토리지 파싱 오류',error);
      return [];
    }
  }

  const [pidArray, setPidArray] =useState(getLocalPid());

  useEffect(()=>{
    if(pidArray.length > 0){
      axios.post('http://localhost:9000/main/recentlyViewItem', {pidArray})
           .then((res)=> setRecentlyItem(res.data))
           .catch((error)=>console.log(error))
    }
  },[pidArray]);

  const settings= {
    infinite:false,
    vertical:true,
    verticalSwiping:true,
    slidesToShow:3,
    slidesToScroll:1,
    initialSlide: 0,
    arrows:true
  }
  
  const handlePrevClick = () =>{
    if(sliderRef.current){
     sliderRef.current.slickPrev();
    }
   };
   const handleNextClick = () =>{
     if(sliderRef.current){
       sliderRef.current.slickNext();
     }
   };
 

  return (
    (pidArray.length) > 0 ? (
      <div className='side_bar3'>
        <button className='custom-prev custom-arrow' onClick={handlePrevClick}>▲</button>
        최근 본 상품
        <div className='side_bar3_1'>
          <Slider ref={sliderRef} {...settings}>
            {recentlyItems && recentlyItems.map((item, i)=>(
              <div key={i}>
                <img src={item.upload_img} alt="recently view img" className='recently_img'/>
              </div>
            ))}
          </Slider>
        </div>
        <button className='custom-next custom-arrow' onClick={handleNextClick}>▼</button>
      </div>
    ) : (
      <></>
    )
  );
};


