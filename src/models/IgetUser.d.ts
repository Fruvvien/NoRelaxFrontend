import { IReservation } from "./reservation";

export interface IGetUser{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    accountType: boolean,
    createdAt: string,
    accountIsActive: boolean,
    reservation: IReservation[],
    birthDay: string,
    phoneNumber: string,
}