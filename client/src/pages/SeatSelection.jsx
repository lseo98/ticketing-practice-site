// ✅ SeatSelection.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SeatSelection.css";

const ROWS = 30;
const COLS = 15;

const generateSeats = (zone) => {
  const seats = [];
  for (let row = 1; row <= ROWS; row++) {
    for (let col = 1; col <= COLS; col++) {
      seats.push({
        id: `${zone}-${row}-${col}`,
        zone,
        row,
        col,
        reserved: Math.random() < 0.2
      });
    }
  }
  return seats;
};

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultDate = location.state?.selectedDate || "20XX.XX.10";
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const [selected, setSelected] = useState([]);
  const [seatsA] = useState(generateSeats("A"));
  const [seatsB] = useState(generateSeats("B"));

  const toggleSeat = (seat) => {
    if (seat.reserved) return;
    const exists = selected.find((s) => s.id === seat.id);
    if (exists) {
      setSelected(selected.filter((s) => s.id !== seat.id));
    } else {
      if (selected.length >= 3) {
        alert("선택 가능한 좌석 지정을 초과했습니다.");
        return;
      }
      setSelected([...selected, seat]);
    }
  };

  const renderSeatGrid = (seats) => {
    return Array.from({ length: ROWS }).map((_, rowIdx) => (
      <div key={rowIdx} className="seat-grid">
        {Array.from({ length: COLS }).map((_, colIdx) => {
          const seat = seats.find((s) => s.row === rowIdx + 1 && s.col === colIdx + 1);
          if (!seat) return null;
          const isSelected = selected.some((s) => s.id === seat.id);
          return (
            <div
              key={seat.id}
              onClick={() => toggleSeat(seat)}
              className={`seat ${seat.reserved ? "reserved" : ""} ${isSelected ? "selected" : ""}`}
              title={`${seat.zone}구역 ${seat.row}열 ${seat.col}번`}
            />
          );
        })}
      </div>
    ));
  };

  return (
    <div className="seat-selection-container">
      <div className="seat-selection-header">
        <div className="step-indicator">02 &nbsp;&nbsp;&nbsp; 좌석 선택</div>
        <div className="title-info">
          <h2 className="concert-title">OO 콘서트</h2>
          <div className="date-time-select">
            <label>
              일자:
              <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                <option value="20XX.XX.10">20XX년 XX월 10일</option>
                <option value="20XX.XX.11">20XX년 XX월 11일</option>
              </select>
            </label>
            <label>
              시간: <select><option>18시 00분</option></select>
            </label>
          </div>
        </div>
      </div>

      <div className="seat-map-wrapper">
        <div className="seat-map-left">
          <div className="seat-map-header">
            <p className="warning-text">❗ 예매할 좌석을 선택해주세요.</p>
            <p className="warning-text">❗ 보라색으로 되어 있는 영역 중에서 선택할 수 있습니다.</p>
          </div>

          <div className="seat-map-image">
            <div className="seat-zone-label">STAGE</div>
            <div className="seat-zone">
              <div className="zone">
                <h4 className="zone-label">A구역</h4>
                {renderSeatGrid(seatsA)}
              </div>
              <div className="zone">
                <h4 className="zone-label">B구역</h4>
                {renderSeatGrid(seatsB)}
              </div>
            </div>
          </div>
        </div>

        <div className="seat-map-right">
          <div className="legend">
            <h4>선택좌석</h4>
            <p>총 {selected.length}석 선택되었습니다.</p>
            <table>
              <thead>
                <tr>
                  <th>구역</th>
                  <th>열</th>
                  <th>번</th>
                </tr>
              </thead>
              <tbody>
                {selected.map((seat) => (
                  <tr key={seat.id}>
                    <td>{seat.zone}</td>
                    <td>{seat.row}</td>
                    <td>{seat.col}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="seat-action-buttons">
            <button
              className="btn-complete"
              disabled={selected.length === 0}
              onClick={() =>
                navigate("/priceselection", {
                  state: {
                    seatCount: selected.length,
                    selectedSeats: selected,
                    selectedDate: selectedDate
                  }
                })
              }
            >
              좌석 선택완료
            </button>

            <div className="sub-buttons">
              <button className="btn-back" onClick={() => navigate("/eventdetail")}>이전단계</button>
              <button className="btn-reset" onClick={() => setSelected([])}>좌석 다시 선택</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
