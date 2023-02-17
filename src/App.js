import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from "./Pages/Main";
import { Cars } from "./Pages/Cars";
import { CarRentalConditions } from "./Pages/CarRentalConditions";
import { Layout } from "./Pages/Layout";
import { NotFound } from './Pages/NotFound'
import Aos from 'aos';
import 'aos/dist/aos.css'

import './App.scss';

const App = () => {

  useEffect(() => {
    Aos.init({
      debounceDelay: 50
    });
  }, [])

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/car-list" element={<Cars/>} />
            <Route exact path="/conditions" element={<CarRentalConditions/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
