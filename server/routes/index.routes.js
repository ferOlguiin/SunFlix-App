import { Router } from "express";
import { createMovie, createSerie, createUser, deleteMovie, deleteSerie, deleteUser, editMovie, editSerie, editUser, getMovies, getOneMovie, getOneSerie, getSeries, getUser, welcome } from "../controllers/index.controllers.js";
import fileUpload from "express-fileupload";


const router = Router();

router.get("/", welcome);

//RUTAS DE SERIES
router.get("/series", getSeries);
router.get("/serie/:id", getOneSerie);
router.post("/createserie",fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}), createSerie);
router.put("/editserie/:id", editSerie);
router.delete("/deleteserie/:id", deleteSerie);


//RUTAS DE PELICULAS
router.get("/movies", getMovies);
router.get("/getonemovie/:id", getOneMovie);
router.post("/createmovie", fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}), createMovie);
router.put("/editmovie/:id", editMovie);
router.delete("/deletemovie/:id", deleteMovie);


//RUTAS DE USUARIOS
router.post("/user", getUser);
router.post("/createuser", createUser);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser);

export default router;