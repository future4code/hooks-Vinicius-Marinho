// exercicios de interpretação de codigo

//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado) // b. false

// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado) // c. true

// console.log("d. ", typeof resultado) // boolean

// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// A variavel soma, está recebendo o valor da soma de duas variaveis do tipo String. Será impresso no console o primeiro numero junto com o segundo numero e não o valor da soma deles.

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = Number(primeiroNumero) + Number(segundoNumero)

// console.log(soma)


// Exercicios de escrita de codigo

/* 1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

*/

const idade = prompt("Qual a sua idade?")

const idadeAmizade = prompt("Qaul é a idade do seu ou sua melhor amigo(a)?")

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmizade)

console.log(idade - idadeAmizade)


/* 2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */


let par = prompt("Digite um número par:")
console.log(Number(par)%2)

// O resto de toda divisão de um numero par por 2 é igual a 0.

// o resto da divisão será 1.

/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas
*/

let idades = prompt("Digite a sua idade:")
console.log("A sua idade em meses é:", Number(idades)*12, "meses.")
console.log("A sua idade em dias é:", Number(idades)*365, "dias.")
console.log("A sua idade em horas é:", Number(idades)*365*12, "horas.")

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.

*/

let numero1 = prompt("Digite um numero: ")
let numero2 = prompt("Digite outro numero: ")

console.log( numero1 > numero2)
console.log( numero1 === numero2)
console.log(numero1%numero2 === 0)
console.log(numero2%numero1 === 0)