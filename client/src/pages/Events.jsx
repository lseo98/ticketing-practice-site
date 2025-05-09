import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("❌ 이벤트 불러오기 실패:", err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>🎟️ 예매 가능한 경기 목록</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;