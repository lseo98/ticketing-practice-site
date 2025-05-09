
// SeatSelection.jsx
import React, { useState } from "react";
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
  const [selected, setSelected] = useState([]);
  const [seatsA] = useState(generateSeats("A"));
  const [seatsB] = useState(generateSeats("B"));

  const toggleSeat = (seat) => {
    if (seat.reserved) return;
    const exists = selected.find((s) => s.id === seat.id);
    if (exists) {
      setSelected(selected.filter((s) => s.id !== seat.id));
    } else {
      setSelected([...selected, seat]);
    }
  };

  const renderSeatGrid = (seats) => {
    return Array.from({ length: ROWS }).map((_, rowIdx) => (
      <div
        key={rowIdx}
        className="seat-grid"
      >
        {Array.from({ length: COLS }).map((_, colIdx) => {
          const seat = seats.find(
            (s) => s.row === rowIdx + 1 && s.col === colIdx + 1
          );
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
      {/* 헤더 */}
      <div className="seat-selection-header">
        <div className="step-indicator">02 &nbsp;&nbsp;&nbsp; 좌석 선택</div>
        <div className="title-info">
          <h2 className="concert-title">2025 권진아 단독 콘서트 [The Dreamest]</h2>
          <div className="date-time-select">
            <label>
              일자: <select><option>2025년 05월 10일(토)</option></select>
            </label>
            <label>
              시간: <select><option>18시 00분</option></select>
            </label>
          </div>
        </div>
      </div>

      {/* 좌석도 영역 */}
      <div className="seat-map-wrapper">
        <div className="seat-map-left">
          <div className="seat-map-header">
            <p>원하시는 영역을 선택해주세요. 공연장에서 위치를 클릭하거나, 오른쪽의 좌석을 선택해주세요.</p>
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

        {/* 오른쪽 패널 */}
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
                <button className="btn-complete">좌석 선택완료</button>
                    <div className="sub-buttons">

                    <button className="btn-back">이전단계</button>
                    <button className="btn-reset" onClick={() => setSelected([])}>좌석 다시 선택</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SeatSelection;

