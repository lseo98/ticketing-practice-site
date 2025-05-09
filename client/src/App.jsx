import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail"; 
import CaptchaModal from "./pages/CaptchaModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventdetail" element={<EventDetail />} /> {/* ✅ 연결 */}
        <Route path="/captcha" element={<CaptchaModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
