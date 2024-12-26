let logSlink = document.querySelector("#loginsimples").addEventListener("click", function () {
    window.location.href = 'sites/login/index.html'
})

let aprelink = document.querySelector("#apresespa").addEventListener("click", function () {
    window.location.href = 'sites/espanha-atv-main/html/index.html'
});

let gitlink = document.querySelector(".git").addEventListener("click", function () {
     window.location.href = 'https://github.com/PedrodeZara'
})

let instalink = document.querySelector(".insta").addEventListener("click", function () {
    window.location.href = 'https://www.instagram.com/pedro_rzara/'
})

let linkelink = document.querySelector(".linke").addEventListener("click", function () {
    window.location.href = 'https://www.linkedin.com/in/pedro-zara-25a94b322/'
})

let carrolink = document.querySelector("#carrossel").addEventListener("click", function () {
    window.location.href = 'sites/landing-page/index.html';
})

function vermais() {
    let alt = document.querySelector(".visu");
    let arrow = document.getElementById("img");
    let main = document.querySelector("#main")

    main.onclick = e => {
        if(!alt.classList.contains('visu_ativo')) {
            arrow.style.rotate = '180deg'
            alt.classList.add('visu_ativo');
        }

        else {
            arrow.style.rotate = '0deg'
            alt.classList.remove('visu_ativo')
        }
    }
}

