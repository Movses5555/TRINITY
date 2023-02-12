import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from "./Pages/Main";
import { Cars } from "./Pages/Cars";
import { Layout } from "./Pages/Layout";
import { NotFound } from './Pages/NotFound'

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/car-list" element={<Cars/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
