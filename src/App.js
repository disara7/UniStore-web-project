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
import Payment from './Pages/Payment/payment';
// import SellerNav from './SellerSide/SellerComponents/SellerNav/SellerNav';
import SellerDashboard from './SellerSide/SellerPages/SellerDashboard/SellerDashboard';
import SellerStatistic from './SellerSide/SellerPages/SellerStatistics/SellerStatistics';
import SellerUploadProduct from './SellerSide/SellerPages/SellerUploadProduct/SellerUploadProduct';
import UserProfile from './Pages/home/user';
import BecomeSeller from './Pages/createseller';

// import Item from './Components/items/item';
// import ProductDisplay from './Components/ProductDisplay/product_display';
import UnistorecontextProvider from './Context/unistorecontextProvider';
// import Payment from './Pages/Payment/payment';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UnistorecontextProvider>
       
        <Nav/>
        {/* <SellerNav/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Preloved' element={<Preloved category="preloved"/>}/>
          <Route path='/CraftsWorld' element={<CraftsWorld category="craftsworld"/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Product' element={<Product />}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/Cart' element={<Cart/>}/> 
          <Route path='/Login' element={<Login/>}/> 
          <Route path='/CreateAccount' element={<CreateAccount/>}/> 
          <Route path='/Finish' element={<Finish/>}/>   
          <Route path='/UserProfile' element={<UserProfile/>}/>
          <Route path='/BecomeSeller' element={<BecomeSeller/>}/>    
                   
          <Route path='/SellerDashboard/About' element={<About/>}/> 
          <Route path='/SellerDashboard' element={<SellerDashboard/>}/>       
          <Route path='/SellerDashboard/SellerStatistic' element={<SellerStatistic/>}/> 
          <Route path='/SellerDashboard/SellerUploadProduct' element={<SellerUploadProduct/>}/>
        </Routes>
        <Footer/>
        </UnistorecontextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
