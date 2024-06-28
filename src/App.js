import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Router,Routes,Route,BrowserRouter} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import ProductListing from './component/ProductListing';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/products" element = {<Products/>} />
        <Route path = "/product/:id" element = {<Product/>}/>
        <Route path ="/cart" element ={<Cart/>}/>
        <Route path = "/ProductListing" element ={<ProductListing/>}/>
        <Route path ="/Contact" element ={<Contact/>}/>
        <Route path ="/About" element ={<About/>}/>

       
        

      </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
