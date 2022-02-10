const lowerCase = (letter: string) => letter.toLowerCase()
const playDrum = ({key} : KeyboardEvent) => {
  const lowerCaseKey = lowerCase(key)
  const ele = document.querySelector(`.key[data-key=${lowerCaseKey}]`)
  ele?.classList.add('playing')
  
  const audio = document.querySelector(`audio[data-key=${lowerCaseKey}]`) as HTMLAudioElement
  audio.currentTime = 0
  audio?.play()
}
const removeTranslation = (e: TransitionEvent) => {
  if (e.propertyName !== 'transform') return;
  (e.target as Element).classList.remove('playing');
}

document.addEventListener('keydown', playDrum)

// @ts-ignore
const keys = Array.from(document.querySelectorAll('.key')) as HTMLElement[];
keys.forEach(key => key.addEventListener('transitionend', removeTranslation));
