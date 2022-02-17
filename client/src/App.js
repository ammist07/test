import React from 'react'
import Board from './components/Board'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Protected from './components/Protected'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<Protected />}>
                    <Route exact path="/board" element={<Board />} />
                </Route>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App
