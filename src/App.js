import './App.css';
import Nav from './Components/Nav/nav';
import Home from './Pages/home/home';
import Preloved from './Pages/home/Preloved/preloved';
import About from './Pages/about';
import Contact from './Pages/contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/home/product';
import Cart from './Pages/home/cart';
import Login from './Pages/home/login';
import CraftsWorld from './Pages/home/CraftsWorld/craftsworld';
import Footer from './Components/footer/Footer';
import CreateAccount from './Pages/home/createaccount';
import Finish from './Pages/home/signupfinish';
import Item from './Components/items/item';
import ProductDisplay from './Components/ProductDisplay/product_display';
import unistorecontextProvider from './Context/unistorecontext';
import Payment from './Pages/Payment/payment';
import SellerNav from './SellerSide/SellerComponents/SellerNav';
import SellerDashboard from './SellerSide/SellerPages/SellerDashboard/SellerDashboard';
import SellerStatistic from './SellerSide/SellerPages/SellerStatistics/SellerStatistics';
import SellerUploadProduct from './SellerSide/SellerPages/SellerUploadProduct/SellerUploadProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
       
        {/* <Nav/> */}
        {/* <SellerNav/> */}
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='/preloved' element={<Preloved category="preloved"/>}/>
            <Route path='/craftsworld' element={<CraftsWorld category="craftsworld"/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path="/Product/:productId" element={<Product />} />
            <Route path='/cart' element={<Cart/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/createaccount' element={<CreateAccount/>}/> 
            <Route path='/finish' element={<Finish/>}/>
            <Route path='/Payment' element={<Payment />}/>         
          <Route path='/sellerdashboard/About' element={<About/>}/> 
          </Route>
          <Route path='/sellerdashboard' element={<SellerDashboard/>}/>       
          <Route path='/sellerdashboard/SellerStatistic' element={<SellerStatistic/>}/> 
          <Route path='/sellerdashboard/SellerUploadProduct' element={<SellerUploadProduct/>}/>    
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
