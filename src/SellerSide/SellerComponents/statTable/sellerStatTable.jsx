import React from "react";
import "./sellerStatTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = [
  {
    product:
      "https://images.unsplash.com/photo-1555885425-f605efd01224?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 612161,
    date: "03/09/2023",
    Earn: "LKR 200.00",
  },
  {
    product:
      "https://images.unsplash.com/photo-1612102277785-3be944987533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 568902,
    date: "18/11/2023",
    Earn: "LKR 350.00",
  },
  {
    product:
      "https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 786165,
    date: "21/01/2024",
    Earn: "LKR 200.00",
  },
];

const SellerStatTable = () => {
  return (
    <TableContainer>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell" align="center">
              Id
            </TableCell>
            <TableCell className="tableCell" align="center">
              Upload Date
            </TableCell>
            <TableCell className="tableCell" align="center">
              Earn
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell1" align="center">
                <div className="cellWrapper">
                  <img src={row.product} alt="product" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell" align="center">
                {row.id}
              </TableCell>
              <TableCell className="tableCell" align="center">
                {row.date}
              </TableCell>
              <TableCell className="tableCell" align="center">
                {row.Earn}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SellerStatTable;
