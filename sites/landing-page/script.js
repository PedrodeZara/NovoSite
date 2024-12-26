let img = document.getElementById("imgtda");
let imgtam = 0;
let margin = 0;

let direita = document.querySelector("#direita").addEventListener("click", function() {
    if (imgtam >= 0 && imgtam != 5) {
        margin -= 500;
        img.style.left = `${margin}px`;
        imgtam += 1;
        img.style.transition = "0.2s";
    }
    if (imgtam == 5) {
        imgtam = 0;
        margin = 0;
        console.log(imgtam);
        console.log(margin);
        img.style.left = `${margin}px`;
    }
})

let esquerda = document.querySelector("#esquerda").addEventListener("click", function() {
    if (imgtam >= 1) {
        margin += 500;
        img.style.left = `${margin}px`;
        imgtam -= 1;
        img.style.transition = "0.2s";
    }

    if (imgtam == 0) {
        margin = -2000;
        imgtam = 5;
        console.log(imgtam);
        console.log(margin);
        img.style.left = `${margin}px`;
    }
})

