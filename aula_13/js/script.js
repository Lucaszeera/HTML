let titulo1 = document.getElementById('titulo')

console.log(titulo1.innerHTML);

titulo1.style.color = 'white'

// pegar elementos pela classe


//document.getElementsByClassName('classe')[posicao]  -  array de elementos
function inserir(){
    let numero = document.getElementById('posicao').value - 1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('corredor')[numero].innerHTML = novo
}

function mostrar(){
    let num = document.getElementById('numero').value - 1
    let mes = document.getElementsByTagName('li')[num].innerHTML
    document.getElementById('resultado').innerHTML = mes
}

// Trabalhar com o querySelector

document.querySelector('.corredor').innerHTML = 'luis'

console.log(
    document.querySelector('.corredor').innerHTML
);

// Trabalhar com Eventos

let botao2 = document.querySelector('#btn2')

botao2.onclick = function(){
    alert('Mensagem do botao 2')
}

let botao3 = document.querySelector('#btn3')

botao3.onclick = ()=> alert('Essa é a mensagem do botao 3') 

let botao4 = document.querySelector('#btn4')
//botao4 = addEventListener('Evento', 'Ação')
//botao4 = addEventListener('click', ()=>alert('Mensagem do botão 4'))
botao4 = addEventListener('click', clicar)
botao4 = addEventListener('mouseenter', entrar)
botao4 = addEventListener('mouseout', sair)

function clicar(){
    alert('Aooooooba')
}

function entrar(){
    botao4.innerHTML = 'cliqueeeee'
}

function sair(){
    botao4.innerHTML = 'Saiu'
}
