// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

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
