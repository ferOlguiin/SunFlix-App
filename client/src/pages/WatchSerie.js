import { Spinner } from "../components/Spinner";
import VideoShow from "../components/VideoShow";
import { useMovie } from "../context/AppContext"

export const WatchSerie = () => {

    const {chapterLink} = useMovie();

  return (
    <div className='text-warning'>
        {
            chapterLink ? <VideoShow data={chapterLink}/> : <Spinner/>
        }
    
    </div>
  )
}

