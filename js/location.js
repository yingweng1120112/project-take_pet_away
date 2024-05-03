// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 3 })
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 1, // 設置透明度為 1，保持文本可見
    duration: 5, // 設置持續時間極短，以立即生效
    complete: function(anim) {
      // 在動畫播放完畢後，將動畫效果移除
      anime.remove('.ml3 .letter');
    }
  });