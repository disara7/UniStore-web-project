import React from 'react'
import SellerNav from "../../SellerComponents/SellerNav/SellerNav";
import "./SellerUploadProduct.css";
import SellerDropdownMenu from "../../SellerComponents/DropdownMenu/SellerDropdownMenu";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import DragDropImageUploader from "../../SellerComponents/DragDropImage/DragDropImageUploader";

const options = ['Option 11', 'Option 22'];
const options2 = ['Option 121', 'Option 222'];

const SellerUploadProduct = () => {
  const [isDisabled,setisDisabled] =React.useState(true);
  const [selectedRadioBtn, setselectedRadioBtn] = React.useState('radio1');
  const isRadioSelected = (value) => selectedRadioBtn===value;
  const handleRadioClick = (e) => {
    setselectedRadioBtn(e.currentTarget.value);
  };
  const onClick = () => {
    setisDisabled(false);
  };
  const onClick2 = () => {
    setisDisabled(false);
  };
  
  

  return (
    <div className='background'>
       <SellerNav/>
       <div className="box">
        <h2>Upload Your Product</h2>
        <div className='section'>
          <div className="ItemType">
              <h3>Item Type:</h3>
              <div className="itemTypeBtn">
              <div className="btnOption">
                <input 
                  type='radio'
                  name='radioreact'
                  value='radio1'
                  checked={isRadioSelected('radio1')}
                  onChange={handleRadioClick}
                  onClick={onClick}
                />
                <h4 id='usedItem'>Used Item</h4>
              </div>
              <div className="btnOption">
                <input 
                  type='radio'
                  name='radioreact'
                  value='radio2'
                  checked={isRadioSelected('radio2')}
                  onChange={handleRadioClick}
                  onClick={onClick2}
                />    
               <h4>Hand Craft</h4>
              </div>
              </div>
          </div>
        </div>
        <div className="section">
            <div className="category">
                <h3>Category:</h3>
                {selectedRadioBtn==='radio1'?(<SellerDropdownMenu options={options}isDisabled={isDisabled}/>):(<SellerDropdownMenu options={options2}isDisabled={isDisabled}/>)}
            </div>
        </div>
        <div className="section">
          <div className="description">
            <h3>Description:</h3>
            <Textarea name="Outlined" placeholder="Add a Description..." variant="outlined" minRows={6} maxRows={6}/>
          </div>
        </div>
        <div className="section">
          <div className="priceBox">
            <h3>Price:</h3>
            <Input placeholder="Enter Price" startDecorator={"LKR"} sx={{ width: 300 }} />
          </div>
        </div>
        <div className="section">
          <div className="uploadImages">
            <h3>Upload Image(s):</h3>
            <DragDropImageUploader/>
          </div>
        </div>
        <div className="section">
          <button className='submitBtn' type='submit'>
            Submit
          </button>
        </div>
       </div>
    </div>
  )
}


export default SellerUploadProduct
