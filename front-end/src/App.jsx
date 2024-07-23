import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import './App.css'
import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Index from './Pages/Index';

function App() { 



  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sneakers' element={<Index/>} />
            <Route/>
            <Route/>
            <Route/>
            <Route/>
          </Routes>
        </main>
      </Router>
    </div>
   
  )
}

export default App
