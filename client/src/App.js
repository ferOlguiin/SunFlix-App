import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { Account, AllSeriesCategories, EditProfiles, Help, Homepage, List, Login, News, NotFoundPage, OnlyMovies, OnlySeries, Profiles, Register, Search, SerieDetails, WatchSerie, WelcomePage } from './pages/indexpages';
import { MovieContainer } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="fondo bg-black bg-gradient">
      <MovieContainer>
        <Routes>

          <Route path="/" element={<WelcomePage/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profiles" element={<Profiles/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/mylist" element={<List/>} />
          <Route path="/allseriescategories" element={<AllSeriesCategories/>} />
          <Route path="/editprofiles" element={<EditProfiles/>} />
          <Route path="/watchserie" element={<WatchSerie/>} />
          <Route path="/series" element={<OnlySeries/>} />
          <Route path="/peliculas" element={<OnlyMovies/>} />
          <Route path="/serie/:id" element={<SerieDetails/>} />


        </Routes>
        <Toaster/>
      </MovieContainer>
    </div>
  );
}

export default App;
