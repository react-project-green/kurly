import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function MainSpecialCategory() {
  const [specialEvent, setSpecialEvent] = useState([]);

  useEffect(()=> {
    axios.get('/data/main.json')
         .then((res)=>setSpecialEvent(res.data["special_category"]) )
         .catch((error)=>console.log(error))
  },[]);

  return (
    <div className='content_outline'>
      <ul className='content'>
        {specialEvent && specialEvent.map((event)=>(
          <li className='special_category'>
            <img src={event.img} alt="image" />
          </li>
        ))
        }
      </ul>  
    </div>
  );
}

