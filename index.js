let result = document.getElementsByClassName("screen");
let number;
let action;
let storedResult;

const getNumber = (e) => {
  number = e;
  result[0].innerHTML += number;
};

const getAction = (e) => {
  storedResult = result[0].innerHTML;
  result[0].innerHTML = "";
  action = e;
};

const clearResult = () => {
  number = "";
  result[0].innerHTML = number;
};

const backSpace = () => {
  arrResult = result[0].innerHTML.split("");
  arrResult.pop();
  arrResult = arrResult.join();
  arrResult = arrResult.replaceAll(",", "");
  result[0].innerHTML = arrResult;
};

const sum = () => {
  result[0].innerHTML = parseInt(storedResult) + parseInt(result[0].innerHTML);
};

const minus = () => {
  result[0].innerHTML = parseInt(storedResult) - parseInt(result[0].innerHTML);
};

const multiply = () => {
  result[0].innerHTML = parseInt(storedResult) * parseInt(result[0].innerHTML);
};

const divide = () => {
  result[0].innerHTML = parseInt(storedResult) / parseInt(result[0].innerHTML);
};

const getAnswer = () => {
  switch (action) {
    case "plus":
      sum();
      break;
    case "minus":
      minus();
      break;
    case "multiply":
      multiply();
      break;
    case "divide":
      divide();
      break;
    default:
      result[0].innerHTML = "No function found";
  }
};
