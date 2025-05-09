import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 페이지 이동을 위한 훅
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import "./EventDetail.css";

function EventDetail() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate(); // ✅ 페이지 이동용 함수

  const allowedDates = [
    new Date("2025-05-10"),
    new Date("2025-05-11"),
  ];

  const isAllowedDate = (date) => {
    return allowedDates.some(
      (allowed) =>
        date.getFullYear() === allowed.getFullYear() &&
        date.getMonth() === allowed.getMonth() &&
        date.getDate() === allowed.getDate()
    );
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
          <h2 className="concert-title">2025 권진아 단독 콘서트 [The Dreamest]</h2>
          <div className="poster-info-wrapper">
            <div className="poster-placeholder">포스터 사진</div>
            <div className="info">
              <p><strong>장소:</strong> 잠실실내체육관</p>
              <p><strong>공연기간:</strong> 2025.05.10 ~ 2025.05.11</p>
              <p><strong>공연시간:</strong> 120분</p>
              <p><strong>관람연령:</strong> 만 7세 이상</p>
              <p><strong>가격:</strong></p>
              <ul>
                <li>R석 154,000원</li>
                <li>S석 143,000원</li>
                <li>A석 132,000원</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right">
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
                    {date.getFullYear()}. {String(date.getMonth() + 1).padStart(2, "0")}
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
            onClick={() => navigate("/captcha")} // ✅ 캡차 페이지로 이동
          >
            예매하기
          </button>

          <button className="booking-btn">BOOKING / 外國語</button>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
