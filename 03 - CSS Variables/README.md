# QUESTION
使用拖曳開關，來使圖片位移、模糊、變色

## ISSUE
一開始看到這個題目時，下意識去用 Javascript 一一的監聽每個 input 的狀態，
沒想到可以去改變 css 的變數來做這道題目

- 先定義好變數，並將 class 綁上對應的變數
```css=
:root {
  --{變數名稱}: 變數 value
}

.class {
  color: var(--{變數名稱});
}
```

- 使用 js 去監聽每一個 input，只要有變動，就去改變 css 的變數屬性
```javascript=
document.documentElement.style.setProperty(`{ 變數名稱 }`, `${  變數值}`)
```