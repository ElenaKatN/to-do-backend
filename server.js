const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: "*",          // allow all origins (for testing)
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// In-memory todos (replace with DB later if needed)
let todos = [];

// Routes
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    task: req.body.task
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Serve frontend in production


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
