import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2d16504d-7529-48d2-9d9c-f6af7e0cfc94");

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
    <div className='contact'>
       <div className='contact-col'> 
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Whether you're planning a new construction project, seeking reliable engineering expertise, 
           or have general inquiries, we're here to help. Feel free to reach out via our contact form, or  
           use the contact details below.</p>
           <ul>
            <li> <img src={mail_icon} />contact@example.com</li>
            <li> <img src={phone_icon} />+251-911-840119/+251-912-120204</li>
            <li><img src={location_icon} />Finfinnee, Labu Mabiratayil, Aykel & Tigist <br/>Bldg 4th Floor, Room 404</li>
           </ul>
       </div> 
       <div className='contact-col'>
         <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name'
             required/>
             <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number'
            required/>
            <label>Write your message here</label>
            <textarea name="message" id="" cols="30" rows="6" placeholder='Type your message here...' required></textarea>
            <button type='submit' className='button'>Submit now </button>
         </form>
         <span>{result}</span>
          </div>
    </div>
  )
}

export default Contact
