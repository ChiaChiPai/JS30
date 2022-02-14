const elements = document.querySelectorAll("input")
function handleChange(this: HTMLInputElement) {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}
elements.forEach((element) => {
  element.addEventListener("change", handleChange)
})