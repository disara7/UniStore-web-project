import React, { useEffect, useState } from 'react'
import './craftsworld.css'
import Searchbar from '../../../Components/searchbar/searchbar.jsx'
import CwFilter from '../../../Components/filter/cwfilter.jsx'
import Item from '../../../Components/items/item.jsx'
// import data_product from '../../../Components/Assets/preloved_items'
// import all_items from '../../../Components/Assets/all_items.js'
import { firestore, getDocs, getDownloadURL, ref, storage,collection } from '../../../FirebaseConfig/firebase.js';

const CraftsWorld = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = collection(firestore, "Craft_items");
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
        
        
        localStorage.setItem("craftProducts", JSON.stringify(items));
      } catch (error) {
        console.error("Error fetching user items:", error);
      }
    };
    const storedData = localStorage.getItem("craftProducts");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    } else {
      fetchData();
    }

    fetchData();
  }, []);
  return (
    <div className='craftsworld'>
      <div className='crafts-top'>
        <h1>CraftsWorld</h1>
        <p>Promoting sustainability and creativity within the 
          university undergraduate community, providing a 
          platform for the small-scale businesses owned by 
          university undergraduates that sell their unique 
          handmade crafts, encouraging extracurricular activities 
          and entrepreneurship among the university community.</p>
        
    </div>
    <Searchbar/>
    <div className="page-content">
      <div className="left">
        <CwFilter/>

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

export default CraftsWorld