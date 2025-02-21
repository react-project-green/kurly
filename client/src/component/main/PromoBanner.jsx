import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PromoBanner(props) {
  const navigate = useNavigate();

  return (
    <div className='promotion_img' onClick={()=>{navigate('/')}}>
       <img src={props.img} alt="banner_img" />
    </div>
  );
}

