"use strict";
const lowerCase = (letter) => letter.toLowerCase();
const playDrum = ({ key }) => {
    const lowerCaseKey = lowerCase(key);
    const ele = document.querySelector(`.key[data-key=${lowerCaseKey}]`);
    ele?.classList.add('playing');
    const audio = document.querySelector(`audio[data-key=${lowerCaseKey}]`);
    audio.currentTime = 0;
    audio?.play();
};
const removeTranslation = (e) => {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
};
document.addEventListener('keydown', playDrum);
// @ts-ignore
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTranslation));
