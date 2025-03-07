import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pagess/Home/Home'
import Login from './pagess/Login/Login';
import Player from './pagess/Player/Player';

import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div> 
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/Player/:id" element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
