# 題目
做出一個有分針、時針、秒針的時鐘

## ISSUE 
- 沒注意到時針在非整點的時候角度是不一樣的，需要加入分針的角度去做補正，不然時針就會一直停留在整點，一個鐘頭過後直接跳下一個小時
- css 加入 transition 動畫，讓秒針動作更加逼真
  ```css=
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  ```
- 但因為加入 transition 動畫，當時針和秒針突然從 60 跳到 0 的時候，會出現不自然的動作，因此在整點的角度出現時，暫時將 transition 動畫關掉