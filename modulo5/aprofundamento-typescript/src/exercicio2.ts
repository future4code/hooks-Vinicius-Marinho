type Estatisticas={maior:number ,menor:number,media:number}

type Amostra= {
    numeros:number[]
    obterEstatisticas(numeros:number[]):Estatisticas
}

function obterEstatisticas(numeros:number[]):Estatisticas{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([21,10,2,30,3,4,5,6,7]))