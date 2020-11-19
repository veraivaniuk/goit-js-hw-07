const valueRef = document.getElementById("value");
console.log(valueRef);
const btnIncresEl = document.querySelector('button[data-action="increment"]');
const btnDecresEl = document.querySelector('button[data-action="decrement"]');

let counterValue = + valueRef.textContent;

function increment() {
  counterValue += 1;
}
function decrement() {
  counterValue -= 1;
}

//console.log(btnIncresEl, btnDecresEl);

btnIncresEl.addEventListener('click', () => {
  increment()
  valueRef.textContent = counterValue;
});
btnDecresEl.addEventListener('click', () => {
  decrement()
  valueRef.textContent = counterValue;
});

/*Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

