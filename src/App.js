import './index.css';
import NavBar from './components/NavBar';
import FullView from './components/FullView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <>
              <FullView/>
            </>
          } />
          <Route path='/movie-details/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
