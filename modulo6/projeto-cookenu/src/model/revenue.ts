export type revenue ={
    id: string,
    title: string,
    description: string,
    date: Date,
}

export interface RevenueInputDTO{
    title: string,
    description:string,
    token: string
}

export interface GetRevenuesUserInputDTO {
    id: string,
    token: string
  }