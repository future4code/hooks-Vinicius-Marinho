// 1. resposta: 10 5
// 2. resposta: 20 10 10
// 3. resposta: melhor nome para variavel p seria horasTrabalhadas e melhor nome para variavel t seria salarioDia

// exercicio de codigos 1:
let nome
let idade

console.log(typeof nome)

console.log(typeof idade)


// foi escrito tipo undefined, porque não atribui valores para as variaveis.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// agora que o usuário digitou o nome e a idade e foram atribuidos valores para eles é possivel identificar o tipo das variaveis.

console.log("Olá", nome, ", você tem", idade, "anos")


// exercicio de codigo 2:

roupaAzul = prompt("Você está usando roupa azul?")

console.log("Você está usando roupa azul?", roupaAzul)

roupaPreta = prompt("Você está usando roupa preta?")

console.log("Você está usando roupa preta?", roupaPreta)

roupaVerde = prompt("Você está usando roupa verde?")

console.log("Você está usando roupa verde?", roupaVerde)

// exercicio de codigo 3:

let a
let b 
let c

a = prompt("Digite um valor para a")
b = prompt("Digite um valor para b")

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
