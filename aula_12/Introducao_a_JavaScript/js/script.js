// window.alert('Desta vez estou escrevendo no script externo')
window.document.write('Estou Escrevendo na pagina!')
window.document.write('<h2>As Tags também funcionam aqui</h2>')

document.write(document.title)

console.log('Escrevendo no console do navegador')

let nome = 'Lucas Costa'

console.log("O nome dele é: " + nome);
console.log(`O nome dele é: ${nome}, e trabalha na FIAP`); //tem a mesma função do .format (python)

let idade = 18
console.log(typeof idade);

let salario = 1205.35
console.log(typeof salario);

let casado = true
console.log(typeof casado);

let frutas = ["Maçã","banana","uva","abacaxi"] //esse é o array, funciona igual cadeia de caracteres em python
console.log(typeof frutas);

console.log(frutas[2])
console.log(frutas);

let carro = {
    cor: 'Amarelo',
    numPortas: 4,
    tipo: 'Sedan',
    modelo: 'City',
    marca: 'Honda',
    correr: function(){
        alert('Estou correndo rapidaum')
    }
}
console.log(typeof carro);
console.log(carro.marca);
//carro.correr()

let n1 = 150.564 // transformar float em int
console.log(n1);
n1 = parseInt(n1)
console.log(n1);

let n2 = '150.999' //normalmente quando se recebe um number externamente, ele vem como string. deve-se convertê-lo em number manualmente
console.log(n2);
n2 = parseFloat(n2)
//n2 = Number(n2)   ; ele proprio reconhece se o valor é flutuante ou inteiro
console.log(n2);

let n3 = 350.44
console.log(n3);
//n3 = n3.toString()
n3 = String(n3)
console.log(n3);

let txt = 'Estão chegando as provas'
console.log(txt.indexOf('as')); //indexOf  funciona igualmente ao  in  de python
console.log(txt.lastIndexOf('as'));
console.log(txt.slice(5, 14));
console.log(txt.replace('provas','avaliações'));

let cliente = "Luis Carlos de Souza Silva"
let palavra = cliente.indexOf(" ")
let tratamento = cliente.slice(0, palavra)
console.log(tratamento, ", Obrigado por vir!");
console.log(cliente.toLowerCase());
console.log(cliente.toUpperCase());

let n4 = 356.12645849
console.log(n4.toFixed(2)); //Arredondar a partir de quantas casas
console.log(n4.toPrecision(5)); //mostra na tela considerando o primeiro algarismo informado
