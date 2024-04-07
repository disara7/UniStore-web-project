import React, { useState } from 'react';
import './css/contact.css';
import './css/about.css';

const Contact = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleInputFocus = (label) => {
    if (label) {
      label.style.top = '10px';
      label.style.fontSize = '14px';
    }
  };

  const handleInputBlur = (label, value) => {
    if (!value) {
      label.style.top = '25px';
      label.style.fontSize = '18px';
    }
  };

  return (
    <div className='contact'>
      <div className="intro">
        <h1>Contact Us</h1>
        <p>Feel free to caontact the UniStore team for any feedback, suggestions, or queries through the following form. We appreciate your feedback. Thank you.</p>
      </div>
      
      <section className="contact-wrap">
        <form action="" className="contact-form">
          {/* ... other form fields ... */}
          <div className="col-sm-6">
            <div className="input-block">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={inputs.firstName}
                onChange={handleInputChange}
                onFocus={(e) => handleInputFocus(e.target.previousSibling)}
                onBlur={(e) => handleInputBlur(e.target.previousSibling, e.target.value)}
              />
            </div>
            
          </div>
          <div className="col-sm-6">
      <div className="input-block">
        <label for="">Last Name</label>
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block">
        <label for="">Email</label>
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block">
        <label for="">Message Subject</label>
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block textarea">
        <label for="">Drop your message here</label>
        <textarea rows="3" type="text" className="form-control"></textarea>
      </div>
    </div>
    <div className="col-sm-12">
      <button className="square-button">Send</button>
      </div> 
          {/* ... other form fields ... */}
        </form>
      </section>
      
    </div>
  );
};

export default Contact;
