import React from "react";
import "./SellerProduct.css";
import SellerNav from "../../SellerComponents/SellerNav/SellerNav";
import SellerProductTable from "../../SellerComponents/SellerProductTable/SellerProductTable";

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
