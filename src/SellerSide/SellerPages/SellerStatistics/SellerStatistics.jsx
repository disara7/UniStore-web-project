import React from 'react'
import './SellerStatistics.css'
import SellerNav from "../../SellerComponents/SellerNav/SellerNav";
import SellerStatTable from "../../SellerComponents/statTable/sellerStatTable";

const SellerStatistic = () => {
  return (
    <div className="background">
      <SellerNav />
      <div className="container">
        <div className="leftbox">
          <SellerStatTable />
        </div>
        <div className="rightbox">
          <h4>Total Earnings</h4>
          <hr />
          <h2>LKR 4231.00</h2>
          <div className="payoutBtn">
            <button className="submitBtn" type="submit">
              Payout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerStatistic
