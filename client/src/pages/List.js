import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import { Spinner } from "../components/Spinner";
import { useMovie } from "../context/AppContext"

export const List = () => {

  const {user, userProfile, loading} = useMovie();
  const navigate = useNavigate();
  
  return (
    <div>
        <Navbar/>
        {
          loading === true ? 
          <Spinner data={userProfile}/>
          :
          <main>
            <h2 className="fw-bold text-start text-white px-5 pt-4 pb-2">Mi lista</h2>
            <div className="d-flex container-fluid flex-wrap px-5">
            {
              user.list.length > 0 ? user.list.slice(0,99).reverse().map((item) => 
              <div onClick={() => navigate(`/serie/${item._id}`)} key={item._id} className="d-flex flex-column justify-content-center align-items-center rounded pe-3 pb-3">
                <figure className="d-flex justify-content-center align-items-end categories_img_hover rounded">
                  <img src={item.image?.secure_url} className="rounded img-fluid" alt="images" style={{width:215, height:131}}/>
                  <figcaption className="position-absolute fw-bold text-white title_global_card_movies">{item.title}</figcaption>
                </figure>
              </div>
            )
              :
              <p className="text-start text-light">Aún no has agregado ninguna pelicula o serie a tu lista.</p>
            }
            </div>
        </main>
        }
        
    </div>
  )
}

