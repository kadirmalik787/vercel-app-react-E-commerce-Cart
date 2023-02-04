import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./componets/Home";
import Header from "./componets/Header";
import {Toaster} from "react-hot-toast"
import Cart from "./componets/Cart";


import './style/app.scss'

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Toaster/>
   </Router>
  );
}

export default App;
