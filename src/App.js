import './App.css';
import Nav from './Components/Nav/nav.jsx';
import Home from './Pages/home/home.jsx';
import Preloved from './Pages/home/Preloved/preloved.jsx';
import About from './Pages/about.jsx';
import Contact from './Pages/contact.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/home/product.jsx';
import Cart from './Pages/home/cart.jsx';
import Login from './Pages/home/login.jsx';
import CraftsWorld from './Pages/home/CraftsWorld/craftsworld.jsx';
import Footer from './Components/footer/Footer.jsx';
import CreateAccount from './Pages/home/createaccount.jsx';
import Finish from './Pages/home/signupfinish.jsx';
// import Payment from './Pages/Payment/payment';
// import SellerNav from './SellerSide/SellerComponents/SellerNav/SellerNav';
import SellerDashboard from './SellerSide/SellerPages/SellerDashboard/SellerDashboard.jsx';
import SellerStatistic from './SellerSide/SellerPages/SellerStatistics/SellerStatistics.jsx';
import SellerUploadProduct from './SellerSide/SellerPages/SellerUploadProduct/SellerUploadProduct.jsx';

import SellerProducts from "./SellerSide/SellerPages/SellerProducts/SellerProducts.jsx";

import UserProfile from './Pages/home/user.jsx';
import BecomeSeller from './Pages/createseller.jsx';

// import Item from './Components/items/item';
// import ProductDisplay from './Components/ProductDisplay/product_display';
import UnistorecontextProvider from './Context/unistorecontextProvider.jsx';
// import Payment from './Pages/Payment/payment';


function App() {
  return (
    <div>
      <BrowserRouter>
        <UnistorecontextProvider>
          <Nav />
          {/* <SellerNav/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Preloved"
              element={<Preloved category="preloved" />}
            />
            <Route
              path="/CraftsWorld"
              element={<CraftsWorld category="craftsworld" />}
            />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Finish" element={<Finish />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/BecomeSeller" element={<BecomeSeller />} />

            <Route path="/SellerDashboard/About" element={<About />} />
            <Route path="/SellerDashboard" element={<SellerDashboard />} />
            <Route
              path="/SellerDashboard/SellerStatistic"
              element={<SellerStatistic />}
            />
            <Route
              path="/SellerDashboard/SellerUploadProduct"
              element={<SellerUploadProduct />}
            />
            <Route
              path="/SellerDashboard/SellerProducts"
              element={<SellerProducts />}
            />
          </Routes>
          <Footer />
        </UnistorecontextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
