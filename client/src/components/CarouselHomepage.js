import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/AppContext";

export const CarouselHomepage = ({movie}) => {
  
  const {setChapterLink} = useMovie();
  const navigate = useNavigate();

  const handleLink = (data) => {
    if(data.link){
      setChapterLink(data.link);
      navigate("/watchserie");
  } else {
      setChapterLink(data.chapters[0].capitulo1.link);
      navigate("/watchserie");
  }
  }

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div className="carousel-inner">
                  {
                      movie.map((item, index) => {
                        if(index === 0){
                          return <div key={index} className="carousel-item active img_homepage">
                                  <img src={item.image.secure_url} className="d-block w-100 img-fluid opacity-50" style={{maxHeight:726}} alt="img2"/>
                                  <div className="carousel-caption d-flex justify-content-center align-items-start h-100 flex-column">
                                      <h5 className="m-0 font-description">{item.gender}</h5>
                                      <h5 className="font-title fw-bold text-start">{item.title}</h5>
                                      <p className="font-description text-start">{item.description}</p>
                                      <div className="d-flex justify-content-center align-items-center">
                                          <button onClick={() => handleLink(item)} className="btn btn-secondary fw-bold me-1 d-sm-flex d-none">Reproducir</button>
                                          <button className="btn btn-secondary fw-bold ms-1 d-sm-flex d-none">Mas información</button>
                                      </div>
                                  </div>
                                 </div>
                          }
                        if(index <= 3){
                          return <div key={index} className="carousel-item img_homepage">
                                    <img src={item.image.secure_url} className="d-block w-100 img-fluid opacity-50" style={{maxHeight:726}} alt="img2"/>
                                    <div className="carousel-caption d-flex justify-content-center align-items-start h-100 flex-column">
                                        <h5 className="m-0 font-description">{item.gender}</h5>
                                        <h5 className="font-title fw-bold text-start">{item.title}</h5>
                                        <p className="font-description text-start">{item.description}</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button onClick={() => handleLink(item)} className="btn fw-bold btn-secondary me-1 d-sm-flex d-none">Reproducir</button>
                                            <button className="btn btn-secondary ms-1 d-sm-flex d-none fw-bold">Mas información</button>
                                        </div>
                                    </div>
                                 </div>
                          }
                        })
                   }
                  </div>
                </div>
  )
}

