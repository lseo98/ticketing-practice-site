import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./FinalOrderSuccess.css";

const FinalOrderSuccess = () => {
  const navigate = useNavigate(); 

  return (
    <div className="success-wrapper">
      <div className="success-box">
        🎉 예약 성공! 실전에서도 꼭 성공하시길 바랍니다!
      </div>

      <button
        onClick={() => navigate("/")}
        className="home-button"
        title="처음으로"
      >
        🏠 처음으로
      </button>
    </div>
  );
};

export default FinalOrderSuccess;