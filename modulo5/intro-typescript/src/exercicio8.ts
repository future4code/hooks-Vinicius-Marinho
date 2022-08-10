function inverteString(palavra: string):string{
    const palavraReversa = palavra.split("").reverse().join("").toUpperCase()
    
    return palavraReversa
}

console.log(inverteString("roma"))