import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BaseballSeats.css";

function BaseballSeats() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const toggleSeat = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const Seat = ({ id }) => (
    <div
      className={`around-seat ${selected.includes(id) ? "selected" : ""}`}
      onClick={() => toggleSeat(id)}
    />
  );
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  return (
    <div className="camping-page-wrapper">
      <div className="camping-zone-container">
        {["C4", "C3", "C2", "C1"].map((label) => (
          <div key={label} className="camping-table">
            <div className="seat-row center">
              <Seat id={`${label}-top`} />
            </div>
            <div className="seat-row">
              <Seat id={`${label}-left`} />
              <div className="center-seat">{label}</div>
              <Seat id={`${label}-right`} />
            </div>
            <div className="seat-row center">
              <Seat id={`${label}-bottom`} />
            </div>
            <div className="camping-label">위즈 캠핑존 ({label})</div>
          </div>
        ))}
      </div>

      <div className="sidebar">
        <h3>선택된 좌석</h3>
        {selected.length > 0 ? (
          <ul>
            {selected.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "#888" }}>좌석을 선택해주세요.</p>
        )}
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          위즈 캠핑존(4층): 16석 남음
        </p>
        <button
          onClick={() =>
            navigate("/finalordersuccess", {
              state: { selectedSeats: selected },
            })
          }
          disabled={selected.length === 0}
        >
          다음단계
        </button>
      </div>
      <div
  style={{
    position: "fixed",
    bottom: 30,
    left: 0,
    width: "100%",
    backgroundColor: "#e3f2fd",
    textAlign: "center",
    padding: "12px 0",
    fontWeight: "bold",
    color: "#0d47a1",
    borderTop: "1px solid #90caf9",
    zIndex: 999
  }}
>
  🟦 파란 자리를 클릭하여 좌석을 선택하세요.
</div>
    </div>
  );
}

export default BaseballSeats;