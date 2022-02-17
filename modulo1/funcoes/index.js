

//1. Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a) O que vai ser impresso no console?

// 10
// 50


// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// iria apenas invocar a função. Não iria aparecer nada no console

// 2. Leia o código abaixo
    
//     let textoDoUsuario = prompt("Insira um texto");
    
//     const outraFuncao = function(texto) {
//     	return texto.toLowerCase().includes("cenoura")
//     }
    
//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)     
    
//     a. Explique o que essa função faz e qual é sua utilidade

//     Esss função passa todo o texto para minusculo e procura a palavra cenoura no texto. Ela serve para dizer se tenho ou nao uma palavra ou parte dela no texto.
    
//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`

//                  true

//          ii.  `CENOURA é bom pra vista`

//                  true

//          iii. `Cenouras crescem na terra`

//                  true


// EXERCICIOS DE ESCRITA DE CODIGOS

// 1. Escreva as funções explicadas abaixo:
    
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem

function imprima (){
    console.log("Eu sou Vinicius, tenho 30 anos, moro em Belo Horizonte e sou estudante.")
}

imprima()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function imprimir(nome, idade, cidade, profissao){

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

imprimir("Vinicius", 30, "Belo Horizonte", "estudante.")

// 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e 
//     retorne o resultado. Invoque a função e imprima no console o resultado.

function soma(num1, num2){
  let  soma = num1+num2
    return soma
}

console.log(soma(2,5))
    
//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual**
//      ao segundo.

function comparacao(num1, num2){
    let comparar = num1 >= num2
    return comparar
}

console.log(comparacao(100,10))
    
//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function par (num1){
    let par = num1 % 2 === 0
    return par
}

console.log(par(4))   
    
//     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//     juntamente com uma versão dela em letras maiúsculas.

function mensagem (texto){

    let mensagem = texto.toUpperCase()
    let tamanho = texto.length
     console.log (tamanho, mensagem)
}

mensagem("Oi, hoje estou feliz")



// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário 
// sendo o argumento. Por fim, mostre no console o resultado das operações:

function soma(num1, num2){
    let somar = num1+num2
    return somar
}

function subtracao(num1, num2){
    let subtrair = num1-num2
    return subtrair
}

function multiplicacao(num1, num2){
    let multiplicar = num1*num2
    return multiplicar
}

function divisao(num1, num2){
    let dividir = num1/num2
    return dividir
}

let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

console.log(`Número inseridos: ${primeiroNumero}, ${segundoNumero} `)
console.log("Soma:", soma(primeiroNumero,segundoNumero))
console.log("Diferença:", subtracao(primeiroNumero,segundoNumero))
console.log("Multiplicação:", multiplicacao(primeiroNumero,segundoNumero))
console.log("Divisão:", divisao(primeiroNumero,segundoNumero))