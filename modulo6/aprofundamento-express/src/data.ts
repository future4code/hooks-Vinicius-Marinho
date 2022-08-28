type ToDo= {
     userId: number,
    id: number | string,
    title: string,
    completed: boolean
}
type ListToDo = ToDo[]

export const listTodo: ListToDo = [
    {
        userId: 1,
        id: 1,
        title: "estudar",
        completed: true  
    },
    {
        userId: 1,
        id: 2,
        title: "trabalhar",
        completed: false  
    },
    {
        userId: 1,
        id: 3,
        title: "passear",
        completed: true  
    },
    {
        userId: 1,
        id: 4,
        title: "limpar a casa",
        completed: false  
    },
    {
        userId: 2,
        id: 5,
        title: "estudar",
        completed: false  
    },
    {
        userId: 2,
        id: 6,
        title: "trabalhar",
        completed: true  
    },
    {
        userId: 2,
        id: 7,
        title: "passear",
        completed: false  
    },
    {
        userId: 2,
        id: 8,
        title: "limpar a casa",
        completed: true  
    },
    {
        userId: 3,
        id: 9,
        title: "fazer compras",
        completed: true  
    },
    {
        userId: 3,
        id: 10,
        title: "comprar oculos",
        completed: false  
    },
    {
        userId: 3,
        id: 11,
        title: "pagar contas",
        completed: true  
    },
    {
        userId: 3,
        id: 12,
        title: "ir ao medico",
        completed: false  
    },
    {
        userId: 4,
        id: 13,
        title: "fazer compras",
        completed: false  
    },
    {
        userId: 4,
        id: 14,
        title: "comprar oculos",
        completed: true  
    },
    {
        userId: 4,
        id: 15,
        title: "pagar contas",
        completed: false  
    },
    {
        userId: 4,
        id: 16,
        title: "ir ao medico",
        completed: true  
    },
]