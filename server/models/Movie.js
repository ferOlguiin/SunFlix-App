import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        public_id: String,
        secure_url: String
    },
    like: {
        type: Array,
        trim: true,
        required: true
    }
});

export default mongoose.model("Movie", movieSchema);