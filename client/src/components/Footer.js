import {FaFacebookF, FaGithub, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

export const Footer = (homepage) => {
  return (
    <footer className="bg-black pt-2">
        <div className='container text-secondary p-5'>
          {
            homepage ? <div className="d-flex justify-content-center align-items-center pt-1 pb-4 flex-wrap">
              <a href="http://www.google.com" rel="noreferrer" target="_blank" className='text-sun text-decoration-none fs-3 mx-4'><FaFacebookF/></a>
              <a href="http://www.google.com" rel="noreferrer" target="_blank" className='text-sun text-decoration-none fs-3 mx-4'><FaInstagram/></a>
              <a href="http://www.google.com" rel="noreferrer" target="_blank" className='text-sun text-decoration-none fs-3 mx-4'><FaTwitter/></a>
              <a href="http://www.google.com" rel="noreferrer" target="_blank" className='text-sun text-decoration-none fs-3 mx-4'><FaYoutube/></a>
              <a href="https://github.com/ferOlguiin?tab=repositories" rel="noreferrer" target="_blank" className='text-sun text-decoration-none fs-3 mx-4'><FaGithub/></a>
            </div> : ''
          }  
          <h5 className='mb-4 text-center text-light fw-bold'>¿Preguntas? Llama al 0800 345 XXXX</h5> 
          <div className='d-flex justify-content-center align-items-center flex-wrap'>
              <div className='d-flex justify-content-center align-items-center flex-column py-2 px-2'>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Preguntas frecuentas</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Relaciones con inversionistas</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Privacidad</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Prueba de velocidad</a>
              </div>
              <div className='d-flex justify-content-center align-items-center flex-column py-2 px-2'>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Centro de ayuda</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Empleo</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Preferencia de cookies</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Avisos legales</a>
              </div>
              <div className='d-flex justify-content-center align-items-center flex-column py-2 px-2'>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Cuenta</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Formas de ver</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Solo en netflix</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Información corporativa</a>
              </div>
              <div className='d-flex justify-content-center align-items-center flex-column py-2 px-2'>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Prensa</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Términos de uso</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Contáctanos</a>
                <a href="/" className='text-decoration-none text-secondary mb-1'>Prueba de velocidad</a>
              </div>
          </div>
          <h4 className='text-center text-light mt-5 fw-bold'>Sunflix Argentina</h4>
        </div>
      </footer>
  )
}

