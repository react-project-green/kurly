import React, { useEffect, useState } from 'react';
import ProductThumb from '../detail/ProductThumb.jsx';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainProductListSlider() {
  const [ mainProductList, setMainProductList ] = useState([]);

  const settings = {
    infinite: false,  // 무한루프 비활성화
    speed: 500,       // 슬라이드 전환속도(0.5s)
    slidesToShow:4,   // 한번에 보여줄 슬라이드 개수
    slidesToScroll:4, // 한번에 스크롤할 슬라이드 새수
    initialSlide: 0,   // 첫 번째로 보이는 슬라이드 인덱스= 0 
    arrows: true
  }

  useEffect(()=> {
    axios.get('/data/mainProductList.json')
         .then((res)=> {
          console.log(res.data);
          setMainProductList(res.data);
        })
         .catch((error)=>console.log(error))
  },[]);

  return (
    <div className='section_product'>
      {/* <div className='slider-container section_product_list'> */}
        {/* <div className='product_list main_list'> */}
        <div className='product_list main_list'>
          <Slider  {...settings}>
              {mainProductList && mainProductList.map((row, i)=>(
                // <div className="product-slide" key={i}>
                  <ProductThumb key={i} product={row}/> 
                // </div>
              ))}
          </Slider>
        </div>
    </div>
  );
}
