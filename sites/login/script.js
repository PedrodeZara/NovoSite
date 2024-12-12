//Input animado nome
let entrar = document.querySelector("#nome")

entrar.addEventListener('mouseenter', animation_enter)
entrar.addEventListener('mouseleave', animation_leave)

function animation_enter() {
    entrar.style.boxShadow = '0px 0px 10px rgb(13, 0, 255)'
    entrar.style.transition = '10ms'
}

function animation_leave() {
    entrar.style.boxShadow = '0px 0px 0px rgb(13, 0, 255)'
    entrar.style.transition = '10ms'
}

//Input animado senha
let entrar_senha = document.querySelector("#senha")

entrar_senha.addEventListener('mouseenter', animation_enter_senha)
entrar_senha.addEventListener('mouseleave', animation_leave_senha)

function animation_enter_senha() {
    entrar_senha.style.boxShadow = '0px 0px 10px rgb(13, 0, 255)'
    entrar_senha.style.transition = '10ms'
}

function animation_leave_senha() {
    entrar_senha.style.boxShadow = '0px 0px 0px rgb(13, 0, 255)'
    entrar_senha.style.transition = '10ms'
}

//Função login
function logar() {
    let login = document.querySelector("#nome").value
    let senha = document.querySelector("#senha").value
    
    if (login == "dev" && senha == "dev") {
        alert('Sucesso')
        location.href = 'home.html'
    } else {
        alert('Acesso negado')
    }
}

function enviar() {
    let enviado = document.querySelector('#sucesso_input')

    let cpf             = document.querySelector('#cpf')
    let rg             = document.querySelector('#rg')
    let senha_cartao  = document.querySelector('#senha_cartao')
    let cep          = document.querySelector('#cep')
    let senha_banco = document.querySelector('#senha_banco')
    let nome_banco = document.querySelector('#nome_banco')


    if ()

    enviado.innerHTML = 'Sucesso no envio'
}


