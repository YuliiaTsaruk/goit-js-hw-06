// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
// console.log(textInput);
// console.log(textOutput);

textInput.addEventListener("input", handleInput);
function handleInput(event) {
  const inputValue = event.currentTarget.value.trim();
  //   console.log(inputValue);
  if (inputValue) {
    return (textOutput.textContent = inputValue);
  }
  return "Anonymous";
}
