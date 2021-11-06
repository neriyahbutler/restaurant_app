import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import React, { userContext } from "react";

import logo from './logo.svg';

import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import ReservedTable from './components/ReservedTable/ReservedTable';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route exact path='/signin' element={<Signin/>}>
            <Signin />
          </Route>
          <Route exact path='/reservedtable' element={<ReservedTable/>}>
            <ReservedTable />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
