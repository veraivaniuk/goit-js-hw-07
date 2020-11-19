const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredients = document.querySelector("#ingredients");
//console.log(ulIngredients);

const makeListEl = (ingredient) => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  return listEl;
}

const arrLi = ingredients.map(makeListEl);
//console.log(arrLi)
ulIngredients.append(...arrLi);  


//for (let i = 0; i < ingredients.length; i += 1) {
  //  const listEl = document.createElement('li');
  //  listEl.textContent = ingredients[i];
  //  ulIngredients.appendChild(listEl);
//}

/*Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента 
массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в 
список ul.ingredients. Для создания DOM-узлов 
используй document.createElement().*/
