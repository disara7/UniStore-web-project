import React, { useState } from "react";
import "./SellerNav.css";
import logo_small from "../../../Components/Assets/images/logo_small.png";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const SellerNav = () => {
  // const [menu, setMenu] = useState('Home');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="sellernav-menu">
      <div className="left-part">
        <div className="sellernav-logo">
          <img src={logo_small} alt="" />
        </div>
        <div>
          <ul
            id="sellernav-list"
            className={clicked ? "#sellernav-list active" : "#sellernav-list"}
          >
            <li>
              <Link
                className={pathname === "/SellerDashboard" ? "active" : ""}
                to="/SellerDashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/SellerDashboard/SellerStatistic"
                    ? "active"
                    : ""
                }
                to="/SellerDashboard/SellerStatistic"
              >
                Statistic
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/SellerDashboard/SellerProducts" ? "active" : ""
                }
                to="/SellerDashboard/SellerProducts"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-part">
        <div className="sellernav-button">
          <div>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                startIcon={<CloudUploadOutlinedIcon />}
                onClick={() => navigate("/SellerDashboard/SellerUploadProduct")}
              >
                Upload
              </Button>
            </ThemeProvider>
          </div>
        </div>

        {/* <Link to='/Login'><button>Register</button></Link> */}
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div
          className={clicked ? "mobileOverlay active" : "mobileOverlay"}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};

export default SellerNav;
