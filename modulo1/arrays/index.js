/*
1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa


let array
console.log('a. ', array)

a. undefined

array = null
console.log('b. ', array)

b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

c. 11

let i = 0
console.log('d. ', array[i])

d. 3

array[i+1] = 19
console.log('e. ', array)

e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)

f. 9


2. Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

SUBI NUM ÔNIBUS EM MIRROCOS  27

*/

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
 //   O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


 const nomeDoUsuario = prompt("Qual é o seu nome?")
 const emailDoUsuario = prompt("Qual é o seu email?")
 
 console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
  

 let array = ["salpicao", "pizza", "hamburguer", "picanha", "churrasco"]

//    a) Imprima no console o array completo

    console.log(array)
    
//    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    console.log("Essas são minhas comidas preferidas:")
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])
    console.log(array[4])

//    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

    let comidaUsuario = prompt("Qual a sua comida favorita?")

    let array2 = array.splice(1,4)

    array.push(comidaUsuario)

    console.log(array2)

    array.push(array2[1], array2[2], array2[3])
    
    console.log(array)



// 3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    let listaDeTarefas
    
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    let tarefa1 = prompt("Digite uma tarefa")
    let tarefa2 = prompt("Digite outra tarefa")
    let tarefa3 = prompt("Digite mais uma tarefa")
    
    let tarefas = [tarefa1, tarefa2, tarefa3]
    
    listaDeTarefas = tarefas
    
// c) Imprima o array no console

console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    let jaFeito = prompt("Digite o indice de uma tarefa já realizada: (0, 1 ou 2)" )

// e) Remova da lista o item de índice que o usuário escolheu.

    listaDeTarefas.splice(jaFeito,1)

// f) Imprima o array no console

    console.log(listaDeTarefas)












