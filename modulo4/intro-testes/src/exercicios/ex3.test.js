import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados([1,2,1]);
        expect(duplicado).toEqual(true);
    })

    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados(["a", "a", "b", "c"]);
        expect(duplicado).toEqual(true);
    })

    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(duplicado).toEqual(true);
    })

    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados([]);
        expect(duplicado).toEqual(false);
    })
    
    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados([1]);
        expect(duplicado).toEqual(false);
    })
    
    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados([1, 2, 3]);
        expect(duplicado).toEqual(false);
    })
    
    it("checa duplicidade", () => {
        const duplicado = checaItensDuplicados(["f", "d", "e", "f"]);
        expect(duplicado).toEqual(true);
    })
});
