import React from "react";
import Board from "./components/Board";
import Login from "./components/Login";
import Home from "./components/Home";
import Protected from "./components/Protected";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<Protected />}>
                    <Route exact path="/board" element={<Board />} />
                </Route>
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
