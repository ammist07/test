import React from 'react'
import Board from './components/Board'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Protected from './components/Protected'
import { Routes, Route,  } from 'react-router-dom'
import './App.css'

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route element={<Protected />}>
                    <Route exact path="/board" element={<Board />} />
                    <Route exact path="/profile" element={<UserProfile />} />
                </Route>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App
