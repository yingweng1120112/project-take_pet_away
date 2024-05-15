// 預覽上傳圖片
var imageProc = function (input) {
  if (input.files && input.files[0]) {
    // 建立一個 FileReader 物件
    var reader1 = new FileReader();
    var reader2 = new FileReader();
    var reader3 = new FileReader();
    var reader4 = new FileReader();
    var reader5 = new FileReader();
    // 當檔案讀取完後，所要進行的動作
    reader1.onload = function (e) {
      // 顯示圖片
      $("#show_image1")
        .attr("src", e.target.result)
        .css("height", "100px")
        .css("width", "100px")
        .css("object-fit", "contain")
        .css("border", "1px black solid");
    };
    reader1.readAsDataURL(input.files[0]);
    reader2.onload = function (e) {
      // 顯示圖片
      $("#show_image2")
        .attr("src", e.target.result)
        .css("height", "100px")
        .css("width", "100px")
        .css("object-fit", "contain")
        .css("border", "1px black solid");
    };
    reader2.readAsDataURL(input.files[1]);
    reader3.onload = function (e) {
      // 顯示圖片
      $("#show_image3")
        .attr("src", e.target.result)
        .css("height", "100px")
        .css("width", "100px")
        .css("object-fit", "contain")
        .css("border", "1px black solid");
    };
    reader3.readAsDataURL(input.files[2]);
    reader4.onload = function (e) {
      // 顯示圖片
      $("#show_image4")
        .attr("src", e.target.result)
        .css("height", "100px")
        .css("width", "100px")
        .css("object-fit", "contain")
        .css("border", "1px black solid");
    };
    reader4.readAsDataURL(input.files[3]);
    reader5.onload = function (e) {
      // 顯示圖片
      $("#show_image5")
        .attr("src", e.target.result)
        .css("height", "100px")
        .css("width", "100px")
        .css("object-fit", "contain")
        .css("border", "1px black solid");
    };
    reader5.readAsDataURL(input.files[4]);
  }
};
$(document).ready(function () {
  // 綁定事件
  $("#file-upload").change(function () {
    imageProc(this);
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 4,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper3", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
