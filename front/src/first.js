import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

function first() {
  return (
   <>
     <BrowserRouter>
     <Routes>
       <Route to="/" element={<App/>}></Route>
     </Routes>
     </BrowserRouter>
   </>
  )
}

export default first