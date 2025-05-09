// src/pages/PriceSelection.jsx
import React, { useState } from "react";
import "./PriceSelection.css";

const PriceSelection = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  return (
    <div className="price-selection-container">
      <div className="step-header">03. 가격/할인선택</div>

      <div className="main-content">
        {/* 좌측 가격/쿠폰 정보 */}
        <div className="left-panel">
          <h3>가격</h3>
          <p>
            <b>전석</b> | <span className="red-text">좌석 1매</span>를 선택하셨습니다.
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
                    {[0, 1, 2, 3].map((v) => (
                      <option key={v} value={v}>
                        {v}매
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 우측 예매 정보 */}
        <div className="right-panel">
          <h3>My예매정보</h3>
          <div className="booking-info">
            <p><b>일시</b>&nbsp;&nbsp;&nbsp; 20XX년 XX월 ??일 18:00<br /><br /></p>
            <p><b>선택좌석 (??석)</b><br /><br /></p>
            <p><b>티켓금액</b> &nbsp;&nbsp;&nbsp; 99,000원<br /><br /></p>
            <p><b>수수료</b><br /><br /></p>
            <p><b>배송료</b><br /><br /></p>
            <p><b>할인</b><br /><br /></p>
            <p><b>할인쿠폰</b><br /><br /></p>
            <p><b>취소기한</b><br /><br /></p>
            <p><b>취소수수료</b><br /><br /></p>
            <hr />
            <p><b>총 결제금액</b>&nbsp;&nbsp;&nbsp; {selectedQuantity * 99000}원</p>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="bottom-buttons">
        <button className="prev-button">이전단계</button>
        <button className="next-button">다음단계</button>
      </div>
    </div>
  );
};

export default PriceSelection;
