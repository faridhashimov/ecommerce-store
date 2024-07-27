export interface UserDTO {
  accessToken: string;
  adress?: Adress;
  _id: string;
  username?: string;
  email: string;
  isAdmin: boolean;
  img?: string;
  createdAt: string;
  updatedAt?: string;
  __v: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  birthDate?: string;
}

export interface Adress {
  city: string;
  street: string;
  zipcode: string;
}
