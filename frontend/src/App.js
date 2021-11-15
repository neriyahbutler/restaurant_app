import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import React, { userContext } from "react";

import logo from './logo.svg';

import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import CreateAccount from './components/CreateAccount/CreateAccount';
import ReservedTable from './components/ReservedTable/ReservedTable';
import TableQuery from './components/TableQuery/TableQuery';
import PaymentPage from './components/PaymentPage/PaymentPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<TableQuery/>}>
            <TableQuery />
          </Route>
          <Route exact path='/signin' element={<Signin/>}>
            <Signin />
          </Route>
          <Route exact path='/reservedtable' element={<ReservedTable/>}>
            <ReservedTable />
          </Route>
          <Route exact path='/createaccount' element={<CreateAccount/>}>
            <CreateAccount />
          </Route>
          <Route exact path = '/paymentpage' elemnt = {<PaymentPage/>}>
            <PaymentPage/>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
