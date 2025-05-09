// client/src/pages/Home.jsx

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>티켓 예매 연습 웹사이트</h1>
      <p>사회적 약자를 위한 실전 예매 연습 사이트입니다.</p>
      <button onClick={() => navigate("/events")}>예매 연습 시작하기</button>
    </div>
  );
}

export default Home;