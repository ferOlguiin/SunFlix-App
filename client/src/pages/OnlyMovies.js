import { useMovie } from "../context/AppContext"
import {Navbar} from "../components/Navbar";
import { useNavigate } from "react-router-dom";


export const OnlyMovies = () => {

  const {peliculas} = useMovie();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <main className="py-5">
        <h2 className="text-light text-center text-md-start px-5 fw-bold pb-2">Peliculas</h2>
        <div className="d-flex container-fluid justify-content-center justify-content-md-start flex-wrap px-5">
          {
            peliculas ? peliculas.map(item => <div onClick={() => navigate(`/serie/${item._id}`)} key={item._id} className="d-flex flex-column justify-content-center align-items-center rounded px-2 pb-1">
            <figure className="d-flex justify-content-center align-items-end categories_img_hover rounded">
              <img src={item.image?.secure_url} className="rounded img-fluid" alt="images" style={{width:215, height:131}}/>
              <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
            </figure>
          </div>) : <p>No hay peliculas para mostrar</p>
          }
        </div>
      </main>
    </div>
  )
}

export default OnlyMovies