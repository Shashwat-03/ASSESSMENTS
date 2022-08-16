import React from "react";
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'
import { HomePage } from "./BookStoreApplication/HomePage";
import { Navbar } from "./BookStoreApplication/Navbar";
import Signup from "./BookStoreApplication/Signup";
import { Signin } from "./BookStoreApplication/Signin";
import { Dashboard } from "./BookStoreApplication/Dashboard";
import { Products } from "./BookStoreApplication/Products";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/Signup' element={<Signup></Signup>}></Route>
          <Route path='Signup/Signin' element={<Signin></Signin>}> </Route>
          <Route path='Signup/Signin/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='Signup/Signin/dashboard/products' element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
 )
 }
export default App