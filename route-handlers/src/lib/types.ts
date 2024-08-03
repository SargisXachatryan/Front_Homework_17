export interface IUser {
    id: number
    name: string
    surname: string
    salary: number
}

export type InputUser = Omit<IUser, 'id'>

export interface Props {
    params: { id: number }
}