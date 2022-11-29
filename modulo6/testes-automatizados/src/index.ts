export interface UserPurchase {
    name:string,
    balance: number
}

export const purchase = (user: UserPurchase, value: number): UserPurchase | undefined => {
    if( user.balance >= value){
        return {...user, balance: user.balance-value}
    }
    return undefined
}   