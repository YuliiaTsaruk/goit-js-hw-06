const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

console.log(textInput);
console.log(textOutput);

textInput.addEventListener("input", handleInput);
function handleInput(event) {
  const inputValue = event.currentTarget.value;
  //   console.log(inputValue);
  if (inputValue) {
    return (textOutput.textContent = inputValue);
  }
  return "Anonymous";
}
