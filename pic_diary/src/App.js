import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import Add from "./components/Add";
import List from "./components/List";
import { dummyData } from "./data/dummyData";
import AddByDate from "./components/AddByDate";

function App() {
  const [picData, setPicData] = useState(dummyData);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="safeBox"></div>
          <main>
            <MenuBar />
            <section className="main">
              <Routes>
                <Route path="/" element={<Home picData={picData} />} />
                <Route path="/list" element={<List picData={picData} />} />
                <Route
                  path="/add"
                  element={<Add picData={picData} setPicData={setPicData} />}
                />
                <Route
                  path="/add/:date"
                  element={
                    <AddByDate picData={picData} setPicData={setPicData} />
                  }
                />
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
