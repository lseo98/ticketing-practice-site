import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import stadiumImage from "../assets/wizpark.png"; 

const teams = [
  "KIA 타이거즈",
  "삼성 라이온즈",
  "LG 트윈스",
  "kt wiz",
  "SSG 랜더스",
  "한화 이글스",
];

const categories = [
  "홈", "야구", "축구", "핸드볼", "아이스하키", "농구", "배구", "e스포츠&게임", "이벤트", "PAYCO VIP ZONE"
];

function Baseball() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const remainingTime = location.state?.remainingTime;

  const offsetFromExact =
    remainingTime !== undefined ? +(remainingTime - 3600).toFixed(1) : null;

  const formatOffset = (offset) => {
    const abs = Math.abs(offset);
    const m = String(Math.floor(abs / 60)).padStart(2, "0");
    const s = String(Math.floor(abs % 60)).padStart(2, "0");
    const f = String(Math.floor((abs % 1) * 10));
    const sign = offset < 0 ? "-" : "+";
    return `${sign}${m}:${s}.${f}`;
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#fff" }}>
      <div style={{
        padding: "16px 40px",
        backgroundColor: "#fef7f7",
        borderBottom: "1px solid #ddd",
        color: "#c62828",
        fontSize: "22px",
        fontWeight: "bold"
      }}>
        📢 스포츠와 야구를 선택해주세요. 아래에서 구단을 클릭하면 예매 창이 뜹니다.
      </div>

      <header style={{
        borderBottom: "1px solid #ddd",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "30px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
            <span style={{ color: "#222" }}>티켓</span>
            <span style={{ color: "#e60023" }}>링크</span>
          </div>
          <div style={{ display: "flex", gap: "20px", fontSize: "16px", color: "#888" }}>
            <span>공연/전시</span>
            <span style={{ fontWeight: "bold", color: "#000" }}>스포츠</span>
            <span>여행</span>
          </div>
        </div>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            fontSize: "19px",
            width: "220px"
          }}
        />
      </header>

      <div style={{
        display: "flex",
        padding: "16px 40px",
        gap: "24px",
        fontSize: "20px",
        borderBottom: "1px solid #aaa",
        background: "#fff"
      }}>
        {categories.map((cat, idx) => (
          <span
            key={idx}
            style={{
              position: "relative",
              color: cat === "야구" ? "#e60023" : "#333",
              fontWeight: cat === "야구" ? "bold" : "normal",
              borderBottom: cat === "야구" ? "2px solid #e60023" : "none",
              paddingBottom: "4px"
            }}
          >
            {cat}
            <span style={{ color: "red", fontSize: "10px", marginLeft: "2px" }}>•</span>
          </span>
        ))}
      </div>

      <div style={{ padding: "40px 80px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>TEAM</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px"
        }}>
          {teams.map((team, idx) => {
            const isKt = team === "kt wiz";
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}    
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={isKt ? () => navigate("/games", { state: { team, remainingTime } }) : undefined}
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "16px 24px",
                  color: isHovered ? "#e60023" : "#004080",
                  cursor: "pointer",
                  minWidth: "160px",
                  textAlign: "center",
                }}
              >
                {team}
              </div>
            );
          })}
        </div>
      </div>

      {remainingTime !== undefined && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            left: 0,
            width: "100%",
            backgroundColor: "#e8f5e9",
            textAlign: "center",
            padding: "10px 0",
            fontWeight: "bold",
            color: "#2e7d32",
            borderTop: "1px solid #a5d6a7",
            zIndex: 999,
          }}
        >
          🎯 정각 기준 차이: {formatOffset(offsetFromExact)}
        </div>
      )}

      <div style={{
        marginTop: "330px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fef7f7",
        borderTop: "1px solid #eee",
        color: "#c62828",
        fontSize: "20px",
        fontWeight: "500"
      }}>
        ⚠️ 해당 연습 사이트는 <strong>kt wiz</strong> 홈 경기만 연습이 제공됩니다.
      </div>
    </div>
  );
}

export default Baseball;
