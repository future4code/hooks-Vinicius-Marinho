function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  
  let precoTotal = 0
  
  if(quantidade < 12){
    precoTotal = 1.3*quantidade
  } else {
    precoTotal = 1.00*quantidade
  }
  return precoTotal
}