import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const mainTitle = document.querySelector('.temp');

const initTab = () => {
	const hideTab = () => {
		playerBtn.forEach(elem => elem.classList.remove('active'));
		playerBlock.forEach(elem => elem.classList.remove('active'));
	};

	const showTab = (btn, i) => {
		btn.classList.add('active');
    playerBlock[i].classList.add('active');
	};

	playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
		mainTitle.style.display = 'none';
		hideTab();
		showTab(btn, i);
	}));
};

initTab();
radioPlayerInit();
videoPlayerInit();
musicPlayerInit();