import "./SellerProductTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../dataTableSource.jsx";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { firestore,storage,auth,getDownloadURL,ref,where,query,getDocs,collection } from "../../../FirebaseConfig/firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch items from Firebase
        const userId = auth.currentUser.uid;
        const itemsRef = collection(firestore, "Items");
        const snapshot = await getDocs(query(itemsRef, where("userId", "==", auth.currentUser.uid)));

        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }

        const items = [];
        
        snapshot.docs.forEach(async (doc) => {
          const itemData = doc.data();
          const imgRef = ref(storage, `item_photos/${userId}/${doc.id}/1`);

          const downloadURL =  getDownloadURL(imgRef).then((url) => {
            const newItem =({
              id: doc.id,
              productName: itemData.itemName,
              img: url,
              price: itemData.price,
              stock: itemData.quantity,
            });
            items.push(newItem);
            setData([...items]);
          });
          
        });
        

        // setData(items);
        localStorage.setItem("sellerProducts", JSON.stringify(items));
      } catch (error) {
        console.error("Error fetching user items:", error);
      }
    };
    const storedData = localStorage.getItem("sellerProducts");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchData();
    }

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;



