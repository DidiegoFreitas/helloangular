export interface Produto{
    id: number;
    nome: string;
    preco: number;
    descricao: string;
}

export const produtos = [
    {
        id: 1,
        nome: 'omo',
        preco: 120,
        descricao: 'Serve para tirar machas',
        carac:[
            '1 caracteristica',
            '2 caracteristica',
            '3 caracteristica',
            '4 caracteristica',
        ]
    },
    {
        id: 2,
        nome: 'caneta',
        preco: 599,
        descricao: 'escreve'
    },
    {
        id: 3,
        nome: 'tenis',
        preco: 1200,
        descricao: 'Serve para andar',
        carac:[
            '1 caracteristica',
            '2 caracteristica',
            '3 caracteristica',
            '4 caracteristica',
        ]
    }
]
export const produtosInfo: Array<string[]> = [];

produtosInfo[1] = [
    '1 caracteristica',
    '2 caracteristica',
    '3 caracteristica',
    '4 caracteristica',
]
