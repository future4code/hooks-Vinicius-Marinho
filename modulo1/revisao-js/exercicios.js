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
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}