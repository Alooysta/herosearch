import Home from "./Components/Home";
import View from "./Components/View";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Sobre from "./Components/Sobre";


function App() {
  return (
    <div>
      <Routes>
      <Route path = {'/pesquisa'} element = {<Home />} />
      <Route path = {'/:id'} element = {<Sobre />} />
      </Routes>
      
    </div>
  );
}

export default App;
