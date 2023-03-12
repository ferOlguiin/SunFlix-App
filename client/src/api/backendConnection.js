import axios from "axios";
const url = process.env.REACT_APP_API_BASE_URL;

//PARA SERIES
export const getSeriesRequest = async () => await axios.get(`${url}/series`);

export const getOneSerieRequest = async (id) => await axios.get(`${url}/serie/${id}`);

export const editSerieRequest = async (id, newFields) => axios.put(`${url}/editserie/${id}`, newFields);


//PARA PELICULAS    
export const getMoviesRequest = async () => await axios.get(`${url}/movies`);
export const getOneMovieRequest = async (id) => await axios.get(`${url}/getonemovie/${id}`);
export const editMovieRequest = async (id, newFields) => await axios.put(`${url}/editmovie/${id}`, newFields);


//PARA USUARIOS 
export const getUserRequest = async (fields) => await axios.post(`${url}/user`, fields);

export const createUserRequest = async (newFields) => await axios.post(`${url}/createuser`, newFields);

export const editUserRequest = async (id, data) => await axios.put(`${url}/edituser/${id}`, data);