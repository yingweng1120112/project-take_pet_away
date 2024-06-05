// 手風琴功能
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content_ans');
let icons = document.getElementsByClassName('icon')

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height)
            != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggle[i].style.color = "#0084e9";
            // icons[i].classList.remove('fa-solid');
            icons[i].classList.add('fa-solid');
        } else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#753422";
            // icons[i].classList.remove('fa-solid');
            icons[i].classList.add('ffa-solid');
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (j != i) {
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#753422";
                // toggles[j].classList.remove('fa-solid');
                toggles[j].classList.add('fa-solid');
            }

        }
    });

}