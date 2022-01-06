export function createVideoPlayer(){
const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video-html');
const playButtonBig = videoPlayer.querySelector('.play');
const pause = videoPlayer.querySelector('.pause');
const playButton = videoPlayer.querySelector('.play-small');
const volume = videoPlayer.querySelector('.volume-progress');
const currentTimeElement = videoPlayer.querySelector('.current');
const durationTimeElement = videoPlayer.querySelector('.duration');
const progress = document.querySelector('.progress');
const volumeButton = document.querySelector('.volume');
const volumeButtonClose = document.querySelector('.volume-button-close');
const fullScreen = document.querySelector('.fullscreen-btn');
const volumeProgress = document.querySelector('.volume-progress');
const playerPanel = document.querySelector('.player-panel');
/* const carousel = document.getElementById('carousel');
const videoDots = document.querySelectorAll('.video-slider-dots-item');
const videoItems = document.querySelectorAll('.carousel .video-item'); */
let isFullscreen = false;
document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if((e || window.event).keyCode === 32){
    video.paused ? play() : pauseFunc();
}});
document.addEventListener('keydown  ', function (e) {
  e.preventDefault();
  if((e || window.event).keyCode === 77){
    console.log((e || window.event).keyCode);
    video.volume !=0 ? volumeMute() : volumeOn();
}});
document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if((e || window.event).keyCode === 70){
    if (!isFullscreen){
      video.webkitEnterFullScreen();
    }else{
      video.webkitExitFullScreen();
    }
}});
document.addEventListener('keypress', function (e) { 
  e.preventDefault();
  if((e || window.event).keyCode === 190){
    video.playbackRate = 2.0;
}});
volumeButton.addEventListener('click', (e) => {
  volumeMute();
});
volumeButtonClose.addEventListener('click', (e) => {
  volumeOn ();
});
volume.addEventListener('mousemove', (e)=> {
  video.volume = e.target.value;
})
fullScreen.addEventListener('click', (e)=> {
  video.webkitEnterFullScreen();
  isFullscreen=true;
});
playButton.addEventListener('click', (e) => {
  play();
});
video.addEventListener('click', (e) => {
  if(video.paused){
    play();
  } else {
    pauseFunc();
  }
});
playButtonBig.addEventListener('click', (e) => {
  play();
});
pause.addEventListener('click', (e) => {
  pauseFunc();
});
function pauseFunc(){
  video.pause();
  playButtonBig.classList.remove('display-hide');
  playButton.classList.remove('display-hide');
  pause.classList.add('display-hide');
  pause.classList.remove('display-show');
}
function play (){
  video.play();
  playButtonBig.classList.add('display-hide');
  playButton.classList.add('display-hide');
  pause.classList.remove('display-hide');
}
function volumeOn (){
  volumeButton.classList.remove('display-hide');
  volumeButtonClose.classList.add('display-hide');
  video.volume=0.5;
  volumeProgress.value=0.5;
};
function volumeMute(){
  volumeButton.classList.add('display-hide');
  volumeButtonClose.classList.remove('display-hide');
  video.volume=0.0;
  volumeProgress.value=0;
}
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)
  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`;
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
}
video.addEventListener('timeupdate', currentTime);
video.addEventListener('timeupdate', () =>{
  const value = (video.currentTime / video.duration) * 100;
  progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  progress.value=`${value}`;
  if(progress.value==100){
    pauseFunc();
  }
});
progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
});
progress.addEventListener('timeupdate',currentTime );  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
});
volumeProgress.addEventListener('input', function() {
  var value1 = video.volume * 100;
  volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value1}%, #C4C4C4 ${value1}%, #C4C4C4 100%)`;
});

let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 506; // ширина картинки
let list = carousel.querySelector('ul');
let listElems = document.querySelectorAll('.video-slider-dots-item');
let countDots = 0;
let position = 0; // положение ленты прокрутки

document.querySelector('.prev-video-btn').onclick = function() {
  position += width;
  list.style.marginLeft = position + 'px';
  countDots--;
  if(position>=0){
    position=-1000;
  }
};

document.querySelector('.next-video-btn').onclick = function() {
  position -= width;
  list.style.marginLeft = position + 'px';
  if(position<=-1000){
    position=0;
  }
  countDots++;
  if(countDots>4){
    countDots=0;
    listElems[4].style.background='black';
  }
  listElems[countDots].style.background='red';
  listElems[countDots-1].style.background='black';
  video.src=`assets/video/video${countDots}.mp4`;
  video.poster=`assets/video/poster${countDots}.jpg`;
  play();
};

}