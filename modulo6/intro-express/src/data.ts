type User = {
    id:number,
    name: string,
    phone: string,
    email:string,
    website: string
}

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
   
}

export let user: User[] = [
    {   id:1,
        name: "vinicius",
        phone: "98426-7913",
        email: "vinicius@labenu.com",
        website: "www.vinicius.labenu.com.br",
    },
    {   id:2,
        name: "andre",
        phone: "98624-9731",
        email: "andre@labenu.com",
        website: "www.andre.labenu.com.br",
    },
    {   id:3,
        name: "bruno",
        phone: "98246-3917",
        email: "bruno@labenu.com",
        website: "www.andre.labenu.com.br",
    },
    {   id:4,
        name: "paula",
        phone: "98542-3659",
        email: "paula@labenu.com",
        website: "www.paula.labenu.com.br",
    },
    {   id:5,
        name: "joana",
        phone: "98756-4231",
        email: "joana@labenu.com",
        website: "www.joana.labenu.com.br",
    },
    {   id:6,
        name: "wilson",
        phone: "97856-4231",
        email: "wilson@labenu.com",
        website: "www.wilson.labenu.com.br",
    }
    
]

//prefiro criar o array de post fora do array de usuarios, pois acho que fica mais organizado assim.

export let posts: Post[]=[
    {
        userId: 1,
        id: 1,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 1,
        id: 2,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 1,
        id: 3,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 1,
        id: 4,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 1,
        id: 5,
        title:"titulo",
        body:"olkdhsakldshk"
    }, 
    {
        userId: 2,
        id: 1,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 2,
        id: 2,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 2,
        id: 3,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 2,
        id: 4,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 2,
        id: 5,
        title:"titulo",
        body:"olkdhsakldshk"
    }, 
    {
        userId: 3,
        id: 1,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 3,
        id: 2,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 3,
        id: 3,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 3,
        id: 4,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 3,
        id: 5,
        title:"titulo",
        body:"olkdhsakldshk"
    }, 
    {
        userId: 4,
        id: 1,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 4,
        id: 2,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 4,
        id: 3,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 4,
        id: 4,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 4,
        id: 5,
        title:"titulo",
        body:"olkdhsakldshk"
    }, 
    {
        userId: 5,
        id: 1,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 5,
        id: 2,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 5,
        id: 3,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 5,
        id: 4,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 5,
        id: 5,
        title:"titulo",
        body:"olkdhsakldshk"
    }, 
    {
        userId: 6,
        id: 1,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 6,
        id: 2,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 6,
        id: 3,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 6,
        id: 4,
        title:"titulo",
        body:"olkdhsakldshk"
    },
    {
        userId: 6,
        id: 5,
        title:"titulo",
        body:"olkdhsakldshk"
    }, 
]
