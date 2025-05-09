import React,{useContext} from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function ProductThumb({product}) {
    
    return (
        <div className="box">
            <Link key={product.pid} to={`/goods/detail/${product.pid}`}>
                <div className="thumb">
                    <img src={product.image_url} alt="" />
                    <div className="ban_top_left">{product.discountRate}</div>
                </div>
                <div className="product_detail_area">
                    <button type="button" className='cart'><BsCart2 className='icon' />담기</button>
                    <div className="info_txt">
                        <span>{product.name}</span>
                        <p>{product.description}</p>
                    </div>
                    <div className="discount">
                        <em>{product.originalPrice}</em>
                        <div><span>{product.discountRate}</span><strong>{product.discountedPrice}</strong></div>
                    </div>
                    {/* <div className="review_num"><HiOutlineChatBubbleLeftEllipsis className='icon' />999+</div> */}
                </div>
            </Link>
        </div>
    );
}

