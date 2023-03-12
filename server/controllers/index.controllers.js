import Serie from "../models/Serie.js";
import User from "../models/User.js";
import Movie from "../models/Movie.js";
import {uploadImage, deleteImage} from '../cloudinary/cloudinary.js';
import fs from "fs-extra";


export const welcome = (req, res) => {
    return res.json({message: "Welcome to backend of Sunflix"})
}

//RUTAS PARA LAS SERIES

export const getSeries = async(req, res) => {
    try {
        const series = await Serie.find().lean();
        return res.send(series);
    } catch (error) {
        return res.send(error);
    }
};

export const getOneSerie = async (req, res) => {
    try {
        const {id} = req.params;
        const serie = await Serie.findById(id);
        return res.send(serie);
    } catch (error) {
        return res.send(error);
    }
}

export const createSerie = async(req, res) => {
    try {
        const {title, description, duration, link, season, year, gender} = req.body;
        const newSerie = new Serie({title, description, duration, link, season, year, gender});

        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            newSerie.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            };
        };

        await fs.unlink(req.files.image.tempFilePath);

        await newSerie.save();
        return res.send(newSerie);

    } catch (error) {
        return res.send(error);
    }
};

export const editSerie = async (req, res) => {
    try {
        const {id} = req.params;
        const serieUpdated = await Serie.findByIdAndUpdate(id, req.body, {new: true});
        return res.send(serieUpdated);
    } catch (error) {
        return res.send(error);
    }
};

export const deleteSerie = async (req, res) => {
    try {
        const {id} = req.params;
        const serieDeleted = await Serie.findByIdAndDelete(id);
        if(serieDeleted.image?.public_id){
            await deleteImage(serieDeleted.image.public_id);
        }
        return res.send("pelicula borrada")
    } catch (error) {
        return res.send(error);
    }
};










//RUTAS PARA LAS PELICULAS

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find().lean();
        return res.send(movies);
    } catch (error) {
        return res.send(error);
    }
};

export const getOneMovie = async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id);
        return res.send(movie);
    } catch (error) {
        return res.send(error);
    }
};

export const createMovie = async (req, res) => {
    try {
        const {title, description, duration, link, year, gender} = req.body;
        const newMovie = new Movie({title, description, duration, link, year, gender});

        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            newMovie.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            };
        };
        await fs.unlink(req.files.image.tempFilePath);
        await newMovie.save();
        return res.send(newMovie);
    } catch (error) {
        return res.send(error);
    }
};

export const editMovie = async (req, res) => {
    try {
        const {id} = req.params;
        const movieUpdated = await Movie.findByIdAndUpdate(id, req.body, {new: true});
        return res.send(movieUpdated);
    } catch (error) {
        return res.send(error);
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const {id} = req.params;
        await Movie.findByIdAndDelete(id);
        return res.send("borrada");
    } catch (error) {
        return res.send(error); 
    }
};















//RUTAS PARA LOS USUARIOS

export const getUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const getUser = await User.find({email, password}).lean();
        getUser[0].password = '';
        return res.send(getUser);

    } catch (error) {
        return res.send(error);
    }
};

export const createUser = async (req, res) => {
    try {
        const {name, email, password, date, gender, profile} = req.body;

        const revisarMail = await User.find().lean();
        for(let key in revisarMail){
            if(revisarMail[key].email === email){
                return res.status(400).send("error hay un mail duplicado")
            }
        };
        const newUser = new User({name, email, password, date, gender, profile});
        await newUser.save();
        return res.send(newUser);
    } catch (error) {
        return res.send(error);
    };
};

export const editUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userUpdated = await User.findByIdAndUpdate(id, req.body, {new: true});
        userUpdated.password = '';
        return res.send(userUpdated);
    } catch (error) {
        return res.send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        return res.send("usuario eliminado");
    } catch (error) {
        return res.send(error);
    }
};