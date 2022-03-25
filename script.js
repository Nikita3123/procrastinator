let phrases = [
  { text: 'начать изучать самый лучший язык программирования под названием javascript', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'спать', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'послушать Моцарта', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'поехать в замечательный российский город Донецк', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'лежать с умным видом', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'заказать пиццу', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'сидеть с умным видом', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'посмотреть курс евро', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть курс доллара', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'фланировать', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 