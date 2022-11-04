export type user = {
   id: string
   email: string
   password: string
}

export interface UserInputDTO {
   email: string,
   password: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface GetProfileInputDTO {
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export type AuthenticationData = {
   id: string
}