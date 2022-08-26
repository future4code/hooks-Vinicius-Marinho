export enum USER_TYPE{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number | string, 
    name: string, 
    email: string, 
    type: USER_TYPE,
    age: number
}



export let users :User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_TYPE.ADMIN,
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_TYPE.ADMIN,
        age: 36,
    },
    {
        id: 3,
        name: "Roberto",
        email: "roberto@email.com",
        type: USER_TYPE.ADMIN,
        age: 21,
    },
    {
        id: 4,
        name: "Ronaldo",
        email: "ronaldo@email.com",
        type: USER_TYPE.NORMAL,
        age: 17,
    },
    {
        id: 5,
        name: "Marta",
        email: "marta@email.com",
        type: USER_TYPE.ADMIN,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_TYPE.NORMAL,
        age: 60,
    },
]

