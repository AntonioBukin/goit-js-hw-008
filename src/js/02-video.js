//1. Потрібно зробити імпорт модуля vimeo
import Player from '@vimeo/player';

//2. Потрібно додати до плеера метод throttle
import throttle from 'lodash.throttle';

//3. Забираємо плеер з html
const iframe = document.querySelector('iframe');

//4. Активуємо плеер vimeo
const player = new Player(iframe);

//5. В плеер додаємо слухач подій завдяки методу 'on', далі як параметр передаємо подію 'timeupdate'
player.on('timeupdate', throttle(saveTime, 1000));

//6. За допомогою ф-ції 'saveTime' додаємо ключ videoplayer-current-time
function saveTime(event) {
   localStorage.setItem('videoplayer-current-time', JSON.stringify (event.seconds));
   console.log(set);

};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time',) || 0);


//7. Необхідно дадати до плеера щоб було позначення з якого моменту потрібно починати відео.
const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);





