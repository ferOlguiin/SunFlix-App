import { useState } from "react";
import { toast } from "react-hot-toast";
import {BsXCircleFill} from 'react-icons/bs';
import {VscAdd, VscCheck, VscPlay} from 'react-icons/vsc';
import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/AppContext";
import { BsFillPlayFill, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from "react-icons/bs";

export const Categories = () => {

    const {editUser, user, movie, editMovie, setChapterLink, peliculas, editPelicula} = useMovie();
    const navigate = useNavigate();

    let seriesGenders = movie.map(item => item.gender);
    let peliculasGenders = peliculas.map(item => item.gender);

    let allGenders = seriesGenders.concat(peliculasGenders);

    let container = [];
    for(let i = 0; i < allGenders.length; i++){
        if(!container.includes(allGenders[i])){
            container.push(allGenders[i]);
        }
    };

    
    const [data, setData] = useState(); //estado para tener como obj indivual a cada pelicula cuando sea seleccionada
    const [view, setView] = useState(false); //estado para activar el modo vista general de cada pelicula
    const [seasonData, setSeasonData] = useState(); //estado para manejar los capitulos de la pelicula seleccionada en el estado "data"
    const [checkList, setCheckList] = useState(false); //estado para manejar los iconos de la lista, sobre si esta la pelicula agregada o no, si es falso es que significa que la pelicula que se quiere agregar no esta en la lista del usuario, si esta en true significa que el usuario ya tiene esa pelicula en su lista.
    const keysOfSeasonData = seasonData ? Object.getOwnPropertyNames(seasonData) : ''; //constante para manejar cada capitulo de manera individual recorriendolo con una function "map".

    const handleMovieInfo = (info) => {
        setSeasonData('');
        setCheckList(false);
        let list = user.list ? user.list : [];
        list.length > 0 ? list.find((item) => {if(item._id === info._id){return setCheckList(true)}}) : setCheckList(false);
        setData(info);
        setView(true);
    };
    
    
    const handleSeason = (e) => {
        const season = e.target.value;
        setSeasonData(data.chapters[season]);
    };

    const handleCancel = () => {
        setView(false);
        setCheckList(false);
        setSeasonData('');
    }

    const handleList = async (id, datamovie) => {
        if(checkList === false){
            let list = user.list;
            list.push(datamovie);
            await editUser(id, {list: list});
            setCheckList(true);
            toast.success("Agregada a tu lista");
        } else {
            let list = user.list;
            let newList = list.filter((item) => item._id !== datamovie._id);
            await editUser(id, {list: newList});
            setCheckList(false);
            toast.success("Eliminada de tu lista");
        }
    };

    const handleLike = async (userId, datamovie) => {
        if(!datamovie.like.includes(userId) || datamovie.like.length === 0){
            let newLike = datamovie.like || [];
            newLike.push(userId);
            const res = datamovie.chapters ? await editMovie(datamovie._id, {like: newLike}) : await editPelicula(datamovie._id, {like: newLike});
            setData(res.data);
            toast.success("👍");
        } else{
            toast.error("No puedes dar doble like");
        }
    };

    const handleDislike = async (userId, datamovie) => {
        if(datamovie.like && datamovie.like.includes(userId)){
            let newDislike = datamovie.like.filter((item) => item !== userId);
            const res = datamovie.chapters ? await editMovie(datamovie._id, {like: newDislike}) : await editPelicula(datamovie._id, {like: newDislike});
            setData(res.data);
            toast.success("👎");
        } else {
            toast.error("No puedes dar doble dislike")
        }
    };

    const handleChapter = (chapter) => {
        setChapterLink(chapter);
        navigate("/watchserie");
    }
 
    return (

    <div className="container-fluid d-flex flex-column">
        {
            container.sort().map((item) => {
                const pelis = [];
                const length = movie.length > peliculas.length ? movie.length : peliculas.length;
                for(let i = 0; i < length; i++){
                    if(movie[i].gender === item){
                        pelis.push(movie[i]);
                    };
                    if(peliculas[i] && peliculas[i].gender === item){
                        pelis.push(peliculas[i]);
                    }
                }
                return <div key={item} className="d-flex flex-column text-white">
                            <h3 className="text-white text-center text-md-start fw-bold">{item}</h3>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                {pelis.map(movies => 
                                    <div key={movies._id} className="pe-3 pb-3 rounded">
                                        <figure onClick={() => handleMovieInfo(movies)} className="d-flex justify-content-center align-items-end categories_img_hover rounded">
                                            <img src={movies.image.secure_url} className="rounded img-fluid" alt="images" style={{width:215, height:131}}/>
                                            <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{movies.title}</figcaption>
                                        </figure>
                                    </div>)
                                }
                            </div>
                       </div>})
        }
        { 
            view === true ? 
            <div className="container-fluid p-0 orden overflow-auto d-flex flex-column bg-black rounded text-white position-absolute position-fixed top-50 start-50 translate-middle border border-secondary border-1 view_categories_size">

                <div className="rounded">
                    <figure className="rounded">
                        <div className="categories_img_box">
                            <div onClick={handleCancel} className="d-flex justify-content-end w-100 align-items-center rounded">
                                <BsXCircleFill className="position-absolute rounded-circle bg-dark cursor mt-5 me-2 fs-1"/>
                            </div>
                            <img src={data.image.secure_url} className="img-fluid rounded" alt="serie"/>
                        </div>
                        
                        <figcaption className="px-3">
                            <h2 className="text-start pt-2 px-3 fw-bold">{data.title}</h2>
                            <h6 className={checkList === false ? "text-danger px-3 pb-4" : "text-success px-3 pb-4"}>{checkList === false ? "No está en tu lista de favoritos" : "Ya la tienes en tu lista de favoritos"}</h6>
                            <div className="d-flex px-3 justify-content-start align-items-center">
                                <button onClick={() => handleChapter(data.chapters ? data.chapters[0].capitulo1.link : data.link)} className="btn btn-outline-light me-1 my-0"><VscPlay className="fs-3 ms-1"/></button>
                                <button type="button" onClick={() => handleList(user._id, data)} className="btn btn-outline-light" data-bs-toggle="tooltip" data-bs-placement="top" title={`${checkList === false ? "Añadir a mi lista":"Quitar de mi lista"}`}>
                                    {
                                        checkList === false ? <VscAdd className="fs-3"/> : <VscCheck className="fs-3"/>
                                    }
                                </button>
                                <button onClick={() => handleLike(user._id, data)} className="btn btn-light mx-1"><BsFillHandThumbsUpFill className={data.like.includes(user._id) ? "fs-3 text-success" : "fs-3 text-dark"}/></button>
                                <button onClick={() => handleDislike(user._id, data)} className="btn btn-light"><BsFillHandThumbsDownFill className={data.like.includes(user._id) ? "fs-3 text-dark" : "fs-3 text-danger"}/></button>
                            </div>
                        </figcaption>

                    </figure>
                </div>
                
                <div className="container-fluid px-4 py-3">
                            <div className="row">
                                <div className="col-sm-7 py-1 px-5 d-flex flex-column justify-content-md-center align-items-md-start">
                                    <h3 className="pb-1 pt-4 fw-bold">Descripción</h3>
                                    <p className="fs-5 text-break">{data.description}</p>
                                </div>
                                <div className="col-sm-5 py-1 px-5 d-flex flex-column align-items-md-center justify-content-md-center">
                                    {data.chapters ? <h5 className="text-break fw-bold">Serie</h5> : <h5 className="text-break fw-bold">Pelicula</h5>}
                                    <h5 className="text-break">Año: {data.year}</h5>
                                    <h5 className={data.season ? "text-break" : "d-none"}>{data.season ? `Temporadas: ${data.season}` : ''}</h5>
                                    <h5 className="text-break">Género: {data.gender}</h5>
                                    {data.chapters ? '' : <h5 className="text-break">Duración: {data.duration} min</h5>}
                                </div>
                            </div>
                        </div>

                <div className="p-3">
                    {
                        data.chapters && Object.keys(data.chapters).length > 0 ? 
                        <div className="d-flex flex-column mt-4">
                            <div className="mb-3 px-3 pb-3 border-bottom border-1 border-secondary rounded d-flex flex-column flex-sm-row justify-content-sm-between justify-content-center align-items-center">
                                <span className="fs-3 fw-bold">Episodios</span>
                                <select className="btn btn-dark" onClick={handleSeason}>
                                    <option value={''} className="dropdown-item m-0 py-2 text-start">Elegí la temporada</option>
                                    {
                                        data.chapters ? Object.keys(data.chapters).map((item, index) => <option className="dropdown-item m-0 py-2 text-start" key={index} value={index}>Temporada {index + 1}</option>) : ''
                                    }
                                </select>
                            </div>
                            {
                                seasonData ? keysOfSeasonData.map((item, index) => <div key={index} className="p-3 border-bottom border-1 border-secondary rounded episodes_hover">
                                <div className="d-flex flex-column flex-sm-row justify-content-md-around justify-content-center align-items-center">
                                    <span className="px-3 fs-3"> {index + 1} </span>
                                    <figure className="d-flex justify-content-center align-items-center pe-3">
                                        <img src={seasonData[item].image} className="img-fluid" style={{maxHeight:100, maxWidth:150}} alt="imgitem"/>
                                        <figcaption className="position-absolute" onClick={() => handleChapter(seasonData[item].link)}><BsFillPlayFill className="text-white fs-1 p-2 rounded-circle bg-dark"/></figcaption>
                                    </figure>
                                    <div className="px-2">
                                        <h3 className="text-sun">{seasonData[item].title}</h3>
                                        <p>{seasonData[item].description}</p>
                                    </div>
                                    <p className="text-center">{seasonData[item].duration} min</p>
                                </div>
                            </div>) : ''
                            }
                        </div>
                        :
                        ''
                    }
                </div>
        
            </div> 
            : 
            ''
        }
    </div>
  )
}

