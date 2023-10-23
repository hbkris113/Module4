const express = require("express");
const cors = require(cors);
const PORT = 5500;
const app = express();
app.use(express.json());
app.use(cors());

const quotes = [
  "A dream becomes a goal when action is taken toward its achievement. - Bo Bennett",
  "If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes. - Andrew Carnegie",
  "You can do anything if you set goals. You just have to push yourself. - RJ Mitte",
  "Setting goals is the first step in turning the invisible into the visible. - Anthony Robbins",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

app.get("/api/quotes", (req, res) => {
  res.status(200).json(quotes); // Sending quotes as JSON
});

app.post("/api/quotes", (req, res) => {
  const newQuote = req.body.quote; 
  if (newQuote) {
    quotes.push(newQuote);
    res.status(201).json(newQuote); 
  } else {
    res.status(400).json({ error: "Invalid request, 'quote' property is required" });
  }
});

app.put("/api/quotes/:index", (req, res) => {
  const index = req.params.index;
  const updatedQuote = req.body.quote;

  if (index >= 0 && index < quotes.length && updatedQuote) {
    quotes[index] = updatedQuote;
    res.status(200).json(quotes[index]);
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
});
app.delete("/api/quotes/:index", (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < quotes.length) {
    const deletedQuote = quotes.splice(index, 1)[0];
    res.status(200).json(deletedQuote);
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
});


app.listen(PORT, () => console.log("Server running on port ${PORT}"));
