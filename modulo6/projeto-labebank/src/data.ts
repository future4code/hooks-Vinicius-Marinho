export type Transação = {
    valor: number,
    data:  string,
    descrição: string
}


export type User = {
    id: string,
    name: string,
    cpf: string,
    nascimento: string,
    saldo: number,
    extrato: Transação[]
}

export const arrayUsers:User[] = [{
    id: "1",
    name: "vinicius",
    cpf: "111.222.333-70",
    nascimento: "21/11/1991",
    saldo: 0,
    extrato: [{valor: 0, data: "24/08/2022", descrição: "Depósito de dinheiro"}]
},
{
    id: "2",
    name: "antonio",
    cpf: "111.444.333-70",
    nascimento: "21/11/1991",
    saldo: 0,
    extrato: [{valor: 0, data: "24/08/2022", descrição: "Depósito de dinheiro"}]
},
{
    id: "3",
    name: "josé",
    cpf: "111.555.333-70",
    nascimento: "21/11/1991",
    saldo: 0,
    extrato: [{valor: 0, data: "24/08/2022", descrição: "Depósito de dinheiro"}]
},
{
    id: "4",
    name: "byanca",
    cpf: "111.666.333-70",
    nascimento: "21/11/1991",
    saldo: 0,
    extrato: [{valor: 0, data: "24/08/2022", descrição: "Depósito de dinheiro"}]
},
{
    id: "5",
    name: "danielle",
    cpf: "111.777.333-70",
    nascimento: "21/11/1991",
    saldo: 0,
    extrato: [{valor: 0, data: "24/08/2022", descrição: "Depósito de dinheiro"}]
},
]