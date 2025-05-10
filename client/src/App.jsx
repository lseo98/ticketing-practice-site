import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail"; 
import CaptchaModal from "./pages/CaptchaModal";
import SeatSelection from "./pages/SeatSelection";
import PriceSelection from "./pages/PriceSelection";
import OrderConfirm from "./pages/OrderConfirm";
import FinalOrderStep from "./pages/FinalOrderStep";
import FinalOrderSuccess from "./pages/FinalOrderSuccess"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventdetail" element={<EventDetail />} /> {/* ✅ 연결 */}
        <Route path="/captcha" element={<CaptchaModal />} />
        <Route path="/seatselection" element={<SeatSelection />} />
        <Route path="/priceselection" element={<PriceSelection />} />
        <Route path="/orderconfirm" element={<OrderConfirm />} />
        <Route path="/finalorderstep" element={<FinalOrderStep />} />
        <Route path="/finalordersuccess" element={<FinalOrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
