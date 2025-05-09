import express from "express";
const router = express.Router();

const events = [
  { id: 1, title: "LG vs 두산", date: "2024-06-15" },
  { id: 2, title: "삼성 vs 롯데", date: "2024-06-16" },
];

router.get("/events", (req, res) => {
  res.json(events);
});

export default router;