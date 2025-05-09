import React, { useState, useEffect } from "react";
import "./CaptchaModal.css";

const generateRandomCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const CaptchaModal = () => {
  const [captchaText, setCaptchaText] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setCaptchaText(generateRandomCaptcha());
  }, []);

  const handleReload = () => {
    setCaptchaText(generateRandomCaptcha());
    setInputValue(""); // 초기화
  };

  const handleInputChange = (e) => {
    const upperValue = e.target.value.toUpperCase(); // 소문자를 대문자로
    setInputValue(upperValue);
  };

  const isMatched = inputValue === captchaText;

  return (
    <div className="captcha-modal-overlay">
      <div className="captcha-modal">
        {/* 안심예매 뱃지 */}
        <div className="safe-booking-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
            <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06l-8.25 8.25a.75.75 0 0 1-1.06 0L1.454 7.06a.75.75 0 0 1 1.06-1.06l3.19 3.189 7.78-7.78z" />
          </svg>
          <span>안심예매</span>
        </div>

        <h2 className="captcha-title">문자를 입력해주세요</h2>
        <p className="captcha-description">
          부정예매방지를 위해 아래의 문자를 입력해주세요.
          <br />
          인증 후 좌석을 선택할 수 있습니다.
        </p>

        <div className="captcha-frame">
            <div className="captcha-code-box">
                <div className="captcha-code-display">{captchaText}</div>
                <button
                className="captcha-reload-btn"
                onClick={handleReload}
                aria-label="다시 생성"
                >
                ↻
                </button>
            </div>
        </div>


        <input
          type="text"
          className="captcha-input"
          placeholder="문자를 입력해주세요"
          value={inputValue}
          onChange={handleInputChange}
        />

        <div className="captcha-buttons">
          <button className="btn-common btn-grey">날짜 다시 선택</button>
          <button className="btn-common btn-black" disabled={!isMatched}>
            입력완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptchaModal;
