import mongoose from "mongoose";

const Schema = mongoose.Schema
const postScheme = new mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String },
    media_url: { type: String },
    media_length: { type: Number },
    likes: { type: [Schema.Types.ObjectId], default: [] }
})

export const postModel = mongoose.model('post', postScheme)