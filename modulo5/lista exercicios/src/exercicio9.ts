const anagrama = (palavra:string):number=>{
    const quantLetras = palavra.length

    let resultado = quantLetras;
    for (let i = 1; i < quantLetras; i++) {
        resultado *= i;
    }
    
    return(resultado)
}

console.log(anagrama("amores"))