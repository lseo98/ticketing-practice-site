import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./EventDetail.css";
import { useLocation } from "react-router-dom";
function EventDetail() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(true); // 🔴 경고 상태
  const navigate = useNavigate();
  const location = useLocation(); 
  const remainingTime = location.state?.remainingTime;

  const allowedDates = [
    new Date("2025-05-10"),
    new Date("2025-05-11"),
  ];

  const isAllowedDate = (date) => {
    if (isAlertVisible) return false; // 경고 떠 있으면 선택 막기
    return allowedDates.some(
      (allowed) =>
        date.getFullYear() === allowed.getFullYear() &&
        date.getMonth() === allowed.getMonth() &&
        date.getDate() === allowed.getDate()
    );
  };
  const offsetFromExact = remainingTime !== undefined
  ? +(remainingTime - 3600).toFixed(1)
  : null;

const formatOffset = (offset) => {
  const abs = Math.abs(offset);
  const m = String(Math.floor(abs / 60)).padStart(2, "0");
  const s = String(Math.floor(abs % 60)).padStart(2, "0");
  const f = String(Math.floor((abs % 1) * 10));
  const sign = offset < 0 ? "-" : "+";
  return `${sign}${m}:${s}.${f}`;
};

  return (
    <>
      <header className="site-header">
        <div className="logo">
          <span className="logo-nol">NOL</span> <strong>interpark</strong>
        </div>
      </header>

      <div className="container">
  <div className="left">
    {remainingTime !== undefined && (() => {
      const offsetFromExact = +(remainingTime - 3600).toFixed(1);
      const abs = Math.abs(offsetFromExact);
      const m = String(Math.floor(abs / 60)).padStart(2, "0");
      const s = String(Math.floor(abs % 60)).padStart(2, "0");
      const f = String(Math.floor((abs % 1) * 10));
      const sign = offsetFromExact < 0 ? "-" : "+";
      const formattedOffset = `${sign}${m}:${s}.${f}`;

      return (
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          <p style={{ fontSize: "25px", fontWeight: "bold", color: "#28a745" }}>
            🎯 정각 기준 차이: {formattedOffset}
          </p>
        </div>
      );
    })()}

    <h2 className="concert-title">OO 콘서트</h2>
          <div className="poster-info-wrapper">
            <div className="poster-placeholder">포스터 사진</div>
            <div className="info">
              <p><strong>장소:</strong> OO 체육관</p>
              <p><strong>공연기간:</strong> 20XX.XX.10 ~ 20XX.XX.11</p>
              <p><strong>공연시간:</strong> OO분</p>
              <p><strong>관람연령:</strong> 만 OO세 이상</p>
              <p><strong>가격:</strong></p>
              <ul>
                <li>전석 100,000원</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 🔴 경고 메시지 - 팝업처럼 */}
        {isAlertVisible && (
          <div className="alert-overlay">
            <div className="calendar-alert">
              <span>❗ 날짜를 선택하세요.</span>
              <button className="close-alert" onClick={() => setIsAlertVisible(false)}>×</button>
            </div>
          </div>
        )}

        {/* 오른쪽 패널 - 비활성화 상태 반영 */}
        <div className={`right ${isAlertVisible ? "disabled" : ""}`}>
          <div className="calendar">
            <h3>관람일</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              filterDate={isAllowedDate}
              dateFormat="yyyy.MM.dd"
              placeholderText="날짜를 선택하세요"
              locale={ko}
              renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <div className="custom-datepicker-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <button onClick={decreaseMonth}>◀</button>
                  <span style={{ fontWeight: "bold" }}>
                    20XX. XX
                  </span>
                  <button onClick={increaseMonth}>▶</button>
                </div>
              )}
            />
            {selectedDate && (
              <p style={{ marginTop: "10px" }}>
                선택한 날짜: {selectedDate.toLocaleDateString("ko-KR")}
              </p>
            )}
          </div>

          <div className="time">
            <h3>회차</h3>
            <p>1회 18:00</p>
          </div>

          <button
            className="reserve-btn"
            onClick={() => navigate("/captcha")}
          >
            예매하기
          </button>

          <button
            className="booking-btn"
            disabled={isAlertVisible}
          >
            BOOKING / 外國語
          </button>        </div>
      </div>
    </>
  );
}

export default EventDetail;
