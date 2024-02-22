import React, {useState,useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './nav.css';
import logo_small from '../Assets/images/logo_small.png'
import { FaRegUser } from "react-icons/fa";
import { auth,storage,ref,getDownloadURL } from '../../../src/FirebaseConfig/firebase';
import profilePic from '../../Components/Assets/images/user.png'
import { NavLink,useLocation } from 'react-router-dom';


const Nav = () => {
  // const [menu, setMenu] = useState('Home');
  const [clicked,setClicked]= useState(false);
  const [scrolled,setScrolled] = useState(false);
  const isLoginOrRegister =
    window.location.pathname.startsWith('/Login') ||
    window.location.pathname.startsWith('/CreateAccount') ||
    window.location.pathname.startsWith('/Finish');
  const [profilePictureUrl, setProfilePictureUrl] = useState(profilePic);
  const location = useLocation();
  const [activedPath, setActivedPath] = useState('/');

  useEffect(() => {
    setActivedPath(location.pathname);
  }, [location.pathname]);
  
  const handleClick = () => {
    setClicked(!clicked);
  }
  const changeBg = () => {
    if (window.scrollY >= 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }


  window.addEventListener('scroll',changeBg);

  
  useEffect(() => {
    const getUserProfilePicture = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const profilePictureRef = ref(storage, `user_profile_pictures/${user.uid}/ProfilePic`);
          const url = await getDownloadURL(profilePictureRef);
          setProfilePictureUrl(url);
        } catch (error) {
          console.error('Error fetching profile picture:', error);
          // Handle error fetching profile picture
        }
      }
    };

    getUserProfilePicture();
  }, []);

  return (
    <div className={`nav-menu ${scrolled ? 'active' : ''} ${isLoginOrRegister ? 'hidden' : ''}`}>
      <div className='left-part'>
        <div className="nav-logo">
          <img src={logo_small} alt="" />
        </div>
        <div>
          <ul id="nav-list" className={clicked ? '#nav-list active': '#nav-list'}>
          <li>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <span className={activedPath === '/' ? "active" : ""}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Preloved" style={{ textDecoration: 'none' }}>
              <span className={activedPath === '/Preloved' ? "active" : ""}>PreLoved</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CraftsWorld" style={{ textDecoration: 'none' }}>
              <span className={activedPath === '/CraftsWorld' ? "active" : ""}>CraftsWorld</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" style={{ textDecoration: 'none' }}>
              <span className={activedPath === '/About' ? "active" : ""}>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" style={{ textDecoration: 'none' }}>
              <span className={activedPath === '/Contact' ? "active" : ""}>Contact</span>
            </NavLink>
          </li>
          </ul>
        </div>
      </div>
      <div className='right-part'>
        <div className="nav-button">
          <div>
              <NavLink to='./Cart'>
                <div className="icon-style">
                  <BsCart2 />
                </div>
              </NavLink>
            <div className="cart-count">0</div>
          </div>
          {auth.currentUser ? (
            <div>
              <NavLink to='./UserProfile'>
                <div className="icon-style">
                  <img src={profilePictureUrl} alt="" style={{borderRadius:'50%', width:"32px", height:"32px", border: '2px solid white'}}/>
                </div>
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to='./Login'>
                <div className="icon-style">
                  <FaRegUser />
                </div>
              </NavLink>
            </div>
          )}

        </div>
        <div id='mobile' onClick={handleClick}>
          <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'mobileOverlay active' : 'mobileOverlay'} onClick={handleClick}></div>
      </div>
    </div>

  );

}

export default Nav;
