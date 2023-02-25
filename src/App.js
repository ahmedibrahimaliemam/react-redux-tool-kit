import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Bag from "./components/bag";
import Login from "./components/login";
import Register from "./components/register";
import Favorite from "./components/favorite";
function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Cart/></>}/>
        <Route path="/cart" element={<><Navbar/><Cart/></>}/>
        <Route path="/bag" element={<><Navbar/><Bag/></>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/favorite" element={<><Navbar/><Favorite/></>} />
      </Routes>
     
      </BrowserRouter>

    </div>
    
  );
}

export default App;
