export  interface IReservation{
    id?: number,
    isReserved: boolean,
    reservationDate: Date | null,
    userId: string | null
}