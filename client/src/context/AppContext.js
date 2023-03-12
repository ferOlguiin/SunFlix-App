import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-hot-toast";
import { createUserRequest, editMovieRequest, editSerieRequest, editUserRequest, getMoviesRequest, getOneMovieRequest, getOneSerieRequest, getSeriesRequest, getUserRequest } from "../api/backendConnection";

const movieContext = createContext();

export const useMovie = () => {
  const context = useContext(movieContext);
  return context;
}

export const MovieContainer = ({children}) => {

    const [movie, setMovie] = useState([]);
    const [user, setUser] = useState();
    const [userProfile, setUserProfile] = useState();
    const [loading, setLoading] = useState(false);
    const [chapterLink, setChapterLink] = useState();
    const [peliculas, setPeliculas] = useState([]);

    //PARA SERIES
    const getMovies = async () => {
      const series = await getSeriesRequest();
      setMovie(series.data);
      return series;
    };
    const getOneMovie = async (id) => {
      const serie = await getOneSerieRequest(id);
      return serie.data;
    };
    const editMovie = async (id, newFields) => {
      const res = await editSerieRequest(id, newFields, {new: true});
      setMovie(movie.map((item) => item._id === res.data._id ? res.data : item));
      return res;
    };
    useEffect(() => {
    getMovies();
    }, []);



    //PARA PELICULAS
    const getPeliculas = async () => {
      const movies = await getMoviesRequest();
      setPeliculas(movies.data);
    }
    useEffect(() => {
      getPeliculas();
    },[]);
    const getOnePelicula = async (id) => {
      const movie = await getOneMovieRequest(id);
      return movie.data;
    };
    const editPelicula = async (id, newFields) => {
      const res = await editMovieRequest(id, newFields, {new: true});
      setPeliculas(peliculas.map((item) => item._id === res.data._id ? res.data : item));
      return res;
    };



    //PARA USUARIOS
    const getUser = async (fields) => {
      const user = await getUserRequest(fields);
      setUser(user.data[0]);
      return user.data;
    };
    const createUser = async (newFields) => {
      await createUserRequest(newFields);
      toast.success("Usuario creado correctamente");
    };
    const editUser = async (id, newData) => {
      const res = await editUserRequest(id, newData, {new: true});
      setUser(res.data);
    }
    
  return (
    <movieContext.Provider value={{movie, setMovie, peliculas, setPeliculas, chapterLink, setChapterLink, getUser, user, setUser, getOnePelicula, editPelicula, loading, setLoading, createUser, editUser, editMovie, userProfile, setUserProfile, getOneMovie}}>
      {children}
    </movieContext.Provider>
  )
}

