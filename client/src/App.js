import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;