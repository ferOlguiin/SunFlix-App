import imagen from '../images/tv.png';
import imgnetflix from '../images/imgnetflix.jpg';
import imgnetflix2 from '../images/imgnetflix2.png';
import {Link} from "react-router-dom";
import { Footer } from '../components/Footer';

export const WelcomePage = () => {
  return (
    <div className="bg-secondary">

      <div className="vh-100 imgDeFondo">
        <nav className="d-flex justify-content-sm-between justify-content-center flex-column flex-sm-row align-items-center py-3 px-5">
          <a href='/' className="text-decoration-none text-sun fw-bold m-0 p-0 display-4">Sunflix</a>
          <Link to="/login" className="btn-sun fw-bold">Iniciar sesion</Link>
        </nav>
        
        <main className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-white d-flex flex-column justify-content-center align-items-center container pb-5">
            <h1 className="display-5 fw-bold text-center text-break">Películas y series</h1>
            <h2 className='display-5 mb-4 fw-bold text-center text-break'>ilimitadas y mucho más</h2>
            <h4 className="mb-5 text-center text-break">Disfruta donde quieras. Cancela cuando quieras.</h4>
            <h5 className="mb-4 text-center text-break">¿Quieres ver Sunflix ya? Dale click al siguiente botón y completa el formulario.</h5>
            <Link to="/register" className="btn-sun fs-3 fw-bold" type="button">Registrate</Link>
          </div>
        </main>
      </div>

      {/* SECCIONES DE INFORMACION */}
      <div className="bg-black text-white p-5 my-2 d-flex justify-content-center align-items-center flex-column flex-lg-row">
        <h1>Disfruta en tu TV Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</h1>
        <img alt="img" className="img-fluid" src={imagen}/>
      </div>
      <div className="bg-black text-white p-5 my-2 d-flex justify-content-center align-items-center flex-column flex-lg-row">
        <img alt="img" className="img-fluid" src={imgnetflix}/>
        <h1>Descarga tus series para verlas offline Guarda tu contenido favorito y tendrás siempre algo para ver.</h1>
      </div>
      <div className="bg-black text-white p-5 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row">
        <h1>Crea perfiles para niños Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</h1>
        <img alt="img" className="img-fluid" src={imgnetflix2}/>
      </div>

      {/* ACORDEON */}
      <div className='bg-black d-flex align-items-center justify-content-center my-2 p-5 flex-column'>
        <h2 className="fw-bold display-5 text-center text-white mb-5 mt-0">Preguntas frecuentes</h2>
          <div className="accordion" id="accordionExample">
            
            {/* ACORDEON NUMERO 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button fs-3 fw-bold text-white bg-dark bg-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ¿Qué es Sunflix?
                </button>
              </h2>
              <div id="collapseOne" className="bg-dark bg-opacity-75 text-white accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body fw-bold fs-4 text-break">
                Sunflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
                Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                </div>
              </div>
            </div>
            

            {/* ACORDEON NUMERO 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed fs-3 fw-bold text-white bg-dark bg-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ¿Cuánto cuesta Sunflix?
                </button>
              </h2>
              <div id="collapseTwo" className="bg-dark bg-opacity-75 text-white accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body fw-bold fs-4 text-break">
                  Disfruta Sunflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 699 hasta $ 1.899 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.
                </div>
              </div>
            </div>

              {/* ACORDEON NUMERO 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed fs-3 fw-bold text-white bg-dark bg-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  ¿Dónde veo Sunflix?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse bg-dark bg-opacity-75 text-white" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body fw-bold fs-4 text-break">
                  Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Sunflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.

                  Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.
                </div>
              </div>
            </div>

          </div>
      </div>

      {/* FOOTER */}
      <Footer/>
    </div>
  )
};

