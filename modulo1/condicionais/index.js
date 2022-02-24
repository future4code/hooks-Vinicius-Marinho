// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. Leia o código abaixo:
    
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)
    
//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }
    
//     a) Explique o que o código faz. Qual o teste que ele realiza? 
//          O código recebe um número do usuário e testa se ele é par ou nao, retornando a mensagem se passou ou nao no teste de ser um numero par
    
//     b) Para que tipos de números ele imprime no console "Passou no teste"? 
//      Para os numeros pares

//     c) Para que tipos de números a mensagem é "Não passou no teste"?
//      Para os numero impares


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas 
// de um supermercado:
    
//     let fruta = prompt("Escolha uma fruta")
//     let preco
//     switch (fruta) {
//       case "Laranja":
//         preco = 3.5
//         break;
//       case "Maçã":
//         preco = 2.25
//         break;
//       case "Uva":
//         preco = 0.30
//         break;
//       case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM c.
//       default:
//         preco = 5
//         break;
//     }
//     console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
//     a) Para que serve o código acima?

//          Para informar o preço de uma fruta escolhida pelo usuario.
    
//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
//          O preço da fruta Maçã é R$ 2.25

//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console
// se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//          O preço da fruta Pêra é R$ 5


// 3. Leia o código abaixo:
    
    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)
    
//     a) O que a primeira linha está fazendo?

//          Recebendo um numero do usuario
    
//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//          Esse número passou no teste. Se fosse -10 não apareceria nada
    
//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
            
//          Sim. No segundo console.log ele vai dizer que mensgaem não está definido, pois é uma variavel local.

// EXERCICIOS DE ESCRITA DE CODIGO

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
// (apenas maiores de idade).
    
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima 
// no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`




function podeDirigir(){
    let idade = Number(prompt("Qual a sua idade?"))    
   
    if (idade >= 18)

        console.log("Você pode dirigir.")
    else{
        console.log("Você não pode dirigir.")
    }

}
podeDirigir()


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem 
// "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

function verificarTurno(){

let turno = prompt("Qaul turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turno === "M") {
    console.log("Bom Dia!")
} else if (turno === "V") {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}
}

verificarTurno()

// 3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

function verificarTurno1(){

    let turno = prompt("Qaul turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")
    
    switch (turno) {
        case "M": 
        console.log("Bom Dia!")
            break;
        
        case "V": 
        console.log("Boa Tarde!")
            break;
    
        default: 
        console.log("Boa Noite!")
            break;
    }
}
    
verificarTurno1()

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
// então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

