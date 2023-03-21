export interface Types {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface ICBOption {
  label: string;
  value: string;
  disabled?: boolean;
}
export interface IUser {
  email: string;
  password: string;
}
export interface IOrderFields {
  name: string;
  recipient_name: string;
  who_has_to: string;
  event: string;
  date: string;
  artist: string;
  genre: string[];
  vocal: string;
  mood: string[];
  temp: string;
  about: string;
}
export interface IOrder {
  order: IOrder;
}
export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
