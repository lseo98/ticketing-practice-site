import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CaptchaModal.css"; 

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

const CaptchaBaseball = () => {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
  const [alertVisible, setAlertVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = () => {
    if (input === captcha && !alertVisible) {
      navigate("/baseballstadium"); 
    }
  };

  return (
    <div className="captcha-modal-overlay">
      {alertVisible && (
        <div className="captcha-floating-alert">
          <span>❗ 6글자를 따라 치시오.</span>
          <button className="close-alert" onClick={() => setAlertVisible(false)}>×</button>
        </div>
      )}
      <div className="captcha-modal">
        <h2>야구 안심예매</h2>
        <div className="captcha-code-box">
          <div className="captcha-code-display">{captcha}</div>
          <button onClick={() => setCaptcha(generateCaptcha())}>↻</button>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          disabled={alertVisible}
          placeholder="문자 입력"
        />
        <button onClick={handleSubmit} disabled={alertVisible || input !== captcha}>
          입력 완료
        </button>
      </div>
    </div>
  );
};

export default CaptchaBaseball;