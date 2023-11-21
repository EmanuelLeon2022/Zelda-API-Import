import React from 'react'
import {Route, Routes} from "react-router-dom"
import Main from './pages/Main'
import Nav from './components/Nav'
import Games from './pages/Games'
import Monsters from './pages/Monsters'
import Bosses from './pages/Bosses'

export default function App() {
  return (
    <div className='App'>
    <Nav/>
        {/* ===============================Our Route Context */}
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Games" element={<Games/>}/>
            <Route path="/Monsters" element={<Monsters/>}/>
            <Route path="/Bosses" element={<Bosses/>}/>
        </Routes>

    </div>
  );
}