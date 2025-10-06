import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("frontend"));

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

app.get("/api/listings", (req, res) => {
  res.json({ data: listings });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
