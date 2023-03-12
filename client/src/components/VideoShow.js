import ReactPlayer from 'react-player/youtube'
import { Navbar } from './Navbar';

export const VideoShow = ({data}) => {

    let widthOfYourPc = window.innerWidth;
    let heightOfYourPc = window.innerHeight - 11;
    let historialDeUrl = window.location;
    console.log(historialDeUrl)

  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
            <ReactPlayer autoPlay controls width={widthOfYourPc} height={heightOfYourPc} url={data || data.link} />
        </div>
    </div>
  )
}

export default VideoShow