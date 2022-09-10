export type UserResponsible = {
    id: string,
    name: string
}

export type IUser ={
     taskId: string,
     title: string,
     description: string,
     limitDate: string,
     creatorUserId: string,
     creatorUserNickname: string,
    responsibleUsers: UserResponsible[]
}