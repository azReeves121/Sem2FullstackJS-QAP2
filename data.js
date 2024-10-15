// Generate a new math question (addition, subtraction, multiplication, division)
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let answer;
  let question;

  switch (operation) {
    case "+":
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    case "-":
      answer = num1 - num2;
      question = `${num1} - ${num2}`;
      break;
    case "*":
      answer = num1 * num2;
      question = `${num1} * ${num2}`;
      break;
    case "/":
      answer = Math.floor(num1 / num2);
      question = `${num1} / ${num2}`;
      break;
  }
  return { question, answer };
}

// answer validation
function checkAnswer(questionData, userAnswer) {
  return questionData.answer === userAnswer;
}

// Top 10 streaks
function leaderboard(history) {
  return history.sort((a, b) => b.streak - a.streak).slice(0, 10);
}

module.exports = { generateQuestion, checkAnswer, leaderboard };
