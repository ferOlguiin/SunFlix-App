import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useMovie } from "../context/AppContext";
import {VscDebugRestart} from 'react-icons/vsc';
import { useNavigate } from "react-router-dom";

export const Search = () => {

    const {movie, peliculas} = useMovie();
    const [items, setItems] = useState([]);
    const [wantedMovie, setWantedMovie] = useState('');
    const [whatDoYouWant, setWhatDoYouWant] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setWantedMovie(e.target.value);
        filterMethod(e.target.value);
    };
    
    const filterMethod = (value) => {
        let container = whatDoYouWant === "serie" ? movie : peliculas;
        let matches = container.filter((item) => {
            if(item.title.toString().toLowerCase().includes(value.toLowerCase())){
                return item;
            } else {
                return '';
            }
        });
        setItems(matches);
    };

    const handleChange = (e) => {
        setWhatDoYouWant(e.target.value);
    }

  return (
    <div>

        <Navbar/>
        <main className="container d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center flex-column py-5">
                <h3 className='fw-bold text-white mb-3'>¿Qué Deseas buscar?</h3>
                
                <select onChange={handleChange} className="p-2 fs-6 fw-bold bg-dark text-white rounded">
                    <option value={''}>Selecciona lo que estas buscando</option>
                    <option value={"pelicula"}>Peliculas</option>
                    <option value={"serie"}>Series</option>
                </select>
                
                <h3 className={whatDoYouWant !== '' ? 'fw-bold text-white my-3' : "d-none"}>¿Qué {whatDoYouWant} estás buscando?</h3>
                <div className={whatDoYouWant !== '' ? "d-flex align-items-center justify-content-center w-100" : "d-none"}>
                    <input maxLength={60} onChange={handleSearch} value={wantedMovie} placeholder={"Nombre de la " + whatDoYouWant} className="form-control bg-dark text-light m-1 p-2"/>
                    <span className="bg-sun rounded-circle p-1"><VscDebugRestart className="fs-2 cursor" onClick={() => setWantedMovie('')}/></span>
                </div>
            </div>

            <div className="d-flex justify-content-center justify-content-md-start flex-wrap">
                {
                    items[0] !== undefined && wantedMovie !== '' ? items.map(item => <div onClick={() => navigate(`/serie/${item._id}`)} key={item._id} className="p-2 rounded">
                                        <figure className="d-flex justify-content-center align-items-end rounded categories_img_hover">
                                            <img src={item.image.secure_url} alt="img1" className="img-fluid rounded" style={{width:215, height:131}}/>
                                            <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
                                        </figure>
                                      </div>) : items.length === 0 && wantedMovie !== '' ? <h6 className="mt-5 text-break text-center text-light">La búsqueda de "{wantedMovie}" no arrojó coincidencias</h6> : '' 
                }
            </div>

        </main>

    </div>
  )
};

