import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import { useMovie } from "../context/AppContext"

export const Account = () => {

  const {user} = useMovie();

  return (
    <div>
      <Navbar/>
      <main className="text-light container">
        <h2 className="fw-bold border-bottom border-secondary pt-5 pb-3">Cuenta</h2>
        
        {/* APARTADO DE CUENTA */}
        <div className="d-flex justify-content-around py-5 border-bottom border-secondary flex-wrap">
          {/* COLUMNA 1 */}
          <div className="d-flex flex-column pb-2">
            <h5>MEMBRESIA Y FACTURACIÓN</h5>
            <button className="btn btn-secondary">Cancelar membresia</button>
          </div>
          {/* COLUMNA 2 */}
          <div className="d-flex flex-column px-3 pb-2 justify-content-start align-items-start">
            <span className="fs-5">{user.email}</span>
            <span className="fs-5">{user.date}</span>
            <span className="fs-5">{user.gender}</span>
            <span className="fs-5">{user.name}</span>
          </div>
          {/* COLUMNA 3 */}
          <div className="d-flex flex-column justify-content-start pb-2 align-items-end">
            <Link className="text-decoration-none">Cambiar de email de cuenta</Link>
            <Link className="text-decoration-none">Cambiar de date de cuenta</Link>
            <Link className="text-decoration-none">Cambiar de gender de cuenta</Link>
            <Link className="text-decoration-none">Cambiar de name de cuenta</Link>
          </div>
        </div>
        
        {/* APARTADO DE PERFILES */}
        <div className="d-flex justify-content-around py-5 flex-wrap">
          {/* COLUMNA 1 */}
          <div className="d-flex justify-self-start">
            <h5>PERFILES Y CONTROLES</h5>
          </div>
          {/* COLUMNA 2 */}
          <div className="d-flex flex-column">
            <span>{user.profile}</span>
            <span>{user.profile2}</span>
            <span>{user.profile3}</span>
            <span>{user.profile4}</span>
          </div>
        </div>
      </main>
    </div>
  )
}

