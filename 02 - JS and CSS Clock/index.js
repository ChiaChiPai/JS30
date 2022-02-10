"use strict";
const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#min");
const secondElement = document.querySelector("#second");
const getCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    hourElement.style.transform = `rotate(${30 * hour + (min / 12 / 60) * 360}deg)`;
    minElement.style.transform = `rotate(${6 * min}deg)`;
    secondElement.style.transform = `rotate(${6 * sec}deg)`;
};
setInterval(getCurrentTime, 1000);
