import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Add from './components/Add';
import List from './components/List';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <div className='safeBox'>
        </div>
        <main>
          <MenuBar />
          <section className='main'>
            {/* <Home />
            <Add />
            <List /> */}
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/list" element={<List />} />
              <Route path="/add" element={<Add />} /> 
          </Routes>
          </section>
        </main>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
