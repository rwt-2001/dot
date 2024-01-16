import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile_picture: { type: String, required: false },
    created_at: { type: Date, default: new Date() },
    date_of_birth: { type: String, required: true },
    user_name: { type: String, unique: true, required: true },
    sex: { type: String, enum: ["Male", "Female"] }
})

export interface User {
    name: string,
    email: string,
    profile_pictue: string,
    created_at: Date,
    date_of_birth: string,
    user_name: string,
    sex: string
}
export const UserModel = mongoose.model('user', UsersSchema);