import React, { useState } from 'react';

export default function MainPopUp() {
  const [ popUpClose, setPopUpClose ] = useState(true);

  const handleClick = () => {
    setPopUpClose(false);
  };

  return (
    <>
      {popUpClose &&
        <div className='pop_up_outline'>
          <div className='pop_up_content'>
            <p>
              <a href="https://www.kurly.com/shop/event/kurlyEventV2.php?lego=event/2023/0911/join/coupon">
                <img src="/images/commonImage/popup.jpg" alt="" />
              </a>
          </p>
          </div>
          <button type='button' className='pop_up_btn' onClick={handleClick}>닫기</button>
        </div>
      }
    </>
  );
}

