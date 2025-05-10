# 🤩프로젝트 소개 🎟️Ticketing Practice Web🎟️

디지털 소외 계층을 위한 실전 예매 연습 웹사이트입니다.  
콘서트, 스포츠 티켓팅 화면을 실제처럼 연습해볼 수 있습니다. 
실제 예매 화면에는 없는 설명들이 포함되어 있으니 쉽게 따라 하실 수 있습니다. 
예매법을 모두 익히셨다면 빠르게 예매할 수 있는 타이머도 있으니 도전해보세요.
이를 통해 디지털 소외 계층인 분들도 예매를 어려워하지 않게 되기를 바랍니다!

사용을 위해서는 Node.js와 pnpm이 설치되어 있어야 합니다.

---

✔️ 설치 및 실행
1. 리포지토리 클론
git clone https://github.com/your-id/ticketing-practice-site.git 

2. 의존성 설치
cd client
pnpm install

3. 개발 서버 실행
pnpm dev

---

## 📁 프로젝트 구조

```plaintext
ticketing-practice-site/
├── client/                         # 프론트엔드 (React + Vite)
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/                # 이미지 등 정적 리소스
│   │   ├── pages/                # 주요 페이지 컴포넌트
│   │   │   ├── baseball.css
│   │   │   ├── baseball.jsx
│   │   │   ├── BaseballSeats.css
│   │   │   ├── BaseballSeats.jsx
│   │   │   ├── BaseballStadium.jsx
│   │   │   ├── BookingNotice.jsx
│   │   │   ├── CaptchaBase.jsx
│   │   │   ├── CaptchaModal.css
│   │   │   ├── CaptchaModal.jsx
│   │   │   ├── CountdownDisplay.jsx
│   │   │   ├── EventDetail.css
│   │   │   ├── EventDetail.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── FinalOrderStep.css
│   │   │   ├── FinalOrderStep.jsx
│   │   │   ├── FinalOrderSuccess.css
│   │   │   ├── FinalOrderSuccess.jsx
│   │   │   ├── GameList.jsx
│   │   │   ├── Home.css
│   │   │   ├── Home.jsx
│   │   │   ├── OrderConfirm.css
│   │   │   ├── OrderConfirm.jsx
│   │   │   ├── PriceSelection.css
│   │   │   ├── PriceSelection.jsx
│   │   │   ├── SeatSelection.css
│   │   │   ├── SeatSelection.jsx
│   │   │   └── StadiumSelection.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── README.md
│   └── vite.config.js
├── server/                         # 백엔드 (Node.js + Express)
│   ├── node_modules/
│   ├── src/
│   │   └── Events.jsx             # 서버 측 처리 (추후 분리 권장)
│   ├── .gitignore
│   ├── package.json
│   └── pnpm-lock.yaml

---





