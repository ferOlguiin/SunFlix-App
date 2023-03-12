import axios from "axios";

//PARA SERIES
export const getSeriesRequest = async () => await axios.get("/series");

export const getOneSerieRequest = async (id) => await axios.get("/serie/" + id);

export const editSerieRequest = async (id, newFields) => axios.put("/editserie/" + id, newFields);


//PARA PELICULAS    
export const getMoviesRequest = async () => await axios.get("/movies");
export const getOneMovieRequest = async (id) => await axios.get("/getonemovie/" + id);
export const editMovieRequest = async (id, newFields) => await axios.put("/editmovie/" + id, newFields);


//PARA USUARIOS 
export const getUserRequest = async (fields) => await axios.post("/user", fields);

export const createUserRequest = async (newFields) => await axios.post("/createuser", newFields);

export const editUserRequest = async (id, data) => await axios.put("/edituser/" + id, data);