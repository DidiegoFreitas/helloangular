export interface Produto{
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    qtd: number;
    carac: Array<string>;
};

export const colsTable = [
    ['id','ID Produto'],
    ['nome','Nome'],
    ['preco','Preco Unitário'],
    ['descricao','Descrição'],
];

export const lista1 = [
    {
        id: 1,
        nome: 'Omo',
        preco: 120,
        descricao: 'Serve para tirar machas',
        qtd: 300,
        carac:[
            'Fornecedor Belo Horizonte',
            'Fornecedor Internacional (Aliexpress)',
            'Fazer uma remeça maior',
        ]
    },
    {
        id: 2,
        nome: 'Caneta',
        preco: 599,
        descricao: 'escreve',
        qtd: 1500,
        carac:[]
    },
    {
        id: 3,
        nome: 'Tenis',
        preco: 1200,
        descricao: 'Serve para andar',
        qtd: 100,
        carac:[
            'Fornecedor Rio Grande do Sul',
            'Fornecedor Natal',
            'Fazer uma remeça maior',
        ]
    }
];

export const lista2 = [
    {
        id: 1,
        nome: 'Omo',
        preco: 120,
        descricao: 'Serve para tirar machas',
        qtd: 1100,
        carac:[
            'Fazer uma remeça maior',
            'Fornecedor São Paulo',
            'Fornecedor Rio Grande do Sul',
        ]
    },
    {
        id: 2,
        nome: 'Caneta',
        preco: 8000,
        descricao: 'escreve',
        qtd: 1500,
        carac:[]
    },
    {
        id: 3,
        nome: 'Tenis',
        preco: 1200,
        descricao: 'Serve para andar',
        qtd: 700,
        carac:[
            'Fornecedor Rio Grande do Sul',
            'Fornecedor Amazonas',
            'Fazer uma remeça maior',
        ]
    },
    {
        id: 4,
        nome: 'Clear',
        preco: 300,
        descricao: 'Serve para caspas',
        qtd: 1000,
        carac:[]
    },
    {
        id: 5,
        nome: 'Nivea',
        preco: 734,
        descricao: 'Marca de produtos de beleza',
        qtd: 690,
        carac:[
            'Fornecedor Rio Grande do Sul',
            'Fazer uma remeça maior',
            'Fornecedor Virtual (Mercado Livre)',
        ]
    },
    {
        id: 6,
        nome: 'Nike',
        preco: 463,
        descricao: 'É só status!',
        qtd: 200,
        carac:[
            'Fornecedor Duvidoso',
            'Fazer uma remeça maior',
            'Fornecedor Rio Grande do Sul',
        ]
    }
];