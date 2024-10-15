const { generateQuestion, checkAnswer } = require("./data");

test("generates a valid math question", () => {
  const question = generateQuestion();
  expect(question.question).toMatch(/\d+ [\+\-\*\/] \d+/);
});

test("detects a correct answer", () => {
  const questionData = { question: "5 + 5", answer: 10 };
  expect(checkAnswer(questionData, 10)).toBe(true);
});

test("detects an incorrect answer", () => {
  const questionData = { question: "5 + 5", answer: 10 };
  expect(checkAnswer(questionData, 8)).toBe(false);
});
