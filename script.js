function loginSimples() {
    window.location.href = "/sites/login/index.html"
}

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