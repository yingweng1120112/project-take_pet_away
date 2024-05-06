const imgBigEle = document.getElementById("img-big");
const imgViewEle = document.getElementById("img-view");
const img1Ele = document.getElementById("img1");
const img2Ele = document.getElementById("img2");
const img3Ele = document.getElementById("img3");
const img4Ele = document.getElementById("img4");

img1Ele.addEventListener("click", () => {
  imgViewEle.src = img1Ele.src;
});

img2Ele.addEventListener("click", () => {
  imgViewEle.src = img2Ele.src;
});

img3Ele.addEventListener("click", () => {
  imgViewEle.src = img3Ele.src;
});

img4Ele.addEventListener("click", () => {
  imgViewEle.src = img4Ele.src;
});
