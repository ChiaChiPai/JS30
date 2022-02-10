"use strict";
const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#min");
const secondElement = document.querySelector("#second");
setInterval(() => {
    const now = new Date();
    const hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    hourElement.style.transform = `rotate(${30 * hour}deg)`;
    minElement.style.transform = `rotate(${6 * min}deg)`;
    secondElement.style.transform = `rotate(${6 * sec}deg)`;
}, 1000);
