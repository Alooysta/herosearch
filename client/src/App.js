import Home from "./components/Home"
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
      <Route path = {'/'} element = {<Home />} />
      <Route path = {'/:id'} element = {<About />}  />
      </Routes>


    </div>
  );
}

export default App;
