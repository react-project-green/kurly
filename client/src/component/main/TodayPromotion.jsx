import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductThumb from '../detail/ProductThumb';

export default function TodayPromotion() {
  const [ todayPriceList, setTodayPriceList ] = useState([]);
  let rows = [];

  useEffect(()=>{
    axios.get('/data/mainProductList.json')
         .then((res)=> {setTodayPriceList(res.data)})
         .catch((error)=>console.log(error));
  },[]);
  
  rows = todayPriceList.filter((item) => item.isToday === true).slice(0,3);
  
  return (
    <div className='today_section'>
      <div className='today_title'>
        <h2>🍀일일특가</h2>
        <h3></h3>
        <p>망설이면 늦어요!</p>
      </div>
      <div className='today_product product_list'>
        {rows && rows.map((row)=>
           <ProductThumb product={row}/> 
        )}
      </div>
    </div>
  );
}

