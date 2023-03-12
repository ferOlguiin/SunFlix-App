import mongoose from "mongoose";

const serieSchema = new mongoose.Schema({

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
    season: {
        type: Number,
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
    chapters: {
        type: Array,
        trim: true
    },
    like: {
        type: Array,
        trim: true,
        required: true
    }
});

export default mongoose.model("Series", serieSchema);