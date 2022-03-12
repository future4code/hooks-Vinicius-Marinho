// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// está rodando uma repetição enquanto o valor de i for menor que 5 e somando o valor de i na variavel valor. Vai ser impresso o resultado 10.

// 2. Leia o código abaixo:
    
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    // }
    
//     a) O que vai ser impresso no console?
    // 19, 21, 23, 25, 27, 30

    
//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    // sim. no console.log escrever...console.log(numero, lista.indexOf(numero))

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// *
// **
// ***
// ***

// EXERCICIOS DE ESCRITA DE CODIGO

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 


// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// - 💡 Dica
    
//     <aside>
//     ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    
//     </aside>
    

// c) Por fim, imprima o array com os nomes dos bichinhos no console

let pets = Number(prompt("Quantos bicinhos de estimação você tem?"))
let nomesPet =[]   

if (pets === 0) {
    console.log("Que pena! Você pode adotar um pert!")

} else{
    let i = 0
    while (i < pets){
        nomesPet.push(prompt("Digite o nome do seu pet!"))

        i++
    }
    console.log(nomesPet)
}


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, 
// crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

let arrayOriginal=[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numeroDividido =0
let arrayPares =[]
let arrayStrings =[]
let maiorNumero = 0
let menorNumero = 10000

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

function imprimeLista(array){
    for(let item of array){
        console.log(item)
    }
}
imprimeLista(arrayOriginal)
    
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

function divideLista(array){
    for(let item of array){
     
     numeroDividido = item /10
        console.log(numeroDividido)
    }
}

divideLista(arrayOriginal)
    
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

function listaPares(array){
    for(let item of array){
        if((item % 2) === 0) {
            arrayPares.push(item)
        }
    }
}
listaPares(arrayOriginal)
console.log(arrayPares)
    
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima**
//      este novo array.
    

function criaArraySting(array){
    for(let item of array){
        i = arrayOriginal.indexOf(item)
        arrayStrings.push("o elemento do index " + i + " é: " + item )
    }
}
criaArraySting(arrayOriginal)
console.log(arrayStrings)

//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function comparaNumero(array){
    for(let item of array){
        if (maiorNumero < item){
            maiorNumero = item
        } else if (menorNumero > item){
            menorNumero = item
        }
    }
}
comparaNumero(arrayOriginal)
console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}`)
    

