import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Number,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    profile: {
        type: String, 
        required: true, 
        trim: true
    },
    profile2: {
        type: String,
        trim: true
    },
    profile3: {
        type: String,
        trim: true
    },
    profile4: {
        type: String,
        trim: true
    },
    list: {
        type: Array,
        trim: true
    }
});

export default mongoose.model("Users", userSchema);