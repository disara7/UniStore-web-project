// import { collection, getDocs, query, where, getDownloadURL, ref, storage,firestore,auth  } from '../FirebaseConfig/firebase';
// import { useState, useEffect } from 'react';

export const userColumns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "item",
    headerName: "Item",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" , objectFit: "cover"}} />
          {params.row.productName}
        </div>
      );
    },
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
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 90,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

// //temporary data
// export const userRows = [
//   {
//     id: 1,
//     productName: "20-Inch Hardside Spinner,Navy Blue",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     uploadDate: "04/04/2021",
//     price: "230",
//     stock: "10",
//     status: "in",
//   },
//   {
//     id: 2,
//     productName: "20-Inch Hardside Spinner,Navy Blue",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     uploadDate: "04/04/2021",
//     price: "230",
//     stock: "10",
//     status: "out",
//   },
//   {
//     id: 3,
//     productName: "20-Inch Hardside Spinner,Navy Blue",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     uploadDate: "04/04/2021",
//     price: "230",
//     stock: "10",
//     status: "low",
//   },
//   {
//     id: 4,
//     productName: "20-Inch Hardside Spinner,Navy Blue",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     uploadDate: "04/04/2021",
//     price: "230",
//     stock: "10",
//     status: "in",
//   },
//   {
//     id: 5,
//     productName: "20-Inch Hardside Spinner,Navy Blue",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     uploadDate: "04/04/2021",
//     price: "230",
//     stock: "10",
//     status: "in",
//   },
// ];



// export const userRows =  async () => {
//   const userItems = [];
//   const user = auth.currentUser;

//   try {

//     const itemsRef = collection(firestore, 'Items'); 
//     const snapshot = await getDocs(query(itemsRef, where('userId', '==', user.uid)));
//     console.log(snapshot);
//     if (snapshot.empty) {
//       console.log('No matching documents.');
//       return;
//     }  
//     const user = auth.currentUser;
//     snapshot.docs.forEach((doc) => {
//       const itemData = doc.data();


//       const imgRef = ref(storage, `item_photos/${user.uid}/${doc.id}/1.${itemData.img}`); // Construct image reference (assuming images stored as an array)

//       const downloadURL =  getDownloadURL(imgRef);

//       userItems.push({
//           id: doc.id,
//           productName: itemData.itemName,
//           img: downloadURL,
//           price: itemData.price,
//       });
//   });
//   } catch (error) {
//     console.error('Error fetching user items:', error);
//   }

//   return userItems;
// };

