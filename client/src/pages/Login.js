import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useMovie } from "../context/AppContext";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Footer } from "../components/Footer";


export const Login = () => {

  const navigate = useNavigate();
  const {getUser} = useMovie();
  const [dataform, setDataForm] = useState({
    email: '',
    password: ''
  });
  

  return (
    <div className="fondo imgDeFondo">
        
        <nav className="d-flex justify-content-center justify-content-md-start align-items-center pt-2 px-5">
              <a href="/" className="text-sun text-decoration-none display-4 fw-bold">Sunflix</a>
        </nav>

        <main className="vh-100 d-flex justify-content-center align-items-center px-3">
            <Formik initialValues={dataform}
                  validationSchema={Yup.object({
                    email: Yup.string().email().trim().lowercase().required("Email requerido"),
                    password: Yup.string().trim().required("Contraseña requerida")
                  })}
                  onSubmit={async (values, actions) => {
                            const res = await getUser(values);
                            if(res.length === 1){
                              actions.setSubmitting(true);
                              navigate("/profiles");
                            } else {
                              toast.error("Mail o contraseña incorrecta", {
                                duration: 4000
                              });
                              actions.resetForm();
                            }
                  }}
                  enableReinitialize
              >
            {({handleSubmit, isSubmitting}) => (
              <Form onSubmit={handleSubmit} className='form-control-sm p-5 rounded formularioLogin flex-column d-flex'>
                  <h3 className="text-sun text-break text-center mb-3 fw-bold">Iniciar sesión</h3>

                  <label className='form-label text-light m-0 fw-bold' htmlFor="e">Email</label>
                  <Field className="form-control fw-bold bg-secondary text-light border border-secondary mt-1 mb-3 mx-0" placeholder="Email" name="email" id="e"/>
                    <ErrorMessage name='email' component="p" className="text-danger"/>

                  <label className='form-label text-light m-0 fw-bold' htmlFor="c">Contraseña</label>
                  <Field className="form-control fw-bold bg-secondary border border-secondary text-light mt-1 mb-3 mx-0" placeholder="Contraseña" name="password" id="c"/>
                    <ErrorMessage name='password' component="p" className="text-danger"/>
                    
                  <button type='submit' className='btn-sun fw-bold mt-4' disabled={isSubmitting}>{isSubmitting ? 'Iniciando sesion...' : 'Iniciar sesion'}</button>  
                  <Link to="/register" className='text-end text-secondary text-break text-decoration-none mt-5'>¿Primera vez en Sunflix? <b>Suscríbete ahora</b></Link>
              </Form>
            )}
            </Formik>    
        </main>

        <Footer/>
        
    </div>
  )
};

