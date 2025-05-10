import React, { useEffect, useState } from "react";

const CountdownDisplay = ({ onTimeChange }) => {
  const [secondsPassed, setSecondsPassed] = useState(3590); 

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsPassed((prev) => {
        const next = +(prev + 0.1).toFixed(1);
        const reset = next >= 3610 ? 3590 : next;
        onTimeChange && onTimeChange(reset);
        return reset;
      });
    }, 100); 
    return () => clearInterval(timer);
  }, [onTimeChange]);

  const formatTime = (secs) => {
    const total = parseFloat(secs);
    const m = String(Math.floor(total / 60)).padStart(2, "0");
    const s = String(Math.floor(total % 60)).padStart(2, "0");
    const f = String(Math.floor((total % 1) * 10));
    return `${m}:${s}.${f}`;
  };

  return (
    <div style={{ marginTop: "60px", textAlign: "center" }}>
      <h3>⏱ 현재 연습 시간: {formatTime(secondsPassed)}</h3>
      <p style={{ fontSize: "16px", color: "#666" }}>
        ※ 정각(60:00.0)에 '연습 시작하기'를 눌러보세요!
      </p>
    </div>
  );
};

export default CountdownDisplay;