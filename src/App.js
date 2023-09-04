
import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from "react-router-dom"
import Navbarpannel from './components/Navbarpannel';
function App() {
  return (
    <div className="App">
      
     
      <Navbarpannel/>
      <Routes>
        <Route exact path="/" element={<Product />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
     
     
    </div>
  );
}

export default App; 
