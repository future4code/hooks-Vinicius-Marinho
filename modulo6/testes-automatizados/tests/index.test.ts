import { verifyAge, UserCasino, NACIONALITY, LOCATION } from './../src/exercicio3';
import { purchase } from "../src"

describe("Teste da função purchase", ()=>{
    
    test("usuário com o saldo maior do que o valor de compra", ()=>{
    
    const result =  purchase({name: "Andre",balance: 1000},100)
    expect(result).toEqual({name:"Andre", balance:900})
   })

   test("usuário com o saldo igual ao valor de compra", ()=>{
    
    const result =  purchase({name: "Andre",balance: 1000},1000)
    expect(result).toEqual({name:"Andre", balance:0})
   })

   test("usuário com o saldo menor do que o valor de compra", ()=>{
    
    const result =  purchase({name: "Andre",balance: 1000},2000)
    expect(result).toBe(undefined)
   })
})

describe("Teste da função verifyAge", ()=>{

    test("usuário brasileiro que possa entrar em um estabelecimento no Brasil",()=>{
        const users:UserCasino[] =[{name:"Vinicius",age:30,nacionality: NACIONALITY.BRAZILIAN}]
        const casino = {name:"Sierra", location: LOCATION.BRAZIL}
        const result = verifyAge(casino,users)
        
        expect(result).toEqual({
            brazilians: { allowed: [ 'Vinicius' ], unallowed: [] },
            americans: { allowed: [], unallowed: [] }
        })
    })

    test("usuário americano que possa entrar em um estabelecimento no Brasil",()=>{
        const users:UserCasino[] =[{name:"João",age:30,nacionality: NACIONALITY.AMERICAN}]
        const casino = {name:"Sierra", location: LOCATION.BRAZIL}
        const result = verifyAge(casino,users)
        console.log(result)
        expect(result).toEqual({
            brazilians: { allowed: [ ], unallowed: [] },
            americans: { allowed: ['João'], unallowed: [] }
        })
    })

    test("dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.",()=>{
        const users:UserCasino[] =[
            {name:"João",age:19,nacionality: NACIONALITY.BRAZILIAN},
            {name:"Vinicius",age:19,nacionality: NACIONALITY.BRAZILIAN},
            {name:"Antonio",age:19,nacionality: NACIONALITY.AMERICAN},
            {name:"Jose",age:19,nacionality: NACIONALITY.AMERICAN},
        ]
        const casino = {name:"Sierra", location: LOCATION.EUA}
        const result = verifyAge(casino,users)
        console.log(result)
        expect(result).toEqual({
            brazilians: { allowed: [ ], unallowed: ["João","Vinicius"] },
            americans: { allowed: [], unallowed: ["Antonio","Jose"] }
        })
    })

    test("dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.",()=>{
        const users:UserCasino[] =[
            {name:"João",age:19,nacionality: NACIONALITY.BRAZILIAN},
            {name:"Vinicius",age:19,nacionality: NACIONALITY.BRAZILIAN},
            {name:"Antonio",age:21,nacionality: NACIONALITY.AMERICAN},
            {name:"Jose",age:21,nacionality: NACIONALITY.AMERICAN},
        ]
        const casino = {name:"Sierra", location: LOCATION.EUA}
        const result = verifyAge(casino,users)
        console.log(result)
        expect(result).toEqual({
            brazilians: { allowed: [ ], unallowed: ["João","Vinicius"] },
            americans: { allowed: ["Antonio","Jose"], unallowed: [] }
        })
    })
    
})