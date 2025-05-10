import React from "react";

function BookingNoticeModal({ onConfirm }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "white",
        width: "90%",
        maxWidth: "420px",
        borderRadius: "10px",
        padding: "24px",
        fontSize: "19px",
        lineHeight: "1.6",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>예매안내</h2>
        <div>
          예매 가능시간 : 경기시작 후 30분 까지<br />
          예매 취소 가능시간 : 경기시작 3시간 전 취소 마감<br />
          입장 가능시간 : 경기시작 2시간 전 입장 가능<br />
          *36개월 미만 : 티켓 없이 입장(등본 지참 필요, 좌석 제공X), 이외는 전 연령 티켓 구매 필요<br />
          ㅤㄴ스카이박스 및 캠핑존은 별도 규정에 따름.<br />
          *좌석변경은 취소 후 재예매 하셔야 하며 예매취소 마감시간 이후로는 취소 불가합니다.<br />
          *수원종합운동장 주차장은 사전예약 차량만 주차 가능합니다. kt wiz, 수원종합운동장 홈페이지 예약<br />
          *불법양도 방지를 위하여 부분취소는 1회까지만 가능합니다. (부분취소 1회 이후 전체취소만 가능)<br />
          *불법양도 및 피해 방지를 위하여 선물하기가 진행된 예매건은 취소가 불가합니다. (선물 회수 후 취소 가능)
        </div>
        <div style={{ marginTop: "24px", textAlign: "right" }}>
          <button onClick={onConfirm} style={{
            padding: "8px 16px",
            backgroundColor: "#2e5cff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingNoticeModal;