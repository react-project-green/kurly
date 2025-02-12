import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

export default function PromoBanner() {
  const [ bannerImgs, setBannerImg ] = useState([]);
  const [ currentSlide, setCurrentSlide ] = useState(0);

  const settings = {
    dots: true,
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500,
    autoplay: true,      // 자동 재생
    autoplaySpeed: 3500, // 자동 재생 속도
    slidesToShow: 1,    // 한번에 보여줄 슬라이드 개수
    slidesToScroll: 1,  // 한번에 넘어가는 슬라이드 개수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnFocus: true,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex) 
    // slick에서 제공되는 이벤트 파라미터
    // 슬라이드가 bannerImgs의 인덱스 순서에 따라 렌더링  bannerImgs[currentSlide]
  };

  useEffect(()=>{
    axios.get('/data/main.json')
         .then((res)=>setBannerImg(res.data["banner_img"]))
         .catch((error)=>console.log(error));
  },[]);

  return (
    <div className='promotion_banner'>
      <div className='main_banner'>
          <div className='promo_section'> 
           <Slider {...settings}> 
            {bannerImgs && bannerImgs.map((banner)=>(
              <div className='promo_card' key={banner.num}>
                <Link>
                  <span>
                    <img src={banner.img} alt="banner_img" />
                  </span>
                </Link>
              </div> 
            ))}
           </Slider>
          <div className='pagenation'>
            { bannerImgs.length > 0 && `${currentSlide +1} / ${bannerImgs.length}`} 
          </div>
          </div>   
      </div>    
    </div>
  );
}

export const NextArrow = ({onClick})=>{
  return (  
    <button type='button' 
            className='promo_r_btn' 
            onClick={onClick}>
    </button>
  )};
  
const PrevArrow = ({onClick})=>{
  return(
    <button type='button' 
            className='promo_l_btn'
            onClick={onClick}>
    </button>
  )};
  
