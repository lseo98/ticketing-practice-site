import React from "react";
import "./FinalOrderSuccess.css"; // 이 안에 success-wrapper, success-box 정의돼 있어야 작동함

const FinalOrderSuccess = () => {
  return (
    <div className="success-wrapper">
      <div className="success-box">
        🎉 예약 성공! 실전에서도 꼭 성공하시길 바랍니다!
      </div>
    </div>
  );
};

export default FinalOrderSuccess;
