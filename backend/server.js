const express = require("express");

const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

const messages = [
  { id: 1, username: "Admin", text: "Hello 👋", time: "10:00 AM" },
  { id: 2, username: "Admin", text: "How are you?", time: "10:01 AM" },
  { id: 3, username: "Admin", text: "This is CHIT-CHAT MVP 🚀", time: "10:02 AM" }
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
  const { username, text } = req.body;

  if (!username || !text) {
    return res.status(400).json({
      error: "Username and message text are required"
    });
  }

  const newMessage = {
    id: messages.length + 1,
    username,
    text,
    time: new Date().toLocaleTimeString()
  };

  messages.push(newMessage);

  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
