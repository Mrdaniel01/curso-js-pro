import MediaPlayer from '../MediaPlayer';

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor(){
    this.threshold= .25;
    this.handleIntersetion = this.handleIntersetion.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }



  run(player){
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersetion, {
      threshold: this.threshold,
      });

    observer.observe(this.player.media)

    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  private handleIntersetion(entries: IntersectionObserverEntry[]){
    const entry = entries[0];

    entry.isIntersecting 
      ? this.player.play()
      : this.player.pause();    

    console.log(entry);
  }

  private handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible"
    ? this.player.play()
    : this.player.pause()
  }
}


export default AutoPause;