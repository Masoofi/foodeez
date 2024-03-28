import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrders/PlaceOrder';


function App() {
  return (
    <div className="App">
      <div className="container">
         <Navbar/>
           <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/cart'} element={<Cart/>}/>
              <Route path={'/order'} element={<PlaceOrder/>}/>
           </Routes>
         <Footer/>
      </div>  
    </div>
  );
}

export default App;
