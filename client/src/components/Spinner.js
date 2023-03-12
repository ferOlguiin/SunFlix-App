
export const Spinner = ({data}) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-black bg-gradient">
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        {
            data ? <h4 className="m-0 text-warning pt-3">Cambiando a {data}</h4> : ''
        }
    </div>    
  )
}

