import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Bag from "./components/bag";
import Login from "./components/login";
import Register from "./components/register";
function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Cart/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/bag" element={<Bag/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
     
      </BrowserRouter>

    </div>
    
  );
}

export default App;
