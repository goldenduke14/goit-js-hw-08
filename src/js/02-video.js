import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);

player.on(
  "timeupdate", throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
