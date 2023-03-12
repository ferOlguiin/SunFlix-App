import dotenv from "dotenv";

dotenv.config();

export const URI_MONGODB = process.env.URI_MONGODB;
export const PORT = process.env.PORT;

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;