import { useMovie } from "../context/AppContext";
import { Categories } from "../components/Categories";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";
import { CarouselHomepage } from "../components/CarouselHomepage";


export const Homepage = () => {

  const {movie, userProfile, loading} = useMovie();


  return (
    <div className="bg-dark fondo">

          {
            loading === true ?
            <Spinner data={userProfile} />
            :

            <div className="bg-dark fondo">
              <div className="h-100 bg-black">
              <Navbar main={"main"}/>

              <main className="carousel_box">
                <CarouselHomepage movie={movie}/>
              </main>
            </div>
            <div className="bg-black p-5 border-bottom border-secondary border-1">
              <Categories/>
            </div>

            <Footer homepage="homepage"/>
            
            </div>
          }
    </div>
  )
};




