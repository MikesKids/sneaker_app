import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import './App.css'
import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Edit from './Pages/Edit';
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';

function App() { 



  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sneakers' element={<Index/>} />
            <Route path='/sneakers/new' element={<New/>} />
            <Route path='/sneakers/:id/edit' element={<Edit/>} />
            <Route path='/sneakers/:id' element={<Show/>} />
            <Route path='*' element={ <FourOFour/>} />
          </Routes>
        </main>
      </Router>
    </div>
   
  )
}

export default App
