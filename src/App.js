import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import RecommendedVideos from "./Components/RecommendedVideos/RecommendedVideos";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={[<h1>Search Page</h1>]}
          ></Route>
          <Route
            path="/"
            element={[
              <div className="app__page">
                <Sidebar />,
                <RecommendedVideos />
              </div>,
            ]}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
