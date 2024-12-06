
import React from 'react';
import './App.css';
import LoginHomePage from './Componentes/Login/LoginHomePage';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import LoginIdPage from './Componentes/LoginId/LoginIdPage';
import Movie from './Componentes/MovieRow/Movie'
import CreateAcount from './Componentes/LoginId/CreateAcount';
import UserLoginPassword from './Componentes/LoginId/UserLoginPassword';
function App() {
  return (
    <div className="App">
     <div className="CenterPage">
  
     </div>
     <Routes>
      <Route path="/" element={<LoginHomePage/>} />
      <Route path='/LoginId' element={<LoginIdPage/>}/>
      <Route path='/MoviePage' element={<Movie/>}/>
      <Route path='/Newuser' element={<CreateAcount/>}/>
      <Route path='/UserPassord' element={<UserLoginPassword/>}/>
      
</Routes>
    </div>
  );
}

export default App;
