import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import {Navbar} from '../components/Navbar';
import { useMovie } from '../context/AppContext';

export const News = () => {

  const {movie, peliculas} = useMovie();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pelicula, setPelicula] = useState([]);
  const [movieLike, setMovieLike] = useState([]);
  
  //esta es la funcion para ordenar las peliculas por cantidad de likes, faltaria primero hace un .splice(0,11) y despues de eso hacer aplicar esta funcion de sort para ordenar pero no por SEASON sino por LIKES
   
  useEffect(() => {

    let datos = movie.map(item => item);
    let likes = movie.map(item => item);
    let peli = peliculas.map(item => item);
    peli.sort(function(a, b){
      if (a.like > b.like) {
        return -1;
      }
      if (a.like < b.like) {
        return 1;
      }
      return 0;
  });
    likes.sort(function(a, b){
      if (a.like > b.like) {
        return -1;
      }
      if (a.like < b.like) {
        return 1;
      }
      return 0;
  });
    setData(datos);
    setMovieLike(likes);
    setPelicula(peli);
  },[movie || peliculas]);

  return (
    <div>
        <Navbar/>
        <main>

          {/* DIV DE PELICULAS AGREGADAS RECIENTEMENTE */}
          <div className='d-flex flex-wrap container-fluid px-5 pb-3 pt-5 justify-content-center justify-content-md-start align-items-center'>
              <h2 className='w-100 text-center text-md-start text-light mb-3'>Top 10 series agregadas recientemente</h2>
            {
              //CAMBIAR EL SLICE DE -2 A -10 PARA Q SE MUESTREN 10 RECIENTEMENTE AGREGAGADAS
              data ? data.slice(-10).reverse().map((item) => <div key={item._id} className="pe-3 pb-2 rounded">
                    <figure onClick={() => navigate(`/serie/${item._id}`)} className="d-flex justify-content-center align-items-end categories_img_hover rounded">
                        <img src={item.image.secure_url} className="rounded img-fluid" alt="imageas" style={{width:215, height:131}}/>
                        <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
                    </figure>
                </div>) 
                : 
                <h4 className='text-info'>No se encontraron peliculas</h4>
            }
          </div>

            {/* DIV DE PELICULAS MAS GUSTADAS */}
          <div className='d-flex flex-wrap container-fluid px-5 py-3 justify-content-center justify-content-md-start align-items-center'>
            <h2 className='w-100 text-center text-md-start text-light mb-3'>Top 10 series más gustadas</h2>
            {
              //CAMBIAR EL SLICE DE 0,3 A 0,10 PARA QUE SE MUESTREN LAS 10 MAS GUSTADAS
              movieLike ? movieLike.slice(0, 10).map(item => {
                if(item.like.length > 0){
                  return <div key={item._id} className="pe-3 pb-2 rounded">
                            <figure onClick={() => navigate(`/serie/${item._id}`)} className="d-flex justify-content-center align-items-end categories_img_hover rounded">
                                <img src={item.image.secure_url} className="rounded img-fluid" alt="imageas" style={{width:215, height:131}}/>
                                <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
                            </figure>
                        </div>
                }
              }) : <h4>No se encontraron peliculas</h4> 
                  
            }
          </div>

          <div className='d-flex flex-wrap container-fluid px-5 py-3 justify-content-center justify-content-md-start align-items-center'>
            <h2 className='w-100 text-center text-md-start text-light mb-3'>Top 10 peliculas más gustadas</h2>
            {
              pelicula ? pelicula.slice(0, 10).map(item => {
                if(item.like.length > 0){
                  return <div key={item._id} className="pe-3 pb-2 rounded">
                            <figure onClick={() => navigate(`/serie/${item._id}`)} className="d-flex justify-content-center align-items-end categories_img_hover rounded">
                                <img src={item.image.secure_url} className="rounded img-fluid" alt="imageas" style={{width:215, height:131}}/>
                                <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
                            </figure>
                        </div>
                }
              }) : <h4>No se encontraron peliculas</h4>
            }
          </div>

        </main>
        <Footer/>
    </div>
  )
}

