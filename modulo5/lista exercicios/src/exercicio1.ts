

function apresentaçao(nome:string, dataNascimento:string):string {
    
    let dataSeparada = dataNascimento.split("/",)
    let dia: string = dataSeparada[0]
    let mes1: string = dataSeparada[1]
    let ano: string = dataSeparada[2]
    let mes:string = ""

    if(mes1 === "1"){
         mes = "janeiro"
    } else if(mes1 === "2"){
         mes = "fevereiro"
    } else if(mes1 === "3"){
         mes = "março"
    } else if(mes1 === "4"){
         mes = "abril"
    } else if(mes1 === "5"){
         mes = "maio"
    } else if(mes1 === "6"){
         mes = "junho"
    } else if(mes1 === "7"){
         mes = "julho"
    } else if(mes1 === "8"){
         mes = "agosto"
    } else if(mes1 === "9"){
         mes = "setembro"
    } else if(mes1 === "10"){
         mes = "outubro"
    } else if(mes1 === "11"){
         mes = "novembro"
    }else {
         mes = "dezembro"
    }


    return (`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}

console.log(apresentaçao("vinicius", "21/11/1991")) 