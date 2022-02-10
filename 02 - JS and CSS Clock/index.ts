const hourElement = document.querySelector("#hour") as HTMLElement
const minElement = document.querySelector("#min") as HTMLElement
const secondElement = document.querySelector("#second") as HTMLElement

const getCurrentTime = () => {
  const now = new Date()
  const hour = now.getHours() > 12? now.getHours() - 12 :now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()
  if (min === 0) {
    minElement.style.transition = 'all 0s'
  } else {
    minElement.style.transition = 'all 0.05s'
  }
  if (sec === 0) {
    secondElement.style.transition = 'all 0s'
  } else {
    secondElement.style.transition = 'all 0.05s'
  }
  hourElement.style.transform = `rotate(${30 * hour+ (min / 12 / 60) * 360}deg)`
  minElement.style.transform = `rotate(${6 * min}deg)`
  secondElement.style.transform = `rotate(${6 * sec}deg)`
}

setInterval(getCurrentTime, 1000)

