export interface IAddressDetails {
    street: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface IUserDetails {
    _id?: string;
    name: string;
    email: string;
    password: string;
    address: IAddressDetails;
}