export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioHeader = document.querySelector('.radio-header__big');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');
  const radioVolume = document.querySelector('.radio-volume');
  const radioMute = document.querySelector('.radio-mute');
  const radioVolumeDown = document.querySelector('.radio-volume-down');
  const radioVolumeUp = document.querySelector('.radio-volume-up');

  const audio = new Audio();
  audio.type = 'audio/aac';

  const changeAudioIcon = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.add('fa-stop');
      radioStop.classList.remove('fa-play');
    }
  };

  const selectRadio = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  };

  radioStop.disabled = true;

  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parent = target.closest('.radio-item');
    const title = parent.querySelector('.radio-name').textContent;
    const img = parent.querySelector('.radio-img').src;

    audio.src = target.dataset.radioStation;
    audio.play();
    radioCoverImg.src = img;
    radioHeader.textContent = title;
    radioStop.disabled = false;
    
    changeAudioIcon();
    selectRadio(parent);
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeAudioIcon();
  });

  radioVolume.addEventListener('input', () => {
    audio.volume = radioVolume.value / 100;
    audio.muted = false;
  });

  radioMute.addEventListener('click', () => {
    audio.muted = !audio.muted;
    radioVolume.value = audio.volume;
  });

  radioVolumeDown.addEventListener('click', () => {
    if (audio.volume) {
      audio.volume = 0;
      radioVolume.value = audio.volume;
    }
  });

  radioVolumeUp.addEventListener('click', () => {
    if (audio.volume < 1 || audio.muted) {
      audio.volume = 1;
      radioVolume.value = 100;
      audio.muted = false;
    }
  });

  radioVolume.value = audio.volume * 100;

  radioPlayerInit.stop = () => {
    audio.pause();
    changeAudioIcon();
  };
}