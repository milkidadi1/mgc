import React from 'react';
import './contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "your-access-key");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed");
      }
    } catch {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message icon" />
        </h3>
        <p>
          Whether you're planning a new construction project, seeking reliable engineering expertise, 
          or have general inquiries, we're here to help. Feel free to reach out via our contact form, or  
          use the contact details below.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Email icon" /> contact@example.com</li>
          <li><img src={phone_icon} alt="Phone icon" /> +251-911-840119 / +251-912-120204</li>
          <li>
            <img src={location_icon} alt="Location icon" /> Finfinnee, Labu Mabiratayil, Aykel & Tigist<br />
            Bldg 4th Floor, Room 404
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Enter your name" 
            required 
          />

          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            id="phone" 
            placeholder="Enter your mobile number" 
            required 
          />

          <label htmlFor="message">Write your message here</label>
          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="6" 
            placeholder="Type your message here..." 
            required
          ></textarea>

          <button type="submit" className="button">Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
