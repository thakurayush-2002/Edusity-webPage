import React, { useState } from 'react'
import "./Contects.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phon_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
const Contects = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "195d621a-04d8-4667-a615-2c402e091664");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contect'>
        <div className="contect-col">
            <h3>Send us a massage <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae accusantium mollitia blanditiis, veniam facere ducimus tenetur qui nam natus, illum cupiditate temporibus distinctio consequatur voluptas! Illo aliquam quis aut. Earum obcaecati nobis placeat excepturi!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contect@Ayush.dev</li>
                <li> <img src={phon_icon} alt="" />+91 871-556-1243</li>
                <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambrideg <br />MA 02139,UnitedStates</li>
            </ul>
        </div>
        <div className="contect-col">
          <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" placeholder='Enter your Name' name='Name' required />
          <label>Mobile No.</label>
          <input type="phone" placeholder='Enter your Mubile Number' name='Phon' required />
          <label>Write your  massage  hear</label>
          <textarea name="massage" rows="6" placeholder='Enter your masage' required></textarea>
          <button type='submite' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contects
