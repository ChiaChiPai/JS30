## TypeScript Issue
- Element 不等於 HTMLElement
  ```javescript=
  const keys = Array.from(document.querySelectorAll('.key'))
  ```
  這邊的 keys 自動判斷的 type 為 Element[]，
  但 Element 的方法裡面沒有 addEventListener，
  所以要把 keys 標註為 HTMLElement
- querySelector 不一定能選取到東西，所以使用 ?. 去判斷如果 element 不存在就不要執行後面的方法
  ```javascript =
  ele?.classList.add('playing')
  audio?.play()
  ```

## Function Issue
- audio 的 currentTime 要在每次按鈕按下時都將時間清零，不然如果連續按兩次，第二次的聲音會被第一次的聲音蓋掉。
- 透過 transition Event 的監聽，在 transitionend 的 hook 時，去將 playing 清除