const start = document.getElementById("start");

function multiply(howMany) {}

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
