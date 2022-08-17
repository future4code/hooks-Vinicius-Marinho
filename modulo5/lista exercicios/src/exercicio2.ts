

function imprimeTipo(parametro:any):void{
    const tipoVariavel:any = typeof parametro

    return(tipoVariavel)
}

console.log(imprimeTipo("ola"))