import { useState } from "react";
import { useNavigate } from "react-router-dom"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useMovie } from "../context/AppContext";


export const Register = () => {

    const navigate = useNavigate();
    const {createUser} = useMovie();
    const [dataUser, setDataUser] = useState({
        name: '',
        email: '',
        password: '',
        date: '',
        gender: '',
        profile: ''
    });


  return (
    <div className='bg-dark d-flex justify-content-center align-items-center fondo text-white imgDeFondo p-5'>
        <Formik initialValues={dataUser}
                enableReinitialize
                validationSchema={Yup.object({
                    name: Yup.string().max(25, 'El nombre no puede tener mas de 25 caracteres').trim().required("Nombre de usuario requerido"),
                    email: Yup.string().email('Introduce un email válido porfavor, no olvides el @').trim().lowercase().required("Email requerido"),
                    password: Yup.string().min(8, 'Necesitas una contraseña con un minimo de 8 caracteres').trim().required("Contraseña requerida"),
                    profile: Yup.string().min(5, "Necesitas un nombre de perfil que tenga como minimo 5 letras").trim().required("Nombre de perfil requerido"),
                    date: Yup.number().required("Año de nacimiento requerido")

                  })}
                onSubmit={async (values, actions) => {
                    await createUser(values);
                    actions.setSubmitting(true);
                    navigate("/");
                }}
        >

            {({handleSubmit, isSubmitting}) => (
                <Form onSubmit={handleSubmit} className="bg-dark bg-opacity-75 form-control-sm p-5 rounded border-top border-bottom border-2">
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h2 className="me-5 mb-1 fs-3 fw-bold">Registrar usuario</h2>
                        <button className='btn btn-light text-black fw-bold btn-sm px-2 py-1' disabled={isSubmitting} onClick={() => navigate("/")}>Volver</button>
                    </div>

                    <label className='form-label text-sun m-0 fs-6 fst-italic' htmlFor="n">Nombre Completo</label>
                    <Field className="form-control mx-0 mt-1 mb-1" placeholder='ejemplo123' name="name" id="n"/>
                        <ErrorMessage name='name' component="p" className="text-danger"/>

                    <label className='form-label text-sun m-0 fs-6 fst-italic' htmlFor="c">Correo electronico</label>
                    <Field className="form-control mx-0 mt-1 mb-1" placeholder='ejemplo123@gmail.com' name="email" id="c"/>
                        <ErrorMessage name='email' component="p" className="text-danger"/>
                    
                    <label className='form-label text-sun m-0 fs-6 fst-italic' htmlFor="p">Contraseña</label>
                    <Field className="form-control mx-0 mt-1 mb-1" placeholder='***********' name="password" id="p"/>
                        <ErrorMessage name='password' component="p" className="text-danger"/>
                    
                    <label className='form-label text-sun m-0 fs-6 fst-italic' htmlFor="a">Año de nacimiento</label>
                    <Field className="form-control mx-0 mt-1 mb-1" placeholder='1999' maxLength="4" name="date" id="a"/>
                        <ErrorMessage name='date' component="p" className="text-danger"/>
                    
                    <label className='form-label text-sun m-0 fs-6 fst-italic' htmlFor="g">Tu género</label>
                    <Field className="form-control mx-0 mt-1 mb-1" placeholder='femenino/masculino' name="gender" id="g"/>
                        <ErrorMessage name='gender' component="p" className="text-danger"/>
                    
                    <label className='form-label text-sun m-0 fs-6 fst-italic' htmlFor="u">Tu nombre de usuario/perfil</label>
                    <Field className="form-control mx-0 mt-1 mb-4" placeholder='Usuario87' name="profile" id="u"/>
                        <ErrorMessage name='profile' component="p" className="text-danger"/>

                    
                    <button className='btn-sun fw-bold' type='submit' disabled={isSubmitting}>{isSubmitting ? "Registrando..." : "Registrarse"}</button>

                </Form>
            )}
        </Formik>
    </div>
  )
}

