import './App.css';
import Nav from './Components/Nav/nav';
import Home from './Pages/home/home';
import Preloved from './Pages/home/Preloved/preloved';
import About from './Pages/about';
import Contact from './Pages/contact';
import Product from './Pages/home/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/home/cart';
import Login from './Pages/home/login';
import CraftsWorld from './Pages/home/CraftsWorld/craftsworld';
import Footer from './Components/footer/Footer';
import CreateAccount from './Pages/home/createaccount';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/preloved' element={<Preloved category="preloved"/>}/>
          <Route path='/craftsworld' element={<CraftsWorld category="craftsworld"/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/createaccount' element={<CreateAccount/>}/>         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
