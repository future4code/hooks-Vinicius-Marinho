//a) 

let minhaString: string = "Vinicius"

// minhaString = 3

// Mensagem de erro avisando que não podemos atribuir tipo number a um tipo string.

//b)

// let meuNumero: number

let meuNumero: number | string= "30"

//Utilizando Union types.

//c)

// vermelho, laranja, amarelo, verde, azul, anil e violeta
enum coresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL  = "anil",
    VIOLETA = "violeta"
}


type Pessoa = {
    nome:string,
    idade: number,
    corFavorita: coresArcoIris
}

const user: Pessoa ={
    nome: "Vinicius",
    idade: 30,
    corFavorita: coresArcoIris.ANIL
}

const user1: Pessoa ={
    nome: "Antonieta",
    idade: 45,
    corFavorita: coresArcoIris.VERDE
}

const user2: Pessoa ={
    nome: "Andre",
    idade: 18,
    corFavorita: coresArcoIris.AMARELO
}

console.log(user2)