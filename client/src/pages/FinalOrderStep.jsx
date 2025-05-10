import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirm.css";

const OrderConfirm = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("현장수령");
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSeats = location.state?.selectedSeats || [];
  const selectedDate = location.state?.selectedDate || "20XX.XX.10";
  const seatCount = selectedSeats.length;
  const ticketPrice = 99000;
  const serviceFee = 2000;
  const deliveryFee = deliveryMethod === "배송" ? 3200 : 0;
  const totalPrice = seatCount * ticketPrice + serviceFee + deliveryFee;

  return (
    <div className="order-confirm-container">
      <div className="step-header">05. 결제하기</div>

      <div className="order-content-layout">

        <div className="left-section">
          <h3>결제방식선택</h3>
        </div>

        <div className="middle-section">
          <h3>결제수단입력</h3>
        </div>

        <div className="right-section">
          <div className="summary-box">
            <h3>My예매정보</h3>
            <p><b>일시</b> {selectedDate} 18:00</p>
            <p><b>선택좌석</b></p>
            <ul>
              {selectedSeats.map((seat, idx) => (
                <li key={idx}>{seat.zone}구역 {seat.row}열 {seat.col}번</li>
              ))}
            </ul>
            <p><b>티켓금액</b> {ticketPrice.toLocaleString()}원 × {seatCount}매</p>
            <p><b>수수료</b> {serviceFee.toLocaleString()}원</p>
            <p><b>배송</b> {deliveryFee ? `${deliveryFee.toLocaleString()}원` : "0원 | 현장수령"}</p>
            <hr />
            <p className="total-price">
              총 결제금액: <b>{totalPrice.toLocaleString()}원</b>
            </p>

            <div className="bottom-buttons">
              <button className="prev-button">이전단계</button>
              <button className="next-button" onClick={() => navigate("/finalordersuccess")}>다음단계</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OrderConfirm;
