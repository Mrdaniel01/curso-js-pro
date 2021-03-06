import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';


const video = document.querySelector("video");
const player = new MediaPlayer( {el: video, plugins:[ new AutoPlay(),new AutoPause(), new Ads()], });

const play_button: HTMLElement = document.getElementById("play_button");
play_button.onclick = () => player.togglePlay(); 


const muted_button: HTMLElement = document.getElementById("mute_button");
muted_button.onclick = () => player.toggleMute(); 

if ('serviceWorker' in navigator)  {
  navigator.serviceWorker.register('../sw.js').catch(error => {
    console.log(error.message)
  });
}

