export const videoPlayerInit = () => {
  const videoPlayer = document.querySelector('.video-player');  
  const videoButtonPlay = document.querySelector('.video-button__play'); 
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoProgress = document.querySelector('.video-progress');
  const videoTimeTotal = document.querySelector('.video-time__total');

  const playIconToggle = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.add('fa-play');
      videoButtonPlay.classList.remove('fa-pause');
    } else {
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    }
  };

  const playToggle = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  };

  const stopToggle = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  };

  const addZero = n => n < 10 ? `0${n}` : n;

  videoPlayer.addEventListener('click', playToggle);
  videoButtonPlay.addEventListener('click', playToggle);
  videoPlayer.addEventListener('play', playIconToggle);
  videoPlayer.addEventListener('pause', playIconToggle);
  videoButtonStop.addEventListener('click', stopToggle);

  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    let secondPassed = Math.floor(currentTime % 60);
    let minutePassed = Math.floor(currentTime / 60);
    let secondTotal = Math.floor(duration % 60);
    let minuteTotal = Math.floor(duration / 60);

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;

    videoProgress.value = (currentTime / duration) * 100;
  });

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  });
};


