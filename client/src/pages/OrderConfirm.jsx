import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirm.css";

const OrderConfirm = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("현장수령");
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSeats = location.state?.selectedSeats || [];
  const selectedDate = location.state?.selectedDate || "20XX년 XX월 ??일";
  const seatCount = selectedSeats.length;
  const ticketPrice = 99000;
  const serviceFee = 2000;
  const deliveryFee = deliveryMethod === "배송" ? 3200 : 0;
  const totalPrice = seatCount * ticketPrice + serviceFee + deliveryFee;

  return (
    <div className="order-confirm-container">
      <div className="step-header">04. 배송선택/주문자확인</div>

      <div className="order-content-layout">
        <div className="left-section">
          <h3>티켓수령방법</h3>
          <div className="delivery-options">
            <label>
              <input
                type="radio"
                value="현장수령"
                checked={deliveryMethod === "현장수령"}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              현장수령
            </label>
            <label>
              <input
                type="radio"
                value="배송"
                checked={deliveryMethod === "배송"}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              배송 (3,200원)
            </label>
          </div>

          <p className="tip">
            티켓현장수령은 예매시 부여되는 "예약번호"로 관람일 당일 티켓을 수령하여 입장합니다.
          </p>
        </div>

        <div className="middle-section">
          <h3>예매자 확인</h3>

          <div className="form-group">
            <div className="label-inline">
              <label>이름</label>
              <p>OOO</p>
            </div>
          </div>

          <div className="form-group">
            <div className="label-inline">
              <label>생년월일</label>
              <div className="input-with-hint">
                <input type="text" />
                <p>예) 870201 (YYMMDD)</p>
              </div>
            </div>
            <p className="warning">
              생년월일을 정확히 입력해주세요. 가입 시 입력하신 정보와 다를 경우, 본인확인이 되지 않아 <br /> 예매가 불가합니다.
            </p>
          </div>

          <div className="form-group">
            <div className="label-inline">
              <label>연락처</label>
              <div className="phone-inputs">
                <input type="text" defaultValue="010" />
                <span>-</span>
                <input type="text" defaultValue="OOOO" />
                <span>-</span>
                <input type="text" defaultValue="OOOO" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="label-inline">
              <label>이메일</label>
              <div className="input-with-hint">
                <input type="email" defaultValue="OOO@naver.com" />
              </div>
            </div>
            <p className="info">SMS 문자와 이메일로 예매 정보를 보내드립니다.</p>
          </div>
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
                <button
                    className="next-button"
                    onClick={() =>
                        navigate("/finalorderstep", {
                        state: {
                            selectedSeats,
                            selectedDate,
                        },
                        })
                    }
                    >
                    다음단계
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;