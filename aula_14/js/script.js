
let titulo1 = document.getElementById('titulo')

console.log(titulo1.innerHTML);

titulo1.style.color = 'darkcyan'

// Exemplo de trabalho com classes

//document.getElementsByClassName('classe')[posicao]  //Array de elementos

function inserir(){
    let numero = document.getElementById('posicao').value -1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('corredor')[numero].innerHTML = novo
}


// Exemplo de trabalho com Tags

function mostrar(){
    let num = document.getElementById('numero').value -1
    let mes = document.getElementsByTagName('li')[num].innerHTML
    document.getElementById('resultado').innerHTML = mes
}

// Trabalhar com querySelector

document.querySelector('.corredor').innerHTML = 'Luís'

console.log(
    document.querySelector('#titulo') // retorna o primeiro valor
);

console.log(
    document.querySelectorAll('li')[2]
);

//  Trabalhar com Eventos

let botao2 = document.querySelector('#btn2')
botao2.onclick = function(){
    alert('Mensagem do botão 2')
}

let botao3 = document.querySelector('#btn3')
//    function(){}
//    ()=>{}
botao3.onclick = ()=> alert('Mensagem do botão 3')

let botao4 = document.querySelector('#btn4')

botao4.addEventListener('click',clicar)
botao4.addEventListener('mouseenter', entrar)
botao4.addEventListener('mouseout', sair)

function clicar(){
    alert("Não entra nem sai mais!");
    botao4.removeEventListener('mouseenter',entrar)
    botao4.removeEventListener('mouseout',sair)
}

function entrar(){
    botao4.innerHTML = 'Entrou!'
}

function sair(){
    botao4.innerHTML = 'Saiu!'
}




