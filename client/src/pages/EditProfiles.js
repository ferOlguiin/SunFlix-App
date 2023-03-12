import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/AppContext";
import imgProfile from "../images/profile.png";
import imgProfile2 from "../images/profile2.png";
import imgProfile3 from "../images/profile3.png";
import imgProfile4 from "../images/profile4.png";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';



export const EditProfiles = () => {

    const {user, editUser} = useMovie();
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        profile: user.profile ? user.profile : '',
        profile2: user.profile2 ? user.profile2 : '',
        profile3: user.profile3 ? user.profile3 : '',
        profile4: user.profile4 ? user.profile4 : ''
    })
    const [keyProfile, setKeyProfile] = useState('');
    const [edit, setEdit] = useState(false); 


    
    const handleEdit = (data) => {
        setKeyProfile(data);
        setEdit(true);
    };

  return (
    <div className="animar d-flex bg-dark justify-content-center align-items-center flex-column fondo p-2">
        <h1 className="fw-bold mb-5 text-light display-3 text-center text-break">¿Que perfil deseas editar?</h1>
        <div className="text-light d-flex justify-content-center align-items-center flex-wrap">
            <div onClick={() => handleEdit("profile")} className="m-3 colorProfile d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded imgOpacity" src={imgProfile} alt="profile1"/>
                <BsPencilFill className=" mb-5 position-absolute display-3"/>
                <h4 className="mt-2">{user.profile ? user.profile : "Invitado 1"}</h4>
            </div>

            <div onClick={() => handleEdit("profile2")} className="m-3 colorProfile d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded imgOpacity" src={imgProfile2} alt="profile2"/>
                <BsPencilFill className=" mb-5 position-absolute display-3"/>
                <h4 className="mt-2">{user.profile2 ? user.profile2 : "Invitado 2"}</h4>
            </div>

            <div onClick={() => handleEdit("profile3")} className="m-3 colorProfile d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded imgOpacity" src={imgProfile3} alt="profile3"/>
                <BsPencilFill className=" mb-5 position-absolute display-3"/>
                <h4 className="mt-2">{user.profile3 ? user.profile3 : "Invitado 3"}</h4>
            </div>

            <div onClick={() => handleEdit("profile4")} className="m-3 colorProfile d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid profiles rounded imgOpacity" src={imgProfile4} alt="profile4"/>
                <BsPencilFill className=" mb-5 position-absolute display-3"/>
                <h4 className="mt-2">{user.profile4 ? user.profile4 : "Invitado 4"}</h4>
            </div>

        </div>
        {
            edit === false ? <button onClick={() => navigate("/profiles")} className="btn-sun fw-bold px-3 mt-5">Listo</button> : ''
        }
        
        {
            edit === false ? '' 
            :
            <Formik initialValues={dataForm}
            enableReinitialize
            validationSchema={Yup.object({
                profile: Yup.string().max(11, "Tu nombre de perfil no puede tener más de 11 letras").trim(),
                profile2: Yup.string().max(11, "Tu nombre de perfil no puede tener más de 11 letras").trim(),
                profile3: Yup.string().max(11, "Tu nombre de perfil no puede tener más de 11 letras").trim(),
                profile4: Yup.string().max(11, "Tu nombre de perfil no puede tener más de 11 letras").trim()
              })}
            onSubmit={async (values, actions) => {
                await editUser(user._id, values);
                actions.setSubmitting(true);
                navigate("/profiles");
            }}
    >
        {({handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit} className="form-control-sm my-5 px-4 py-3 rounded border-top border-bottom border-2 border-light">
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h2 className="text-white m-0 pe-5">Cambia el nombre de tu perfil</h2>
                    <button className='btn btn-danger btn-sm' disabled={isSubmitting} onClick={() => setEdit(false)}>Cancelar</button>
                </div>

                <label className='form-label text-light m-0 fw-bold' htmlFor="n">Nuevo nombre de perfil</label>
                <Field className="form-control bg-dark text-light my-1" name={keyProfile === "profile" ? "profile" : keyProfile === "profile2" ? "profile2" : keyProfile === "profile3" ? "profile3" : "profile4"} id="n"/>

                <ErrorMessage name={keyProfile === "profile" ? "profile" : keyProfile === "profile2" ? "profile2" : keyProfile === "profile3" ? "profile3" : "profile4"} component="p" className="text-warning"/>
                                
                <button className='btn btn-danger text-light fw-bold mt-4' type='submit' disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>

            </Form>
        )}

    </Formik>
        }

      </div>
  )
}

