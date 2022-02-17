import React from "react"
import Board from "./components/Board"
import Login from "./components/Login"
import Home from "./components/Home"
import { Routes, Route, Link } from "react-router-dom"
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="board" element={<Board />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
