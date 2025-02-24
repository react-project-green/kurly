import React, { useEffect, useState } from 'react';

const CountdownToMidnight = () => {
  // 남은 시간을 밀리초 단위로 계산하는 함수
  const calculateTimeLeft = () => {
    const now = new Date();
    const tomorrow = new Date();
    // 오늘 날짜에 +1 해서 내일 날짜로 만들고, 시간을 00:00:00으로 초기화
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    return tomorrow - now;
  };

  // 상태 변수에 남은 시간을 저장 (밀리초)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // 1초마다 남은 시간 업데이트
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 컴포넌트 언마운트시 타이머 클리어
    return () => clearInterval(timer);
  }, []);

  // 밀리초를 시, 분, 초로 변환
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60));

  return (
    <div className='count_down'>
      <p>
        🕛
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};

export default CountdownToMidnight;
