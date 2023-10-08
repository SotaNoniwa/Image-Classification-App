import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Art from "./components/Art.js";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/art" element={<Art />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;