import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PriceSelection.css";

const PriceSelection = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const seatCount = location.state?.seatCount || 0;
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const selectedSeats = location.state?.selectedSeats || [];
  const selectedDate = location.state?.selectedDate || "20XX년 XX월 ??일";

  return (
    <div className="price-selection-container">
      <div className="step-header">03. 가격/할인선택</div>

      <div className="main-content">
        <div className="left-panel">
          <h3>가격</h3>
          <p>
            <b>전석</b> | <span className="red-text">좌석 {seatCount}매</span>를 선택하셨습니다.
          </p>

          <table className="price-table">
            <thead>
              <tr>
                <th>기본가</th>
                <th>일반</th>
                <th>가격</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기본가</td>
                <td>일반</td>
                <td>99,000원</td>
                <td>
                  <select
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                  >
                    {Array.from({ length: seatCount + 1 }, (_, v) => (
                      <option key={v} value={v}>
                        {v}매
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="quantity-warning-box right-shifted">
            ❗ 선택한 좌석 매수와 같은 수량을 선택하세요.
          </div>
        </div>

        <div className="right-panel">
          <h3>My예매정보</h3>
          <div className="booking-info">
            <p><b>일시</b>&nbsp;&nbsp;&nbsp; {selectedDate} 18:00<br /></p>
            <p><b>선택좌석 ({seatCount}석)</b><br />
              {selectedSeats.map((seat, index) => (
                <span key={index}>
                  {seat.zone}구역 {seat.row}열 {seat.col}번<br />
                </span>
              ))}
            </p>
            <p><b>티켓금액</b> &nbsp;&nbsp;&nbsp; 99,000원<br /></p>
            <p><b>수수료</b><br /></p>
            <p><b>배송료</b><br /></p>
            <p><b>할인</b><br /></p>
            <p><b>할인쿠폰</b><br /></p>
            <p><b>취소기한</b><br /></p>
            <p><b>취소수수료</b><br /></p>
            <hr />
            <p className="total-price"><b>총 결제금액</b>&nbsp;&nbsp;&nbsp; {selectedQuantity * 99000}원</p>
          </div>

          <div className="bottom-buttons">
            <button className="prev-button">이전단계</button>
            <button
              className="next-button"
              onClick={() => {
              if (selectedQuantity === 0) {
                  alert("매수를 선택하세요.");
                  return;
              }
              if (selectedQuantity !== seatCount) {
                alert(
                  `전석 ${seatCount}매를 선택하셨습니다.\n현재 선택하신 매수는 ${selectedQuantity}매 입니다. 매수를 다시 확인해주세요.`
                );
                return;
              }

              navigate("/orderconfirm", {
                  state: {
                    selectedSeats,
                    selectedDate
                  },
                });
              }}
            >
            다음단계
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSelection;
