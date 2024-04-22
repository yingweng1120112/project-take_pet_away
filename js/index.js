// 123

// 寵物認養 (輪播)
const btnPage1Ele = document.getElementById("btnPage1");
const page1Ele = document.getElementById("page1");
const btnPage2Ele = document.getElementById("btnPage2");
const page2Ele = document.getElementById("page2");
const btnPage3Ele = document.getElementById("btnPage3");
const page3Ele = document.getElementById("page3");
const indicatorsEle = document.getElementById("indicators");

let i = 1;

function transitionPage(pageElement) {
  page1Ele.style.zIndex = 0;
  page2Ele.style.zIndex = -1;
  page3Ele.style.zIndex = -1;

  pageElement.style.zIndex = i;
  i++;
}

// btnPage1Ele.addEventListener("click", function (event) {
//   transitionPage(page1Ele);
// });

// btnPage2Ele.addEventListener("click", function (event) {
//   transitionPage(page2Ele);
// });

// btnPage3Ele.addEventListener("click", function (event) {
//   transitionPage(page3Ele);
// });

// setInterval(function () {
//   if (i >= 4) {
//     i = 1;
//   }
//   transitionPage(document.querySelector(".carousel-item.active"));
// }, 1000);
