import {BsFillPencilFill, BsFillPersonFill, BsFillQuestionCircleFill} from 'react-icons/bs';
import {VscSearch, VscBell} from 'react-icons/vsc';
import { Link, useNavigate } from "react-router-dom";
import { useMovie } from '../context/AppContext';

export const Navbar = ({main}) => {

    const {user, setUserProfile, setLoading, userProfile} = useMovie();
    const navigate = useNavigate();

    const handleSesion = () => {
        setUserProfile('');
        navigate("/login");
      };
    
      const handleProfiles = (name) => {
        setLoading(true);
        setUserProfile(name);
        setTimeout(() => {
          setLoading(false)
        }, 1500);
      }

  return (
    <nav className={`${main ? "fixed-top responsive-navbar" : ""} py-2 px-5 shadow navbar navbar-expand-xl navbar-light`}>
      <div className="container-fluid">
        <Link to="/homepage" className="d-flex d-xl-none text-decoration-none text-sun mb-2 fw-bold display-6">Sunflix</Link>
        <button className="navbar-toggler mb-2 bg-warning bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav align-items-xl-center me-auto mb-2 mb-xl-0">
            <Link to="/homepage" className="d-none d-xl-flex text-decoration-none text-sun me-4 fw-bold display-6">Sunflix</Link>
            <Link to="/homepage" className="fer text-white px-2 text-decoration-none">Inicio</Link>
            <Link to="/series" className="text-white px-2 text-decoration-none">Series</Link>
            <Link to="/peliculas" className="text-white px-2 text-decoration-none">Peliculas</Link>
            <Link to="/news" className="text-white px-2 text-decoration-none">Novedades populares</Link>
            <Link to="/mylist" className="text-white px-2 text-decoration-none">Mi lista</Link>
            <Link to="/allseriescategories" className="text-white px-2 text-decoration-none">Explora por categoria</Link>
          </ul>
          <div className="d-flex justify-content-xl-center justify-content-start align-items-center">
            <span className="text-white p-2"><VscSearch onClick={() => navigate("/search")} className="cursor text-white fs-5"/></span>
            <span className="text-white p-2"><VscBell className="text-white fs-5"/></span>
            <div className="dropdown">
              <button className="btn text-sun dropdown-toggle fs-5" type="button" id="dropdownMenuButton1" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                      {userProfile ? userProfile : 'usuarioRandom'}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark bg-gradient py-0 dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                <li onClick={() => handleProfiles(user.profile)} className={`${user.profile === userProfile ? 'd-none' : 'dropdown-item py-2'}`}>{user.profile === userProfile ? '' : user.profile}</li>
                <li onClick={() => handleProfiles(user.profile2)} className={`${user.profile2 === userProfile || !user.profile2 ? 'd-none' : 'dropdown-item py-2'}`}>{user.profile2 === userProfile ? '' : user.profile2}</li>
                <li onClick={() => handleProfiles(user.profile3)} className={`${user.profile3 === userProfile || !user.profile3 ? 'd-none' : 'dropdown-item py-2'}`}>{user.profile3 === userProfile ? '' : user.profile3}</li>
                <li onClick={() => handleProfiles(user.profile4)} className={`${user.profile4 === userProfile || !user.profile4 ? 'd-none' : 'dropdown-item py-2'}`}>{user.profile4 === userProfile ? '' : user.profile4}</li>
                <li className="dropdown-item mt-2" onClick={() => navigate("/editprofiles")}><BsFillPencilFill className="text-secondary me-1"/> Administrar perfiles</li>
                <li className="dropdown-item" onClick={() => navigate("/account")}><BsFillPersonFill className="text-secondary me-1"/> Cuenta</li>
                <li className="dropdown-item mb-2" onClick={() => navigate("/help")}><BsFillQuestionCircleFill className="text-secondary me-1"/> Centro de ayuda</li>
                <li className="dropdown-item text-sun fw-bold text-center border-top border-secondary py-2" onClick={handleSesion}>Cerrar sesion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

