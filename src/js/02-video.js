import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

player.on('timeupdate', throttle(function () {
    player.getCurrentTime()
    .then(time => localStorage.setItem('videoplayer-current-time', time));
}, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


