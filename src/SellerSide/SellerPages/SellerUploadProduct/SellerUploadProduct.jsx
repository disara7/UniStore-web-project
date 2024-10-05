import React, { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SellerNav from "../../SellerComponents/SellerNav/SellerNav.jsx";
import "./SellerUploadProduct.css";
import SellerDropdownMenu from "../../SellerComponents/DropdownMenu/SellerDropdownMenu.jsx";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import Compressor from "compressorjs";
import { auth ,firestore, collection,setDoc, addDoc, updateDoc,doc,uploadBytesResumable,ref,storage } from "../../../FirebaseConfig/firebase.js";


const options = ['Luggage and Bags',
  'Wallet & ID Holder',
  'Backpacks',
  'Hand Bags',
  'Traveling Bags and Luggage',
  'Fashion and Clothing',
  'Electronic Accessories',
  'Sport Equipment',
  'Educational Material',
  'Musical Instruments',
  'Furniture and Home GoodsLuggage and Bags',
  'Wallet & ID Holder',
  'Backpacks',
  'Hand Bags',
  'Traveling Bags and Luggage',
  'Fashion and Clothing',
  'Electronic Accessories',
  'Sport Equipment',
  'Educational Material',
  'Musical Instruments',
  'Furniture and Home Goods'];

const options2 = ['Hand-crafted Necklaces',
  'Bracelets',
  'Earrings',
  'Rings',
  'Home Decor',
  'Art and Collectibles',
  'Paper Goods',
  'Beauty and Personal Care',
  'Seasonal and Gift Items',
  'Woodwork'];

const SellerUploadProduct = () => {
  const navigate = useNavigate();

  const [isDisabled,setisDisabled] =React.useState(true);
  const [selectedRadioBtn, setselectedRadioBtn] = React.useState('');
  const isRadioSelected = (value) => selectedRadioBtn===value;
  const [description,setDescription] = React.useState('');
  const [category,setCategory] = React.useState('');
  const [price,setPrice] = React.useState('');
  const [quantity,setQuantity] = React.useState('');
  const [itemName,setItemName] = React.useState('');
  const itemRef = useRef(null);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  // const [imageURL,setImageURL] =useState('');

  const handleImageSelect = (event) => {
    const selectedImages = event.target.files;
    if (selectedImages.length > 0) {
      const validImages = Array.from(selectedImages)
        .filter((file) => file.type.split("/")[0] === "image");
      setImages(validImages);
      setPreviewImages(validImages.map((image) => URL.createObjectURL(image)));
    }
  };

  const handleRadioClick = (e) => {
    setselectedRadioBtn(e.currentTarget.value);
  };
  const onClick = () => {
    setisDisabled(false);
  };
  const onClick2 = () => {
    setisDisabled(false);
  };

  const handleUpload = async (event) => {
    event.preventDefault(); 

    const itemDocRef = await addDoc(collection(firestore, 'Items'), {});
    const itemId = itemDocRef.id;
    itemRef.current = itemId;
    // itemRef.current.uploadImages();
    // props.uploadImages();

    const user = auth.currentUser;
    const userId = user.uid;

    if (images.length > 0) {
      await Promise.all(
        images.map(async (image, index) => {
          const compressedImage = await new Promise((resolve, reject) => {
            new Compressor(image, {
              quality: 0.6, 
              maxWidth: 800, 
              maxHeight: 800,
              success(result) {
                resolve(result);
              },
              error(error) {
                reject(error);
              },
            });
          });
          const filename = `${user.uid}/${itemId}/${index + 1}`;
          const storageRef = ref(storage, `item_photos/${filename}`);
          const uploadTask = uploadBytesResumable(storageRef, compressedImage);
          uploadTask.on("state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`${index+1} image upload progress: ${progress}%`);
          },
          (error) => {
            console.error("Error uploading image:", error);
          },
        );
        })
      );
      console.log("Pictures uploaded successfully!");
    }
    // const url = await getDownloadURL(ref(storage, `item_photos/${user.uid}/${itemId}/1.${images[0].name.split('.').pop()}`));
    // setImageURL(`${images.name.split('.').pop()}`);
    const oldprice = '';
    const userData = {
      userId,
      itemName,
      description,
      category,
      price: `LKR ${price}`,
      quantity: parseInt(quantity),
      old_price: oldprice,
    };
    

    if (selectedRadioBtn === 'radio1') {
      setCategory('Used');
      try {
        const used = doc(collection(firestore, 'Used_items'), itemId);
        await setDoc(used, userData);
        console.log('Item uploaded successfully!');
        
      } catch (error) {
        console.error(error);
      }
    }
    else if (selectedRadioBtn === 'radio2') {
      setCategory('Craft');
      try {
        
        const handcraft = doc(collection(firestore, 'Craft_items'), itemId);
  
        await setDoc(handcraft, userData);
  
      } catch (error) {
        console.error(error);
      }
    }
    await updateDoc(itemDocRef, userData);
    
    alert("Item uploaded successfully!");
    navigate('/SellerDashboard/SellerProducts', { replace: true });
  };
  
  

  return (
    <div className='background'>
       <SellerNav/>
       <div className="box">
        <h2>Upload Your Product</h2>
        <div className='section'>
          <div className='itemName'>
            <h3>Item Name:</h3>
            <Input
              placeholder="Enter Item Name"
              variant="outlined"
              type="text"
              required={true}
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="ItemType">
              <h3>Item Type:</h3>
              <div className="itemTypeBtn">
              <div className="btnOption">
                <label>
                <input 
                  type='radio'
                  name='radioreact'
                  value='radio1'
                  checked={isRadioSelected('radio1')}
                  onChange={handleRadioClick}
                  onClick={onClick}
                />
                  Used Item
                </label>
              </div>
              <div className="btnOption">
                <label>
                <input 
                  type='radio'
                  name='radioreact'
                  value='radio2'
                  checked={isRadioSelected('radio2')}
                  onChange={handleRadioClick}
                  onClick={onClick2}
                />    
                Hand Craft
               </label>
              </div>
              </div>
          </div>
        </div>
        <div className="section">
            <div className="category">
                <h3>Category:</h3>
                {selectedRadioBtn === 'radio1' ? (
                  <SellerDropdownMenu options={options} isDisabled={isDisabled} onChange={(selectedCategory) => setCategory(selectedCategory)} />
                ) : (
                  <SellerDropdownMenu options={options2} isDisabled={isDisabled} onChange={(selectedCategory) => setCategory(selectedCategory)} />
                )}
            </div>
        </div>
        <div className="section">
          <div className="description">
            <h3>Description:</h3>
            <Textarea 
              name="Outlined" 
              placeholder="Add a Description..." 
              variant="outlined" 
              minRows={6} 
              maxRows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
          </div>
        </div>
        <div className="section">
          <div className="priceBox">
            <h3>Quantity:</h3>
            <Input 
              placeholder="Enter Quantity" 
              sx={{ width: 300 }} 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              />
          </div>
        </div>
        <div className="section">
          <div className="priceBox">
            <h3>Price:</h3>
            <Input 
              placeholder="Enter Price" 
              startDecorator={"LKR"} 
              sx={{ width: 300 }} 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
          </div>
        </div>
        <div className="section">
          <div className="uploadImages" style={{width:'100%'}}>
            <h3>Upload Image(s):</h3>
            <input type="file" multiple onChange={handleImageSelect}/>
            <div className="image-preview-container">
              {previewImages.map((previewImage, index) => (
                <img key={index} src={previewImage} alt={`Preview ${index + 1}`} style={{width: '100px', height: '100px', objectFit: 'cover',border: '1px solid black', margin: '5px',marginBottom: '0', borderRadius: '5px',gap: '5px'}}/>
              ))}
            </div>
            {/* <DragDropImageUploader ref={itemRef} uploadImages={handleUpload}/> */}
          </div>
        </div>
        <div className="section">
          <button className='submitBtn' type='submit' onClick={handleUpload}>
            Submit
          </button>
        </div>
       </div>
    </div>
  )
}


export default SellerUploadProduct
