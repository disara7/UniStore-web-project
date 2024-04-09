import React from 'react'
import './SellerDashboard.css'
import SellerNav from "../../SellerComponents/SellerNav/SellerNav.jsx";
import SellerChart from "../../SellerComponents/chart/SellerChart.jsx";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div className="background">
      <SellerNav />
      <div className="box1">
        <div className="SD_Section1">
          <div className="earn">
            <h4>Available Earnings</h4>
            <h2>LKR 4231.00</h2>
          </div>
          <div className="stat">
            <Link
              to="/sellerdashboard/SellerStatistic"
              style={{ textDecoration: "none" }}
            >
              <h5>View My Statistics</h5>
            </Link>
          </div>
        </div>
        <div className="SD_Section3">
          <hr />
          <br />
        </div>
        <div className="SD_Section2">
          <SellerChart />
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="Btng">Switch to Buyer</button>
      </Link>
    </div>
  );
};

export default SellerDashboard
