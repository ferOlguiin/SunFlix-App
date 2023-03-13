import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar} from '../components/Navbar';
import { useMovie } from '../context/AppContext';

export const AllSeriesCategories = () => {

  const {movie, peliculas} = useMovie();
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState([]);
  const [wantedCategorie, setWantedCategorie] = useState('');

  let seriesGenders = movie.map(item => item.gender);
  let peliculasGenders = peliculas.map(item => item.gender);

  let allGenders = seriesGenders.concat(peliculasGenders);        
  
  const container = [];
    for(let i = 0; i < allGenders.length; i++){
        if(!container.includes(allGenders[i])){
            container.push(allGenders[i]);
        }
    };

  const handleChange = (e) => {
    setWantedCategorie(e.target.value);
    showCategorie(e.target.value);
  };

  const showCategorie = (data) => {
    let container = movie.concat(peliculas);
    let containerMovies = container.filter((item) => item.gender.toLowerCase() === data.toLowerCase());
    setCategorie(containerMovies);
  }



  return (
    <div>
      
      <Navbar/>

      <main className='container-fluid'>
        
        <div className='d-flex flex-column justify-content-center align-items-center py-5'>
          <h3 className='fw-bold text-white mb-3'>¿Qué categoria buscás?</h3>
          <select onChange={handleChange} className="w-25 p-2 fs-6 fw-bold bg-dark text-white rounded">
            <option value={''}>Selecciona la categoria que buscas</option>
            {
              container.sort().map((item, index) => <option key={index} value={item}>{item}</option>)
            }
          </select>
        </div>
        
        <div className='d-flex flex-column justify-content-center align-items-md-start align-items-center'>
          <h3 className='p-2 text-white fw-bold text-md-start text-center'>{wantedCategorie ? wantedCategorie : ''}</h3>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            {
              categorie.length > 0 ? categorie.map(item => <div onClick={() => navigate(`/serie/${item._id}`)} key={item._id} className="d-flex flex-column justify-content-center align-items-center p-2">
                <figure className="d-flex justify-content-center align-items-end categories_img_hover">
                  <img src={item.image.secure_url} alt="movieimg" className="rounded img-fluid" style={{width:215, height:131}}/>
                  <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
                </figure>
              </div>) : ''
            }
          </div>
        </div>

      </main>

    </div>
  )
}

