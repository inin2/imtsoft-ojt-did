import React from 'react';
import './reset.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderState from './pages/OrderState/OrderState';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderState />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
