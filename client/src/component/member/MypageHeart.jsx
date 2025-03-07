import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { BsCart2 } from "react-icons/bs";
import {CartContext} from '../../context/CartContext.js';
import {useCart} from '../../hooks/useCart.js';
import { useNavigate } from 'react-router-dom';



export default function MypageHeart() {
  const [ pidArray, setPidArray ] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const {cartList, wishListCnt, setWishListCnt} = useContext(CartContext);
  const {saveToCartList,updateCartList} = useCart();

  useEffect(()=>{
    const wishPidList = JSON.parse(localStorage.getItem('heartList') || '[]') 
    setWishListCnt(wishPidList.length);
    
    if(wishPidList.length > 0){
      axios.post('http://localhost:9000/main/wishList', {pidArray : wishPidList})
           .then((res)=>setPidArray(res.data))    
           .catch((error)=>console.log(error))    
    }else{
      setPidArray([]);
    }
  },[]);

    const handleDelete = (pid) => {
      const wishPidList = JSON.parse(localStorage.getItem('heartList') || '[]');
      const updatedPidList = wishPidList.filter((item) => item !== pid);
      localStorage.setItem('heartList', JSON.stringify(updatedPidList));
      setPidArray(prev => prev.filter((item)=> item.pid !== pid));
      setWishListCnt(updatedPidList.length);
    };
 
    const cartAddItem = (pid) => {
      const cartItem = {
        pid : pid, 
        qty:count
      };
      const findItem = cartList.find((item)=> item.pid === pid);
      if(findItem){
        const result = updateCartList(findItem.no, "increase", count);
        result && alert('장바구니에 추가되었습니다.');
      }else{
        const id = localStorage.getItem('user_id');
        const formData = {id:id, cartList: [cartItem]};
        const result = saveToCartList(formData);
        result && alert('장바구니에 추가되었습니다.');
      }
    };

    return (
        <>
            <div>
                <div className='member_my_right_title'>찜한 상품 <span>  찜한 상품은 최대 10개까지 저장됩니다.</span></div>
            </div>
            <div className='wish_list'>
                <div className='wish_list_cnt'>
                  전체 <strong>{wishListCnt}</strong>개
                </div>
                {pidArray && pidArray.map((item, i )=>(
                  <div className='wish_list_porduct1' key={i}>
                    <div className='wish_image' >
                      <img src={item.image_url} alt="product img" onClick={()=>navigate(`/goods/detail/${item.pid}`)}/>
                    </div>
                    <div className='wish_list_porduct2'>
                      <div className='wish_list_porduct_info'>
                        <div className='wish_list_porduct_info1'>
                          <div  onClick={()=>navigate(`/goods/detail/${item.pid}`)}>{item.name}</div>
                          <div className='wish_list_porduct_info2'>
                            <span>{item.dc}%</span>
                            <span>{item.discountedPrice}</span>
                            <span>{item.originalPrice}원</span>
                          </div>
                        </div>
                        <div className='wish_btn'>
                          <button type="button" className='wish_delete' onClick={() => handleDelete(item.pid)}>삭제</button>
                          <button type="button" className='wish_cart' onClick={()=>cartAddItem(item.pid)}><BsCart2 className='wish_icon' />담기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </>
    );
}

