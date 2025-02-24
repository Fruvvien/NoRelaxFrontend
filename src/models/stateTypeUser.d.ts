export interface IUsersTokenData{
    id:number,
    token: string,
}

type UsersTokenDataState = {
    usersTokensData: IUsersTokenData[]
}


type UsersTokenDataAction ={
    type: string,
    usersTokenData: IUsersTokenData
}

type DispatchType = (args: UsersTokenDataAction) => UsersTokenDataAction

