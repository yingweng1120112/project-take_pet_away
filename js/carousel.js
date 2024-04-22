    // // TODO: 自動翻頁
    // const btnPage1Ele = document.getElementById("btnPage1");
    // const page1Ele = document.getElementById("page1");
    // const btnPage2Ele = document.getElementById("btnPage2");
    // const page2Ele = document.getElementById("page2");
    // const btnPage3Ele = document.getElementById("btnPage3");
    // const page3Ele = document.getElementById("page3");
    // const indicatorsEle = document.getElementById("indicators");

    // // 處理覆蓋
    // let i = 1;

    // // 每個按鈕加事件監聽器
    // btnPage1Ele.addEventListener("click", function (event) {
    //   if (i >= 4) {
    //     i = 1;
    //     console.log(`判斷T ${i}`);
    //     page1Ele.style.zIndex = `${i}`;
    //     page2Ele.style.zIndex = 0;
    //     page3Ele.style.zIndex = 0;
    //     indicatorsEle.style.zIndex = `${i}+1`;
    //   } else {
    //     console.log(`判斷F ${i}`);
    //   }
    //   // 重置 z-index 和 i
    //   page1Ele.style.zIndex = `${i}`;
    //   i++;
    //   indicatorsEle.style.zIndex = `${i}+1`;
    // });

    // btnPage2Ele.addEventListener("click", function (event) {
    //   if (i >= 4) {
    //     i = 1;
    //     console.log(`判斷T ${i}`);
    //     page1Ele.style.zIndex = 0;
    //     page2Ele.style.zIndex = `${i}`;
    //     page3Ele.style.zIndex = 0;
    //     indicatorsEle.style.zIndex = `${i}+1`;
    //   } else {
    //     console.log(`判斷F ${i}`);
    //   }
    //   // 重置 z-index 和 i
    //   page2Ele.style.zIndex = `${i}`;
    //   i++;
    //   indicatorsEle.style.zIndex = `${i}+1`;
    // });

    // btnPage3Ele.addEventListener("click", function (event) {
    //   if (i >= 4) {
    //     i = 1;
    //     console.log(`判斷T ${i}`);
    //     page1Ele.style.zIndex = 0;
    //     page2Ele.style.zIndex = 0;
    //     page3Ele.style.zIndex = `${i}`;
    //     indicatorsEle.style.zIndex = `${i}+1`;
    //   } else {
    //     console.log(`判斷F ${i}`);
    //   }
    //   // 重置 z-index 和 i
    //   page3Ele.style.zIndex = `${i}`;
    //   i++;
    //   indicatorsEle.style.zIndex = `${i}+1`;
    // });

    // 初始化 Carousel 元件
    // let myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleDark'), {
    //   interval: 100 // 可以自定義輪播的時間間隔
    // });

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

    btnPage1Ele.addEventListener("click", function (event) {
      transitionPage(page1Ele);
    });

    btnPage2Ele.addEventListener("click", function (event) {
      transitionPage(page2Ele);
    });

    btnPage3Ele.addEventListener("click", function (event) {
      transitionPage(page3Ele);
    });

    setInterval(function () {
      if (i >= 4) {
        i = 1;
      }
      transitionPage(document.querySelector('.carousel-item.active'));
    }, 1000);

