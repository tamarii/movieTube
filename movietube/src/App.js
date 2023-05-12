import { Routes, Route } from 'react-router-dom';
import AppHome from './pages/AppHome';
import FavoritesPage from './pages/FavoritesPage';
import About from "./pages/About"
import HeaderNav from "./components/HeaderNav";
import FooterLine from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <div className="App">

      <HeaderNav />

      <Routes>
        <Route path='/' element={<AppHome />}></Route>
        <Route path='/FavoritesPage' element={<FavoritesPage />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>

      <FooterLine />

    </div>
  );
}

export default App;
