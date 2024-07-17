import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Erro404 from './pages/erro404';
import Home from './pages/home';
import Checkin from './pages/checkin';
import Info from './pages/info';
import Locais from './pages/locais';
import PageCadastro from './pages/page_cadastro';
import PageLogin from './pages/page_login';
import Perfil from './pages/perfil';
import Sobre from './pages/sobre';

function App() {
  return (
    <div>
    <Routes>
      <Route path='*' element={<Erro404/>}>
      </Route>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/checkin' element={<Checkin/>}>
      </Route>
      <Route path='/info' element={<Info/>}>
      </Route>
      <Route path='/locais' element={<Locais/>}>
      </Route>
      <Route path='/pagecadastro' element={<PageCadastro/>}>
      </Route>
      <Route path='/pagelogin' element={<PageLogin/>}>
      </Route>
      <Route path='/checkin' element={<Checkin/>}>
      </Route>
      <Route path='/perfil' element={<Perfil/>}>
      </Route>
      <Route path='/sobre' element={<Sobre/>}>
      </Route>    
    </Routes>
    </div>
  );
}

export default App;