function verificarFilme (){

    let genero = prompt("Qual o gênero do filme?")
    let preco = Number(prompt("Qaul o preço do ingresso?"))

    if (genero === "fantasia"  && preco < 15){
        console.log("Bom Filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}

verificarFilme()

// DESAFIOS

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console 
// as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.


function verificarFilme1 (){

    let genero = prompt("Qual o gênero do filme?")
    let preco = Number(prompt("Qaul o preço do ingresso?"))

    if (genero === "fantasia"  && preco < 15){
        let lanchinho = [
            prompt("Qual lanchinho vai comprar?")
        ]
        
        
        console.log(`Bom filme! e Aproveite o(a) seu(sua) ${lanchinho}`)
    } else {
        console.log("Escolha outro filme :(")
    }
}

verificarFilme1()

// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
//      Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
//     Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
//     (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e 
//     exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços 
//     devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

function venderIngressos (){

    let nomeCompleto = prompt("Digite seu nome completo: ")
    let tipoJogo = prompt("Qual o tipo de jogo? (IN indica internacional e DO indica doméstico)")
    let etapaJogo = prompt("Qual etapa? (SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final)")
    let categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4)"))
    let quant = Number(prompt("Quantos ingressos?"))
    let precoIngresso
    let precoTotal

    if (tipoJogo === "DO" && etapaJogo === "SF" && categoria == 1) {
        
        precoIngresso = 1320
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Nacional`)
        console.log(`Etapa do Jogo: Semi-Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
        console.log(`Valor Total: R$ ${precoTotal}`)
    } else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria == 2){

    precoIngresso = 880
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
    console.log(`Valor Total: R$ ${precoTotal}`)
    } else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria == 3){

    precoIngresso = 550
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
    console.log(`Valor Total: R$ ${precoTotal}`)

    }else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria == 4){

        precoIngresso = 220
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Nacional`)
        console.log(`Etapa do Jogo: Semi-Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
        console.log(`Valor Total: R$ ${precoTotal}`)

    } else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria == 1) {
        
        precoIngresso = 660
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Nacional`)
        console.log(`Etapa do Jogo: Decisão 3º Lugar`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
        console.log(`Valor Total: R$ ${precoTotal}`)

    } else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria == 2){

    precoIngresso = 440
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: Decisão 3º Lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
    console.log(`Valor Total: R$ ${precoTotal}`)

    } else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria == 3){

    precoIngresso = 330
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: Decisão 3º Lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
    console.log(`Valor Total: R$ ${precoTotal}`)

    }else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria == 4){

        precoIngresso = 170
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Nacional`)
        console.log(`Etapa do Jogo: Decisão 3º Lugar`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
        console.log(`Valor Total: R$ ${precoTotal}`)

    }else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria == 1) {
        
        precoIngresso = 1980
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Nacional`)
        console.log(`Etapa do Jogo: Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
        console.log(`Valor Total: R$ ${precoTotal}`)

    } else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria == 2){

    precoIngresso = 1320
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
    console.log(`Valor Total: R$ ${precoTotal}`)

    } else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria == 3){

    precoIngresso = 880
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Nacional`)
    console.log(`Etapa do Jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
    console.log(`Valor Total: R$ ${precoTotal}`)

    }else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria == 4){

        precoIngresso = 330
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Nacional`)
        console.log(`Etapa do Jogo: Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: R$ ${precoIngresso}`)
        console.log(`Valor Total: R$ ${precoTotal}`)

    }else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria == 1) {
        
        precoIngresso = 1320 *4.1
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Internacional`)
        console.log(`Etapa do Jogo: Semi-Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
        console.log(`Valor Total: U$ ${precoTotal}`)

    } else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria == 2){

    precoIngresso = 880 * 4.1
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Internacional`)
    console.log(`Etapa do Jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
    console.log(`Valor Total: U$ ${precoTotal}`)

    } else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria == 3){

    precoIngresso = 550 * 4.1
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Internacional`)
    console.log(`Etapa do Jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
    console.log(`Valor Total: U$ ${precoTotal}`)

    }else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria == 4){

        precoIngresso = 220 * 4.1
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Internacional`)
        console.log(`Etapa do Jogo: Semi-Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
        console.log(`Valor Total: U$ ${precoTotal}`)

    } else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria == 1) {
        
        precoIngresso = 660 *4.1
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Internacional`)
        console.log(`Etapa do Jogo: Decisão 3º Lugar`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
        console.log(`Valor Total: U$ ${precoTotal}`)

    } else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria == 2){

    precoIngresso = 440 * 4.1
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Internacional`)
    console.log(`Etapa do Jogo: Decisão 3º Lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
    console.log(`Valor Total: U$ ${precoTotal}`)

    } else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria == 3){

    precoIngresso = 330 & 4.1
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Internacional`)
    console.log(`Etapa do Jogo: Decisão 3º Lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
    console.log(`Valor Total: U$ ${precoTotal}`)

    }else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria == 4){

        precoIngresso = 170 * 4.1
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Internacional`)
        console.log(`Etapa do Jogo: Decisão 3º Lugar`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
        console.log(`Valor Total: U$ ${precoTotal}`)

    }else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria == 1) {
        
        precoIngresso = 1980 * 4.1
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Internacional`)
        console.log(`Etapa do Jogo: Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
        console.log(`Valor Total: U$ ${precoTotal}`)

    } else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria == 2){

    precoIngresso = 1320 * 4.1
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Internacional`)
    console.log(`Etapa do Jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
    console.log(`Valor Total: U$ ${precoTotal}`)

    } else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria == 3){

    precoIngresso = 880 * 4.1
    precoTotal = precoIngresso * quant
    
    console.log(`---Dados da compra---`)
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de Jogo: Internacional`)
    console.log(`Etapa do Jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quant}`)
    console.log(`---Valores---`)
    console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
    console.log(`Valor Total: U$ ${precoTotal}`)

    }else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria == 4){

        precoIngresso = 330 * 4.1
        precoTotal = precoIngresso * quant
        
        console.log(`---Dados da compra---`)
        console.log(`Nome do cliente: ${nomeCompleto}`)
        console.log(`Tipo de Jogo: Internacional`)
        console.log(`Etapa do Jogo: Final`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de ingressos: ${quant}`)
        console.log(`---Valores---`)
        console.log(`Valor do Ingresso: U$ ${precoIngresso}`)
        console.log(`Valor Total: U$ ${precoTotal}`)

    }

}

venderIngressos()