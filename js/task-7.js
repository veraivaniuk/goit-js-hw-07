const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRangeRef.addEventListener('input', onSizeControl)

//console.dir(inputRangeRef.value);
//console.log(textRef);

function onSizeControl() {
    textRef.style.fontSize = `${inputRangeRef.value * 5}%`;
}

/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control 
(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/