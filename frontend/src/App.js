import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { React, userContext } from "react";

import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import CreateAccount from './components/CreateAccount/CreateAccount';
import ReservedTable from './components/ReservedTable/ReservedTable';
import TableQuery from './components/TableQuery/TableQuery';
import SelectTables from './components/SelectTables/SelectTables';
import PaymentPage from './components/DummyPaymentPage/PaymentPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
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
          <Route exact path='/selecttables' element={<SelectTables/>}>
            <SelectTables />
          </Route>
          <Route exact path = '/paymentpage' element = {<PaymentPage/>}>
            <PaymentPage/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
