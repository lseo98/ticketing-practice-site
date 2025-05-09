import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCaptchaText(generateRandomCaptcha());
  }, []);

  const handleReload = () => {
    setCaptchaText(generateRandomCaptcha());
    setInputValue("");
  };

  const handleInputChange = (e) => {
    const upperValue = e.target.value.toUpperCase();
    setInputValue(upperValue);
  };

  const isMatched = inputValue === captchaText;

  const handleSubmit = () => {
    if (isMatched && !isAlertVisible) {
      navigate("/seatselection");
    }
  };

  return (
    <div className="captcha-modal-overlay">
      {isAlertVisible && (
        <div className="captcha-floating-alert">
          <span>❗ 6글자를 따라 치시오</span>
          <button className="close-alert" onClick={() => setIsAlertVisible(false)}>×</button>
        </div>
      )}

      <div className="captcha-modal">
        {isAlertVisible && <div className="modal-blocker" />}
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && isMatched && !isAlertVisible) {
              navigate("/seatselection");
            }
          }}
          disabled={isAlertVisible}
        />

        <div className="captcha-buttons">
          <button className="btn-common btn-grey" disabled={isAlertVisible}>
            날짜 다시 선택
          </button>
          <button
            className="btn-common btn-black"
            onClick={handleSubmit}
            disabled={!isMatched || isAlertVisible}
          >
            입력완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptchaModal;
