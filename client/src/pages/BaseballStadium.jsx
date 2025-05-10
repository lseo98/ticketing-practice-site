// src/pages/BaseballStadium.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import stadiumMap from "../assets/wizpark.png"; // 최신 이미지

function BaseballStadium() {
  const navigate = useNavigate();

  const handleClickCamping = () => {
    navigate("/baseballseats", { state: { zone: "캠핑존" } });
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
        관람 구역을 선택해주세요
      </h2>

      <div style={{ position: "relative", width: "600px", margin: "0 auto" }}>
        <img
          src={stadiumMap}
          alt="스타디움 좌석도"
          style={{ width: "100%", border: "1px solid #ccc" }}
        />
        <div
          onClick={handleClickCamping}
          style={{
            position: "absolute",
            top: "22%",   
            right: "9%",  
            width: "40px",
            height: "65px",
            backgroundColor: "rgba(255, 0, 0, 0.25)",
            border: "2px solid red",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 10,
            transform: "rotate(-35deg)" 
          }}
          title="캠핑존"
        />
      </div>
<div
  style={{
    position: "absolute",
    top: "30%",
    right: "30%",
    transform: "translateX(50%)",
    textAlign: "center",
    color: "#e60023",
    fontWeight: "bold",
    fontSize: "20px",
    zIndex: 11
  }}
>
  ⬅️<br />여기를<br />클릭하세요
</div>

      <p style={{
        marginTop: "20px",
        textAlign: "center",
        color: "#c62828",
        fontWeight: "bold"
      }}>
        📢 현재는 캠핑존만 예매 연습이 가능합니다.
      </p>
    </div>
  );
}

export default BaseballStadium;