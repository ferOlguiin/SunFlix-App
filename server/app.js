import express from "express";
import router from "./routes/index.routes.js";
import cors from 'cors';

const app = express();

//middlewares
app.use(cors({origin:true}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router
app.use(router);


export default app;