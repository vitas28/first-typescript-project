export interface IUser {
  id: number
  name: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export type UserProps = {
  users: IUser[]
}

type Geo = {
  lat: string
  lng: string
}

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

type Company = {
  name: string
  catchPhrase: string
  bs: string
}

