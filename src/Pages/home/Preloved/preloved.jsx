import React, { useEffect, useState } from 'react'
import './preloved.css'
import Searchbar from '../../../Components/searchbar/searchbar.jsx'
import PlFilter from '../../../Components/filter/plfilter.jsx'
import Item from '../../../Components/items/item.jsx'
// import data_product from '../../../Components/Assets/preloved_items'
// import all_items from '../../../Components/Assets/all_items.js'
// import { FaSort } from "react-icons/fa";
import { firestore, getDocs, getDownloadURL, ref, storage,collection } from '../../../FirebaseConfig/firebase.js';


const Preloved = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch items from Firebase
        // const userId = auth.currentUser.uid;
        const itemsRef = collection(firestore, "Used_items");
        const snapshot = await getDocs(itemsRef);

        if (snapshot.empty) {
          console.log("No products yet!!!");
          return;
        }

        const items = [];
        
        snapshot.docs.forEach((doc) => {
          const itemData = doc.data();
          const userId = itemData.userId;
          const imgRef = ref(storage, `item_photos/${userId}/${doc.id}/1`);

          getDownloadURL(imgRef)
          .then((url) => {
            items.push({
              id: doc.id,
              name: itemData.itemName,
              image: url,
              new_price: itemData.price,
              old_price: itemData.old_price,
            });
            setProducts([...items]);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
        });
        
        
        localStorage.setItem("usedProducts", JSON.stringify(items));
      } catch (error) {
        console.error("Error fetching user items:", error);
      }
    };
    const storedData = localStorage.getItem("usedProducts");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    } else {
      fetchData();
    }

    fetchData();
  }, []);
  return (
    <div className="preloved-style">
      <div className='preloved'>
        <h1>Pre-Loved</h1>
        <p>Promoting sustainability and upcycling in the undergraduate 
          community allowing university seniors to share, 
          donate, or sell their pre-owned items ranging from essential study 
          materials to personal items such as electronics, bedding, and more 
          which ultimately encourages the reuse 
          of quality goods and enables students to acquire necessities 
          inexpensively or even for free.</p>
        
    </div>
    <Searchbar/>
    <div className="page-content">
    
      <div className="left">
        <PlFilter/>

      </div>
      <div className="right">
      {products.length > 0 &&(
          products.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
          ))
        )
        }
      </div>

      </div>
    

    </div>
    
    
    
    
  )
}

export default Preloved