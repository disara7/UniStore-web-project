import React from "react";
import "./SellerProduct.css";
import SellerNav from "../../SellerComponents/SellerNav/SellerNav.jsx";
import SellerProductTable from "../../SellerComponents/SellerProductTable/SellerProductTable.jsx";

const SellerProducts = () => {
  return (
    <div className="background">
      <SellerNav />
      <div className="bgBox">
        <SellerProductTable />
      </div>
    </div>
  );
};

export default SellerProducts;
