import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement=document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}> </Route>
    </Routes>
  </BrowserRouter>,
);

