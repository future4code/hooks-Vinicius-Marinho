function doisNumeros (n1:number, n2:number):string{
    let soma: number = n1+n2;
    let sub: number = n1-n2;
    let mult: number = n1*n2;
    let div: number = n1/n2;
    let maiorNumbero: number;

    if(n1>n2){
        maiorNumbero = n1
    } else{
        maiorNumbero = n2
    }

    return (`A soma dos números é ${soma}, a subtração dos número é ${sub}, a multiplicação dos números é ${mult}, a divisão dos números é ${div}, o maior número é ${maiorNumbero} `)
}

console.log(doisNumeros(10,20))