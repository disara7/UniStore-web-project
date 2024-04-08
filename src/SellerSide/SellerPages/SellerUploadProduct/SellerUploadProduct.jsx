import React, { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SellerNav from "../../SellerComponents/SellerNav/SellerNav";
import "./SellerUploadProduct.css";
import SellerDropdownMenu from "../../SellerComponents/DropdownMenu/SellerDropdownMenu";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import Compressor from "compressorjs";
import { auth ,firestore, collection,setDoc, addDoc, updateDoc,doc,uploadBytesResumable,ref,storage } from "../../../FirebaseConfig/firebase";


const options = ['Option 11', 'Option 22'];
const options2 = ['Option 121', 'Option 222'];

const SellerUploadProduct = () => {
  const navigate = useNavigate();

  const [isDisabled,setisDisabled] =React.useState(true);
  const [selectedRadioBtn, setselectedRadioBtn] = React.useState('');
  const isRadioSelected = (value) => selectedRadioBtn===value;
  const [description,setDescription] = React.useState('');
  const [category,setCategory] = React.useState('');
  const [price,setPrice] = React.useState('');
  const [itemName,setItemName] = React.useState('');
  const itemRef = useRef(null);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

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

    const userData = {
      userId,
      itemName,
      description,
      category,
      price: parseFloat(price),
    };
    console.log(selectedRadioBtn)
  
    await updateDoc(itemDocRef, userData);

    if (images.length > 0) {
      await Promise.all(
        images.map(async (image, index) => {
          const compressedImage = await new Promise((resolve, reject) => {
            new Compressor(image, {
              quality: 0.6, // Adjust quality for desired compression level (0-1)
              maxWidth: 800, // Optional: Set a maximum width for resizing
              maxHeight: 800, // Optional: Set a maximum height for resizing
              success(result) {
                resolve(result);
              },
              error(error) {
                reject(error);
              },
            });
          });
  
          // Generate a unique filename with extension
          const filename = `${user.uid}/${itemId}/${index + 1}-${image.name.split('.').pop()}`;
  
          // Create a reference to the storage location
          const storageRef = ref(storage, `item_photos/${filename}`);
  
          // Upload the compressed image to Firebase Storage
          const uploadTask = uploadBytesResumable(storageRef, compressedImage);
  
          await uploadTask.on("state_changed",
            (snapshot) => {
              // Progress handling (optional)
            },
            (error) => {
              console.error("Error uploading image:", error);
            },
            () => {
              console.log(`Image ${index + 1} uploaded successfully!`);
            }
          );
        })
      );
  
      console.log("Pictures uploaded successfully!");
      navigate('/SellerDashboard/Products', { replace: true });
    }

    if (selectedRadioBtn === 'radio1') {
      try {
        const used = doc(collection(firestore, 'Used_items'), itemId);
        await setDoc(used, userData);
        console.log('Item uploaded successfully!');
        alert("Item uploaded successfully!");
      } catch (error) {
        console.error(error);
      }
    }
    else if (selectedRadioBtn === 'radio2') {
      try {
        
        const handcraft = doc(collection(firestore, 'Craft_items'), itemId);
  
        await setDoc(handcraft, userData);
        console.log('Item uploaded successfully!');
        alert("Item uploaded successfully!");
      } catch (error) {
        console.error(error);
      }
    }
    
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
