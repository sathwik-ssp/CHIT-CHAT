const express = require("express");

const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

const messages = [
  { id: 1, text: "Hello 👋" },
  { id: 2, text: "How are you?" },
  { id: 3, text: "This is CHIT-CHAT MVP 🚀" }
];

app.get("/", (req, res) => {
  res.json({
    message: "Backend is working 🚀",
    status: "success"
  });
});


app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      error: "Message text is required"
    });
  }

  const newMessage = {
    id: messages.length + 1,
    text
  };

  messages.push(newMessage);

  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
