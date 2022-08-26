export type Transation ={
    valor: number,
    data: string,
    description: string
}

export type UserAcount = {
    userId: string,
    id: string,
    name: string,
    cpf: string,
    dataNascimento: string,
    saldo: number
    extrato: Transation

}



export const arrayUsers:UserAcount[] = [
    {
        userId: "1",
        id: "1",
        name: "antonio",
        cpf: "111.222.333-70",
        dataNascimento: "21/11/1991",
        saldo: 100,
        extrato: {
            valor: 0,
            data: "",
            description:""
            }
     }]