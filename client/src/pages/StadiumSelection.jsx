import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stadiumImage from "../assets/wizpark.png";

function StadiumSelection() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleZoneClick = () => {
    setShowModal(true); 
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/seatselection"); 
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        등급/좌석 선택
      </h2>

      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          src={stadiumImage}
          alt="위즈파크 스타디움"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <div
          onClick={handleZoneClick}
          style={{
            position: "absolute",
            top: "22%",
            right: "10%",
            width: "80px",
            height: "80px",
            cursor: "pointer",
            border: "2px dashed #e60023",
            borderRadius: "8px",
            backgroundColor: "rgba(255,255,255,0.2)"
          }}
          title="위즈 캠핑존"
        />
      </div>

      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0,
          width: "100vw", height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "#fff", borderRadius: "10px",
            padding: "24px", width: "360px", textAlign: "center",
            lineHeight: "1.8"
          }}>
            <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>좌석 유형 선택</h3>
            <p><strong>자동배정</strong>: 선택된 영역과 상관없이 등급 내 연속된 좌석 선택<br />
               <strong>직접선택</strong>: 선택된 영역의 좌석 선택</p>
            <div style={{ margin: "20px 0", fontWeight: "bold", color: "#004080" }}>
              ⬛ 위즈 캠핑존(5층) - 0석
            </div>
            <button
              onClick={handleConfirm}
              style={{
                padding: "12px 20px",
                backgroundColor: "#222",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              직접선택
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StadiumSelection;