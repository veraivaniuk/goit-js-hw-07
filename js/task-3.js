const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImages = document.getElementById("gallery");

//создание тегов используя шаблонную строку
const makeListImg = (img) => {
  const itemImg = `<li class = "gallery"><img src = "${img.url}" alt = "${img.alt}" width = "400px" height = "250px"></li>`;
  return itemImg;

}
const itemsImg = images.map(makeListImg);

listImages.insertAdjacentHTML('beforeend', itemsImg.join(''));

//добавила стили
listImages.style.display = "flex";
listImages.style.justifyContent = 'space-around';
listImages.style.alignItems = 'center';
listImages.style.listStyle = 'none';

  
/*Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания 
тегов img вложенных в li. Для создания разметки 
используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за
одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами
или гридами через css-классы.
*/
    


    
