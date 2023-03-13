import { Navbar } from "../components/Navbar"
import { useMovie } from "../context/AppContext"

export const Help = () => {

  const {user} = useMovie();

  return (
    <div>
      <Navbar/>
      <main className="text-light container">
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="fw-bold">Centro de ayuda</h2>
          <input placeholder="¿En qué podemos ayudarte?" className="form-control-lg w-50 fw-bold"/>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <h2>Hola {user.name}</h2>
          <p>Recomendado para ti</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <button className="btn btn-secondary me-1">Como mantener segura tu cuenta</button>
          <button className="btn btn-secondary me-1">Control parental de la app</button>
          <button className="btn btn-secondary me-1">Como cambiar tu plan</button>
        </div>
      </main>
    </div>
  )
}

