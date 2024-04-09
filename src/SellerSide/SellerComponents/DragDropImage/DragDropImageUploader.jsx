
import "./DragDropImageUploader.css";
import React, { useState, useRef } from "react";
import Compressor from "compressorjs";
import { auth,ref,storage,uploadBytesResumable,doc,firestore } from "../../../FirebaseConfig/firebase";
import "../../SellerPages/SellerUploadProduct/SellerUploadProduct"

const DragDropImageUploader = React.forwardRef((props, itemRef) => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileselect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    const validImages = Array.from(files).filter((file) => file.type.split("/")[0] === "image");
    if (validImages.length === 0) {
      alert("Please drag and drop only image files.");
      return;
    };
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  const uploadImages = async () => {
    try {
  
      if (images.length === 0) {
        throw new Error('Please select a file to upload.');
      }
  
      const user = auth.currentUser; // Retrieve the currently logged-in user's ID
      const itemId = itemRef.current;

      images.forEach(async (image, index) => {
        const fileName = `${index + 1}`;
        const storageRef = ref(storage, `item_photos/${user.uid}/${itemId}/${fileName}`);
        // const compressedImage = await new Promise((resolve, reject) => {new Compressor(image, {
        //   quality: 0.6, 
        //   maxWidth: 800, 
        //   maxHeight: 800, 
        //   success(result) {
        //     resolve(result);
        //   },
        //   error(error) {
        //     reject(error);
        //   },
        // })});
        const uploadTask = uploadBytesResumable(storageRef, image);
        await uploadTask.on('state_changed',
        (snapshot) => {
          // Progress handling (optional)
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        () => {
          console.log('Image uploaded successfully!');
        }
      );
      });
    
      console.log('Pictures uploaded successfully!');
  
    } catch (e) {
      console.error('Error uploading picture:', e);
    }
  };

  return (
    <div className="card">
      <div
        className="drag-area"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onChange={uploadImages}
      >
        {isDragging ? (
          <span className="select">Drop Images Here</span>
        ) : (
          <>
            Drag & Drop Images here or{" "}
            <span className="select" role="button" onClick={selectFiles}>
              Browse
            </span>
          </>
        )}

        <input
          name="file"
          type="file"
          className="file"
          multiple
          ref={fileInputRef}
          onChange={onFileselect}
        ></input>
      </div>
      <div className="container">
        {images.map((images, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img src={images.url} alt={images.name} />
          </div>
        ))}
      </div>
      {/* <button type="button" onClick={uploadImages}>
        Upload Image(s)
      </button> */}
    </div>
  );
});

export default DragDropImageUploader;
