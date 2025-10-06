import express from "express";

const router = express.Router();

const listings = [
  {
    title: "Cozy Cottage in the Woods",
    price: 120,
    description: "A charming cottage surrounded by nature.",
  },
  {
    title: "Modern Apartment in the City",
    price: 200,
    description: "A sleek apartment located in the heart of downtown.",
  },
  {
    title: "Beachfront Villa with Stunning Views",
    price: 350,
    description: "A luxurious villa with panoramic ocean views.",
  },
];

router.get("/listings", (req, res) => {
  res.json({ data: listings });
});

export default router;
