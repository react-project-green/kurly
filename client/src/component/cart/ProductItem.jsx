import React from 'react';
import { useState } from 'react';

export default function ProductItem({ name, originalPrice, discountedPrice, img, packaging, icons,Packaging2, CheckBox }) {


    /* 장바구니 수량 카운트 */
    const [quanCount, setQuanCount] = useState(0);

    const deQuan = () => {
        if(quanCount > 0 ) {
            setQuanCount(quanCount - 1)
        }
    }

    const inQuan = () => {
        setQuanCount(quanCount + 1)
    }


    return (
        <>
              <div className="product-item">  {/* 패키징에 따른 아이템 1개 정보 */}
                        <div className='product-item-title'>
                            <CheckBox />
                            <p>{name}</p>
                            <button>
                            {icons.find(icon => icon.label === "xmark")?.icon || "실패"} 
                            </button>
                        </div>
                        <div className='product-bottom'>
                            <Packaging2 packaging={packaging} />
                            <div className='product-item-center'>
                                <img src={img} alt="상품 미리보기 이미지" />
                                <div className='product-item-center2'>
                                    <div>
                                        <p className="product-price f16 w600">
                                        {`${originalPrice.toLocaleString()}원`} </p>
                                        <p className='discount' style={{ fontSize: "13px", textDecoration: "line-through", color: "#bcc4cc" }}>{`${discountedPrice.toLocaleString()}원`}</p>
                                    </div>
                                    <div className='quantity-selector'>
                                        <button className='decrease' onClick={deQuan}>
                                        {icons.find(icon => icon.label === "decrease")?.icon || "실패"} 
                                            </button>
                                        <div className='quantitiy-count'>{quanCount}</div>
                                        <button className="increase" onClick={inQuan}> 
                                        {icons.find(icon => icon.label === "increase")?.icon || "실패"} 
            
                                        </button>
                                    </div>
            
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

