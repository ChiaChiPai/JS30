"use strict";
const elements = document.querySelectorAll("input");
function handleChange() {
    console.log(this.name, this.value);
    const suffix = this.dataset.sizing || '';
    console.log(document.documentElement);
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}
elements.forEach((element) => {
    element.addEventListener("change", handleChange);
});
