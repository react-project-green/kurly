import React, { useEffect, useState } from 'react';

const CountdownToMidnight = () => {
  const [ timeLeft, setTimeLeft ] = useState(calculateTime()); // 상태 변수에 남은 시간을 저장 (밀리초)
  
  const calculateTime = () =>{    // 남은 시간을 밀리초 단위로 계산하는 함수
   const now = new Date();
   const tomorrow = new Date();

   tomorrow.setDate(now.getDate() +1);
   tomorrow.setHours(0,0,0,0);

   return tomorrow - now;
  };

  useEffect(()=>{
    const timer = setInterval(()=>{calculateTime()},1000);
    return ()=>{calculateTime(timer)};
  },[]);

  // const second = 

  return (
    <div>

    </div>  
  )
}
export default CountdownToMidnight;
