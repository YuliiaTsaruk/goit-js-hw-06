let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);

const counterValueEl = document.querySelector("#value");
// console.log(counterValueEl);
decrementBtn.addEventListener("click", handleDecrementBtnClick);
incrementBtn.addEventListener("click", handleIncrementBtnClick);

function handleDecrementBtnClick() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function handleIncrementBtnClick() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
