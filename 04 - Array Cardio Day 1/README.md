# QUESTIONS
回答下列有關 Array 的題目

## ISSUE
### 7. Sort the people alphabetically by last name
用 sort 將 last name 排列順序
這題有兩個問題
- sort 的回傳值一定會是數字，不可以回傳布林值。
- split 是使用在字串上的，不是 Array

### 8.Sum up the instances of each of these
計算出陣列內的字串數量

這題一開始有頭緒的只有要做成一個物件，使用 forEach 知道怎麼處理，但用 reduce 就不知道了
- 關鍵是在 reduce 初始傳入值要傳入物件，確定初始值的格式
- 透過初始物件去計算陣列內字串的數量
- 需要考慮到如何處理一開始不存在初始物件內的字串，需要去加入原本不存的字串當 key 值
```javascript
if(!object[item]) object[item] = 0
```