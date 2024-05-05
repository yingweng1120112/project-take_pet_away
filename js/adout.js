// 声明变量
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

// 点击事件处理程序：下一步按钮
document.querySelectorAll(".next").forEach(function(nextButton) {
  nextButton.addEventListener("click", function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    next_fs = this.parentElement.nextElementSibling;

    //activate next step on progressbar using the index of next_fs
    document.querySelectorAll("fieldset").forEach(function(fieldset, index) {
      if (fieldset === next_fs) {
        document.querySelectorAll("#progressbar li")[index].classList.add("active");
      }
    });

    //show the next fieldset
    next_fs.style.display = "block";
    //hide the current fieldset with style
    var currentOpacity = 1;
    var currentLeft = 0;
    var currentScale = 1;
    var interval = setInterval(function() {
      currentOpacity -= 0.02;
      currentScale += 0.02 * 0.2;
      currentLeft = 0.02 * 50;
      current_fs.style.opacity = currentOpacity;
      current_fs.style.transform = "scale(" + currentScale + ")";
      next_fs.style.left = currentLeft + "%";
      next_fs.style.opacity = 1 - currentOpacity;
      if (currentOpacity <= 0) {
        clearInterval(interval);
        current_fs.style.display = "none";
        animating = false;
      }
    }, 8); // 800 ms divided by 100 (0.8 seconds / 100)
  });
});

// 点击事件处理程序：上一步按钮
document.querySelectorAll(".previous").forEach(function(previousButton) {
  previousButton.addEventListener("click", function() {
    if (animating) return false;
    animating = true;

    current_fs = this.parentElement;
    previous_fs = this.parentElement.previousElementSibling;

    //de-activate current step on progressbar
    document.querySelectorAll("fieldset").forEach(function(fieldset, index) {
      if (fieldset === current_fs) {
        document.querySelectorAll("#progressbar li")[index].classList.remove("active");
      }
    });

    //show the previous fieldset
    previous_fs.style.display = "block";
    //hide the current fieldset with style
    var currentOpacity = 1;
    var currentLeft = 0;
    var currentScale = 0.8;
    var interval = setInterval(function() {
      currentOpacity -= 0.02;
      currentScale += 0.02 * 0.2;
      currentLeft = 0.02 * 50;
      current_fs.style.opacity = currentOpacity;
      current_fs.style.left = currentLeft + "%";
      previous_fs.style.transform = "scale(" + currentScale + ")";
      previous_fs.style.opacity = 1 - currentOpacity;
      if (currentOpacity <= 0) {
        clearInterval(interval);
        current_fs.style.display = "none";
        animating = false;
      }
    }, 8); // 800 ms divided by 100 (0.8 seconds / 100)
  });
});

var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//圖片放大播放
  document.querySelectorAll('.pet-img img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = "block";
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
  });

  document.querySelector('.popup-image a').onclick = () => {
    document.querySelector('.popup-image').style.display = "none";
  }