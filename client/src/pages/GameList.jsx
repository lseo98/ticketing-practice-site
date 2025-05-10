import React, { useState } from "react";
import BookingNoticeModal from "../pages/BookingNoticeModal";
import { useLocation, useNavigate } from "react-router-dom";
const mockGames = [
  {
    date: "05.11",
    day: "(일)",
    time: "14:00",
    home: "kt wiz",
    away: "롯데",
    title: "kt vs 롯데",
    place: "수원 케이티위즈파크",
    open: true
  },
  {
    date: "05.20",
    day: "(화)",
    time: "18:30",
    home: "kt wiz",
    away: "KIA",
    title: "kt vs KIA",
    place: "수원 케이티위즈파크",
    open: false,
    openDate: "2025.05.13 (화) 14:00 오픈예정"
  },
  {
    date: "05.23",
    day: "(금)",
    time: "18:30",
    home: "kt wiz",
    away: "LG",
    title: "kt vs LG",
    place: "수원 케이티위즈파크",
    open: false,
    openDate: "2025.05.23 (금) 14:00 오픈예정"
  }
];

function GameList() {
  const location = useLocation();
  const team = location.state?.team || "선택된 구단";
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>{team} 홈경기 예매</h2>

      <div style={{ borderBottom: "2px solid #000", display: "flex", gap: "42px", marginBottom: "20px" }}>
        <span style={{ fontWeight: "bold" }}>예매하기</span>
        <span style={{ color: "#aaa" }}>공지사항</span>
        <span style={{ color: "#aaa" }}>구단안내</span>
      </div>

      <label style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
        <input type="checkbox" defaultChecked style={{ marginRight: "8px" }} />
        홈경기만 보기
      </label>

      {mockGames.map((game, idx) => (
        <div key={idx} style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #eee",
          padding: "20px 0",
          gap: "20px"
        }}>
          <div style={{ minWidth: "70px", textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>{game.date}</div>
            <div style={{ fontSize: "14px", color: "#666" }}>{game.day}</div>
            <div style={{ fontSize: "14px", color: "#333" }}>{game.time}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>
              {game.title}
            </div>
            <div style={{ color: "#555" }}>
              {game.home} vs {game.away}
            </div>
            <div style={{ fontSize: "13px", marginTop: "6px", color: "#888" }}>
              {game.place}
            </div>
          </div>
          <div>
            {game.open ? (
              <button onClick={() => setShowModal(true)}
              style={{
                backgroundColor: "#e60023",
                color: "#fff",
                padding: "10px 16px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold"
              }}>
                예매하기
              </button>
            ) : (
              <div style={{
                backgroundColor: "#eee",
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                color: "#555"
              }}>
                {game.openDate}
              </div>
            )}
          </div>

    {showModal && (
      <BookingNoticeModal
        onConfirm={() => {
          setShowModal(false);
          navigate("/captcha-baseball");
        }}
      />
    )}
        </div>
      ))}
      
        <div style={{
        marginTop: "120px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fef7f7",
        borderTop: "1px solid #eee",
        color: "#c62828",
        fontSize: "20px",
        fontWeight: "bold",
        lineHeight: "3"
        }}>
        🎫 티켓 예매 일정을 미리 알 수 있습니다!  <br />   
        원하는 경기 날짜를 고른후 예매하기를 눌러주세요!
        </div>
    </div>
    
  );
}

export default GameList;