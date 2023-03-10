import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from "./Pages/Main";
import { ContactUs } from "./Pages/ContactUs";
import { Cars } from "./Pages/Cars";
import { CarRentalConditions } from "./Pages/CarRentalConditions";
import { AboutUs } from './Pages/About';
import { SpecialOffers } from './Pages/SpecialOffers';
import { UnderConstruction } from './Pages/UnderConstruction';
import { DubaiGuide } from './Pages/DubaiGuide';
import { Layout } from "./Pages/Layout";
import { NotFound } from './Pages/NotFound'
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './helpers/scrollToTop'
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

const App = () => {
  useEffect(() => {
    Aos.init({
      debounceDelay: 50
    });
  }, [])

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 100000 }}
      />
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/car-list" element={<Cars/>} />
            <Route exact path="/conditions" element={<CarRentalConditions/>} />
            <Route exact path="/about" element={<AboutUs/>} />
            <Route exact path="/contacts" element={<ContactUs/>} />
            <Route exact path="/special-offers" element={<SpecialOffers/>} />
            <Route exact path="/yacht-list" element={<UnderConstruction/>} />
            <Route exact path="/dubai-guide" element={<DubaiGuide />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
