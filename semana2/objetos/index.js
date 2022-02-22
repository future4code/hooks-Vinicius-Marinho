//  1. Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

//          Matheus Nachtergaele
//          Virginia Cavendish
//          canal: "Globo", horario: "14h"

// 2. Leia o código abaixo
    
    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro)
    // console.log(gato)
    // console.log(tartaruga)


//     a) O que vai ser impresso no console?

//      {nome: "Juca", 	idade: 3, raca: "SRD"}

//      {nome: "Juba", 	idade: 3, raca: "SRD"}

//      {nome: "Juco", 	idade: 3, raca: "SRD"}

    
//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

            // Copia todas as informações do objeto.



// 3. Leia o código abaixo
    

// function minhaFuncao(objeto, propriedade) {
// return objeto[propriedade]
// }
            
// const pessoa = {
// nome: "Caio", 
// idade: 23, 
// backender: false
// }
            
// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

            
// a) O que vai ser impresso no console?

//  false
//  undefined
            
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// No primeiro console.log ele busca o valor da proprieda backender. já no segundo ele busca tbm, porém como ela não foi
//declarada ainda, ele não consegue exibir nenhum valor.




// EXERCICIOS DE ESCRITA

// 1. 1. Resolva os passos a seguir: 
    
//    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const pessoa = {
    nome: "Larissa",
    apelidos: ["Larisinha", "Talarissa", "Tata"]
}

function imprime(objeto) {
    
    const novaPessoa = {
        ...objeto
    }
    
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprime(pessoa)


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto


const pessoa2 ={
    ...pessoa,
    apelidos: ["Linda", "Maravilhosa", "Perfeita"]
}

imprime(pessoa2)

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
const pessoa3 = {
    nome: "Vinicius",
    idade: 30,
    profissao: "Estudannte"
}

const pessoa4 = {
    nome: "Larissa",
    idade: 29,
    profissao: "Fiscal"
}

//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

function retronaArray(objeto) {
    const pessoa ={
        ...objeto,
    }

    


    const array = [pessoa.nome, pessoa.idade, pessoa.profissao]
    const tamanhoNome = array[0].length
    const tamanhoProfissao = array[2].length

    const array2 = [array[0], tamanhoNome, array[1], array[2], tamanhoProfissao]

    console.log(array2)
   
}


retronaArray(pessoa4)


// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e
//      disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "mamao",
    disponibilidade: true
}

const fruta3 = {
    nome: "uva",
    disponibilidade: true
}
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
//     Invoque essa função passando os três objetos criados.

function compras(objeto, objeto1, objeto2) {

    const frutas ={
        ...objeto,
        ...objeto1,
        ...objeto2
    }

    carrinho.push(objeto.nome, objeto1.nome, objeto2.nome)

}
    
compras(fruta1, fruta2, fruta3)

//     d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)















