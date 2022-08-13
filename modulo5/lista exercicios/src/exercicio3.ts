enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoLançamento: number,
    genero: GENERO
    pontos?: number
}

function infoFIlme(nome: string, ano: number, genero: GENERO, pontos?:number):Filme {
    let filme:Filme

    if(pontos){
        filme = {nome: nome, anoLançamento: ano, genero: genero, pontos: pontos}
        return filme
    }else{
        filme = {nome: nome, anoLançamento: ano, genero: genero}
        return filme
    }
    
    
}

console.log(infoFIlme("Duna", 2021, GENERO.ACAO))