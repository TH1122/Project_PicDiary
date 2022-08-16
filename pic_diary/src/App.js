import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import Add from "./components/Add";
import List from "./components/List";
import AddByDate from "./components/AddByDate";

function App() {
  const [picData, setPicData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/diary/")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setPicData(data);
      });
  }, [isPending]);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="safeBox"></div>
          <main>
            <MenuBar />
            <section className="main">
              <Routes>
                <Route
                  path="/"
                  element={!isPending && <Home picData={picData} />}
                />
                <Route path="/list" element={<List picData={picData} />} />
                <Route
                  path="/add"
                  element={<Add picData={picData} setPicData={setPicData} />}
                />
                <Route
                  path="/add/:date"
                  element={
                    <AddByDate
                      picData={picData}
                      setPicData={setPicData}
                      setIsPending={setIsPending}
                    />
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
