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
import Baseball from "./pages/baseball";
import GameList from "./pages/GameList";
import StadiumSelection from "./pages/StadiumSelection";
import BaseballStadium from "./pages/BaseballStadium";
import BaseballSeats from "./pages/BaseballSeats"; 
import CaptchaBaseball from "./pages/CaptchaBaseball";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventdetail" element={<EventDetail />} />
        <Route path="/captcha" element={<CaptchaModal />} />
        <Route path="/seatselection" element={<SeatSelection />} />
        <Route path="/priceselection" element={<PriceSelection />} />
        <Route path="/orderconfirm" element={<OrderConfirm />} />
        <Route path="/finalorderstep" element={<FinalOrderStep />} />
        <Route path="/finalordersuccess" element={<FinalOrderSuccess />} />
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/baseballstadium" element={<BaseballStadium />} />
        <Route path="/baseballseats" element={<BaseballSeats />} />
        <Route path="/stadium" element={<StadiumSelection />} />
        <Route path="/captcha-baseball" element={<CaptchaBaseball />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;