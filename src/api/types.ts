export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: UserAddress;
  company: UserCompany;
}

export interface FormUser {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  street: string;
  city: string;
  zipcode: string;
  comment: string;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
