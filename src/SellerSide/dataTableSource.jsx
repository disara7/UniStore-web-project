export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "item",
    headerName: "Item",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.productName}
        </div>
      );
    },
  },
  {
    field: "uploadDate",
    headerName: "Upload Date",
    width: 140,
  },

  {
    field: "price",
    headerName: "Price (LKR)",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 70,
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    productName: "20-Inch Hardside Spinner,Navy Blue",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    uploadDate: "04/04/2021",
    price: "230",
    stock: "10",
    status: "in",
  },
  {
    id: 2,
    productName: "20-Inch Hardside Spinner,Navy Blue",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    uploadDate: "04/04/2021",
    price: "230",
    stock: "10",
    status: "out",
  },
  {
    id: 3,
    productName: "20-Inch Hardside Spinner,Navy Blue",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    uploadDate: "04/04/2021",
    price: "230",
    stock: "10",
    status: "low",
  },
  {
    id: 4,
    productName: "20-Inch Hardside Spinner,Navy Blue",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    uploadDate: "04/04/2021",
    price: "230",
    stock: "10",
    status: "in",
  },
  {
    id: 5,
    productName: "20-Inch Hardside Spinner,Navy Blue",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    uploadDate: "04/04/2021",
    price: "230",
    stock: "10",
    status: "in",
  },
];
