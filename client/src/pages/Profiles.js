import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/AppContext";

import imgProfile from "../images/profile.png";
import imgProfile2 from "../images/profile2.png";
import imgProfile3 from "../images/profile3.png";
import imgProfile4 from "../images/profile4.png";

export const Profiles = () => {

    const { user, setUserProfile } = useMovie();
    const navigate = useNavigate();

    const handleProfile = (data) => {
        setUserProfile(data);
        navigate("/homepage");
    };

  return ( 
        

      user === undefined ? "No existe tal usuario" 
      :
      <div className="animar d-flex bg-dark justify-content-center align-items-center flex-column fondo p-2">
        <h1 className="fw-bold mb-5 text-light display-3 text-center text-break">¿Quién esta viendo ahora?</h1>
        <div className="text-light d-flex justify-content-center align-items-center flex-wrap">
            <div onClick={() => handleProfile(user.profile ? user.profile : 'Invitado 1')} className="btnHover mx-3 my-3 d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded" src={imgProfile} alt="profile1"/>
                <h4 className="mt-2 text-secondary">{user.profile ? user.profile : "Invitado 1"}</h4>
            </div>
            <div onClick={() => handleProfile(user.profile2 ? user.profile2 : "Invitado 2")} className="btnHover mx-3 my-3 d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded" src={imgProfile2} alt="profile2"/>
                <h4 className="mt-2 text-secondary">{user.profile2 ? user.profile2 : "Invitado 2"}</h4>
            </div>
            <div onClick={() => handleProfile(user.profile3 ? user.profile3 : "Invitado 3")} className="btnHover mx-3 my-3 d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded" src={imgProfile3} alt="profile3"/>
                <h4 className="mt-2 text-secondary">{user.profile3 ? user.profile3 : "Invitado 3"}</h4>
            </div>
            <div onClick={() => handleProfile(user.profile4 ? user.profile4 : "Invitado 4")} className="btnHover mx-3 my-3 d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded" src={imgProfile4} alt="profile4"/>
                <h4 className="mt-2 text-secondary">{user.profile4 ? user.profile4 : "Invitado 4"}</h4>
            </div>
        </div>
        <button onClick={() => navigate("/editprofiles")} className="btn btn-outline-secondary text-light mt-5">Administrar perfiles</button>
      </div>
    
      
  )
}

