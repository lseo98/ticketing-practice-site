import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CountdownDisplay from "./CountdownDisplay";import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(3590); // 초기값

  return (
    <div className="home-container">
      {/* 상단 소개 문구 */}
      <div className="home-header">
        <h1>티켓 예매 연습 웹사이트</h1>
        <p>디지털 소외 계층을 위한 실전 예매 연습 사이트입니다.</p>
      </div>

      {/* 중앙 양쪽 분할 */}
      <div className="home-body">
        <div className="half left">
          <h2 className="brand interpark">interpark</h2>
          <button
            className="start-button blue"
            onClick={() => navigate("/eventdetail", { state: { remainingTime } })}
          >
            콘서트 예매 연습 시작하기
          </button>
        </div>

        <div className="vertical-divider"></div>

        <div className="half right">
          <h2 className="brand ticketlink">티켓링크</h2>
          <button
            className="start-button red"
            onClick={() => navigate("/baseball", { state: { remainingTime } })}
          >
            야구 예매 연습 시작하기
          </button>
        </div>
      </div>

      {/* 카운트다운 표시 */}
      <CountdownDisplay onTimeChange={setRemainingTime} />
    </div>
  );
}

export default Home;