var lowerCase = function (letter) { return letter.toLowerCase(); };
document.addEventListener('keydown', function (_a) {
    var key = _a.key;
    var lowerCaseKey = lowerCase(key);
    var ele = document.querySelector(".key[data-key=".concat(lowerCaseKey, "]"));
    ele === null || ele === void 0 ? void 0 : ele.classList.add('playing');
    var audio = document.querySelector("audio[data-key=".concat(lowerCaseKey, "]"));
    audio.currentTime = 0;
    audio === null || audio === void 0 ? void 0 : audio.play();
});
// @ts-ignore
var keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(function (key) { return key.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}); });
