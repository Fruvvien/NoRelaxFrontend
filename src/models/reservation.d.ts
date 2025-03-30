export  interface IReservation{
    id?: number,
    isReserved: boolean,
    reservationDate:string | undefined,
    userId: string | null,
    tableNumber: number | undefined
}