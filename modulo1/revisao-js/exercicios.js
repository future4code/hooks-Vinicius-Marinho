// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   function sortFunction(a,b){
      return(a-b)
   }
   return array.sort(sortFunction)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
   const numeroPares = array.filter((numeros) => {
      if (numeros % 2 === 0){
         return numeros
      }
   })
  return numeroPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   const numeroPares = array.filter((numeros) => {
      if (numeros % 2 === 0){
         return numeros
      }
   })

   const numerosParesQuadrados = numeroPares.map((numeros) =>{
      return numeros*numeros
   })
   return numerosParesQuadrados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

   let maiorNumero = 0

   for (let numero of array){
      if (numero > maiorNumero) {
         maiorNumero = numero
      }
   }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero
   let maiorDivisivelPorMenor
   let diferenca
   let saida

   if (num1 > num2) {
      maiorNumero = num1
      if(num1 % num2 === 0){
         maiorDivisivelPorMenor = true
      } else  {
         maiorDivisivelPorMenor = false
      }
      diferenca = num1-num2

   } else {
      maiorNumero = num2
      if(num2 % num1 === 0){
         maiorDivisivelPorMenor = true
      } else  {
         maiorDivisivelPorMenor = false
      }
      diferenca = num2 - num1
   }

   saida = {

      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorDivisivelPorMenor,
      diferenca: diferenca
   }
    
   return saida

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let primeirosPares =[]
   for(let i =0; i<n; i+2){
      primeirosPares.push(i)
   }
      
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if(ladoA === ladoB && ladoB === ladoC){
      return "Equilátero"
   } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
      return "Isósceles"
   } else {
      return "Escaleno"
   }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   
   let novoArray=[]
   let arraySegundoMaiorESegundoMenor=[]
   function sortFunction(a,b){
      return(a-b)
   }
   novoArray = array.sort(sortFunction)
   arraySegundoMaiorESegundoMenor = [novoArray[1], novoArray[novoArray.length-2]]
   return arraySegundoMaiorESegundoMenor.reverse()
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let quantAtores = filme.atores.length
  console.log(quantAtores)
   let chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonimizada = {
      ...pessoa,
      nome: "ANÔNIMO"
   }
   return pessoaAnonimizada
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
   const pessoasAutorizadas = pessoas.filter((pessoa)=>{
      if(pessoa.idade >14 && pessoa.idade < 60 && pessoa.altura > 1.5 ){
      return pessoa
      }
   })
   
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const pessoasNaoAutorizadas = pessoas.filter((pessoa)=>{
      if(pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5 ){
      return pessoa
      }
   })
   
   return pessoasNaoAutorizadas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {


   
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

   consultas.sort(function(a, b) {
      if(a.nome < b.nome) {
        return -1;
      } else {
        return true;
      }
    })
    return consultas
   }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}