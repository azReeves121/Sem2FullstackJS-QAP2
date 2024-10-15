const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { generateQuestion, checkAnswer, leaderboard } = require("./data"); // Import functions
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

let streak = 0;
let questionData = generateQuestion();
let history = [];

// Home
app.get("/", (req, res) => {
  res.render("home", { streak });
});

// Start Quiz
app.get("/quiz", (req, res) => {
  res.render("quiz", { question: questionData.question });
});

// Answer
app.post("/quiz", (req, res) => {
  const answer = parseInt(req.body.answer);
  if (checkAnswer(questionData, answer)) {
    streak++;
    questionData = generateQuestion(); // New question
    res.redirect("/quiz");
  } else {
    history.push({ streak, date: new Date().toLocaleString() });
    res.redirect("/completion");
  }
});

// Quiz Completion
app.get("/completion", (req, res) => {
  res.render("completion", { streak });
  streak = 0;
});

// Leaderboards
app.get("/leaderboard", (req, res) => {
  const topScores = leaderboard(history); // top 10 streaks
  res.render("leaderboard", { topScores });
});

// Server Listening
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
