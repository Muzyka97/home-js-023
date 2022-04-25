import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const time = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(time);

const onTimeUpdate = function(event){
    localStorage.setItem("videoplayer-current-time", event.seconds);
    console.log(event)
}
player.on ('timeupdate', throttle(onTimeUpdate,1000))
