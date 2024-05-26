import { Schema, model } from "mongoose";
import { IAddressDetails, IUserDetails } from "../interfaces/user";

const AddressSchema = new Schema<IAddressDetails>({
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    country: {
        type: String,
    }
});

const UserSchema = new Schema<IUserDetails>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    address: AddressSchema
});

export default model<IUserDetails>('User', UserSchema);