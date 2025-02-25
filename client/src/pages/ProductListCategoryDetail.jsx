/* 2025.02.24 김다희 작성 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductThumb from '../component/detail/ProductThumb.jsx';

export default function ProductListCategoryDetail() {
  const [ test, setTest ] = useState([]);

  useEffect(()=> { 
    axios.post('http://localhost:9000/main/categories')
    .then((res) => {
       console.log('테스트테스트', res.data);  // 전체 데이터 확인
       setTest(res.data); 
      // if (Array.isArray(res.data) && res.data.length > 0) {
      //   // 첫 번째 아이템의 info_imgs를 사용
      //   // const firstItem = res.data[0].info_imgs[0];  
      //   // console.log('firstItem:', firstItem);
        
      //   setTest(firstItem.info_imgs || []);  
      // } else {
      //   console.error('응답 데이터가 비어 있음');
      //   setTest([]);
    //   }
    })
    .catch((error)=>console.log(error))
  },[]);
  console.log(test.length > 0 ? typeof test[0].image_url : "데이터 없음");
  console.log(test.length > 0 ? Array.isArray(test[0].info_imgs) : "데이터 없음");

  
  return (
    <div className='product_list'>
      <div className="inner">
        { test.map((item)=>(
          
          <ProductThumb  product={item} />
          // <>
          // <span>{item.pid}</span>
          // <span>{item.name}</span>
          // <span>{item.description}</span>
          // <span>{item.originalPrice}</span>
          // </>
        ))
        }
    </div>     
    </div>
  );
}

