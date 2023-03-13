import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../context/AppContext";
import { BsFillPlayFill, BsXCircleFill, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import {VscAdd, VscCheck, VscPlay} from 'react-icons/vsc';
import {toast} from 'react-hot-toast';


export const SerieDetails = () => {
    
    const [data, setData] = useState([]);
    const params = useParams();
    const {user, getOneMovie, editUser, editMovie, getOnePelicula, setChapterLink, editPelicula} = useMovie();
    
    useEffect(() => {
        (async ()=> {
            const res = await getOneMovie(params.id) || await getOnePelicula(params.id);
            setData(res);
        })();
    },[params.id]);


    const [seasonData, setSeasonData] = useState();
    const [checkList, setCheckList] = useState(false);
    const navigate = useNavigate();
    let keysOfSeasonData = seasonData ? Object.getOwnPropertyNames(seasonData) : '';
    
    
    useEffect(() => {
        if(user.list.find(item => item._id === data._id)){
            setCheckList(true)
        } else {
            setCheckList(false);
        }
    }, [data._id]);


    const handleSeason = (e) => {
        const season = e.target.value;
        setSeasonData(data.chapters[season]);
    };

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
            console.log(res.data)
            setData(res.data);
            toast.success("👎");
        } else {
            toast.error("No puedes dar doble dislike")
        }
    };

    const handleChapter = () => {
        if(data.link){
            setChapterLink(data.link);
            navigate("/watchserie");
        } else {
            setChapterLink(data.chapters[0].capitulo1.link);
            navigate("/watchserie");
        }
    }

  return (
    <div className="bg-black">
        {
            data ? <main className="container py-3 rounded px-5 text-white">
                        {/* IMAGEN */}
                        <div>
                            <figure className="rounded shadow-lg pb-4 m-0">
                                {/* BOTON PARA VOLVER */}
                                <div className="categories_img_box">
                                    <div onClick={() => navigate("/homepage")} className="d-flex justify-content-end w-100 align-items-center">
                                        <BsXCircleFill className="position-absolute rounded-circle text-dark bg-light cursor mt-5 me-2 fs-1"/>
                                    </div>
                                    <img src={data.image?.secure_url} alt="img1" className="img-fluid w-100 rounded" style={{maxHeight: 600}}/>
                                </div>
                                {/* INFORMACION DE MOVIE, PLAY Y MILISTA */}
                                <figcaption className="px-3">
                                    <h2 className="text-center pt-2 px-3 fw-bold serie_details_font_size_title">{data.title}</h2>
                                    <h5 className={checkList === false ? "text-center text-danger px-3 pb-4 m-0" : "text-center text-success px-3 pb-4 m-0"}>{checkList === false ? "No está en tu lista de favoritos" : "Ya la tienes en tu lista de favoritos"}</h5>
                                    <div className="d-flex px-3 justify-content-center align-items-center">
                                        <button onClick={handleChapter} className="btn btn-outline-light me-1 my-0"><VscPlay className="fs-3 ms-1"/></button>
                                        <button type="button" onClick={() => handleList(user._id, data)} className="btn btn-outline-light" data-bs-toggle="tooltip" data-bs-placement="top" title={`${checkList === false ? "Añadir a mi lista":"Quitar de mi lista"}`}>
                                            {
                                                checkList === false ? <VscAdd className="fs-3"/> : <VscCheck className="fs-3"/>
                                            }
                                        </button>
                                        <button onClick={() => handleLike(user._id, data)} className="btn btn-light mx-1"><BsFillHandThumbsUpFill className={data.like?.includes(user._id) ? "fs-3 text-success" : "fs-3 text-dark"}/></button>
                                        <button onClick={() => handleDislike(user._id, data)} className="btn btn-light"><BsFillHandThumbsDownFill className={data.like?.includes(user._id) ? "fs-3 text-dark" : "fs-3 text-danger"}/></button>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>

                        {/* DESCRIPCION, AÑO Y DURACION */}
                        
                        <div className="container-fluid py-3 mt-3 shadow-lg">
                            <div className="row">
                                <div className="col-md-7 py-1 px-3 d-flex flex-column justify-content-md-center align-items-md-start align-items-center">
                                    <h3 className="pb-1 pt-4 fw-bold">Descripción</h3>
                                    <p className="fs-5 text-break text-center text-md-start">{data.description}</p>
                                </div>
                                <div className="col-md-5 py-1 px-3 d-flex flex-column align-items-md-end align-items-center justify-content-md-center">
                                    {data.chapters ? <h5 className="text-break fw-bold">Serie</h5> : <h5 className="text-break fw-bold">Pelicula</h5>}
                                    <h5 className="text-break">Año: {data.year}</h5>
                                    <h5 className={data.season ? "text-break" : "d-none"}>{data.season ? `Temporadas: ${data.season}` : ''}</h5>
                                    <h5 className="text-break">Género: {data.gender}</h5>
                                    {data.chapters ? '' : <h5 className="text-break">Duración: {data.duration} min</h5>}
                                </div>
                            </div>
                        </div>
                        

                        {/* EPISODIOS Y TEMPORADAS */}
                        {
                            data.chapters && Object.keys(data.chapters).length > 0 ? 
                            <div className="d-flex flex-column flex-sm-row justify-content-sm-between justify-content-center align-items-center py-3 px-2 border-bottom border-1 border-secondary rounded shadow-lg py-3 mt-4 px-4">
                                <h4>Episodios</h4>
                                <select onClick={handleSeason} className="btn btn-dark">
                                    <option value={''} className="dropdown-item m-0 py-2 text-start">Elegí la temporada</option>
                                        {
                                            Object.keys(data.chapters).map((item, index) => <option className="dropdown-item m-0 py-2 text-start" key={index} value={index}>Temporada {index + 1}</option>)
                                        }
                                </select>
                            </div> 
                            : 
                            ''
                        }
                        
                        <div>
                            {
                                seasonData ? keysOfSeasonData.map((item, index) => <div key={index} className="p-3 border-bottom border-1 border-secondary rounded episodes_hover">
                                    <div className="d-flex flex-column flex-sm-row justify-content-md-around justify-content-center align-items-center py-2">
                                        <span className="px-3 fs-3"> {index + 1} </span>
                                        <figure className="d-flex justify-content-center align-items-center">
                                            <img src={seasonData[item].image} className="img-fluid" style={{maxHeight:100, maxWidth:150}} alt="imgitem"/>
                                            <figcaption onClick={() => handleChapter(seasonData[item].link)} className="position-absolute"><BsFillPlayFill className="text-white fs-1 p-2 rounded-circle bg-dark"/></figcaption>
                                        </figure>
                                        <div className="px-3">
                                            <h3 className="text-sun">{seasonData[item].title}</h3>
                                            <p className="text-break">{seasonData[item].description}</p>
                                        </div>
                                        <p className="text-center">{seasonData[item].duration} min</p>
                                    </div>
                                    </div>)
                                    :
                                    ''
                            }
                        </div>
                    </main> 
                    :
                    <p className="text-white">No hay datos</p>
        }
    </div>
  )
};