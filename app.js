const start = document.getElementById("start");

function multiply(howMany) {
  const total = [];
  const correct = [];
  const incorrect = [];
  const review = [];

  for (let i = 0; i < howMany; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;

    if (
      num1 == 1 ||
      num1 == 10 ||
      num1 == 11 ||
      num2 == 1 ||
      num2 == 10 ||
      num2 == 11
    ) {
      i--;
    } else {
      let question = `${num1} x ${num2} = ?`;
      let userQuestion = prompt(question);
      let answer = num1 * num2;

      let newObj = {
        q: question,
        k: answer,
        a: userQuestion,
      };

      total.push(newObj);
    }
  }

  total.forEach((index) => {
    if (index.a == index.k) {
      correct.push(index);
    } else {
      incorrect.push(index);
    }
  });

  incorrect.forEach((index) => {
    review.push(index.q);
  });

  console.log(
    `You got ${correct.length} out of ${
      total.length
    } correct,\nYou scored ${Math.round(
      (correct.length / total.length) * 100
    )}%\n ${
      correct.length == total.length
        ? "Wow! You got them all!"
        : "Here are the problems you missed\n" + review
    }`
  );
}

function newGame(getStarted, howMany) {
  switch (getStarted) {
    case "add":
      add(howMany);
      break;
    case "subtract":
      subtract(howMany);
      break;
    case "multiply":
      multiply(howMany);
      break;
    case "divide":
      divide(howMany);
      break;
    default:
      break;
  }
}

start.addEventListener("click", () => {
  let getStarted = prompt(
    `What would you like to practice?\nadd\nsubtract\nmultiply\ndivide`
  );

  let howMany = prompt(`How many rounds would you like to do?`);

  console.log(`Prompts: ${getStarted}, ${howMany}`);

  newGame(getStarted, howMany);
});
