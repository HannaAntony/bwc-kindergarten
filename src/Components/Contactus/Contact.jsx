import React,{ useState } from 'react'
import mail from '../../assets/email.svg'
import call from '../../assets/call.svg'
import location from '../../assets/location.svg'
import axios from 'axios';

import './Contact.css'
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});
const [status, setStatus] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
        const response = await axios.post('https://formspree.io/f/xzbnnknn', formData);
        if (response.status === 200) {
            setStatus('Thanks for your submission!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setStatus('Submission failed. Please try again.');
        }
    } catch (error) {
        setStatus('Submission failed. Please try again.');
    }
};

  
  return (
    <div id='contact' className='contact'>
        
        <div className="contact-tittle">
        <h1 className='heading'>Get in touch</h1>
        </div>
        <div className='contact-section'>
           <div className="contact-left">
            <h1>Let's talk</h1>
            <p> For enquires and admission contact any of the mentioned mode of communication</p>
           <div className="contact-details">
            <div className="contact-detail">

             <img src={mail} alt="" /><p>hannaantony2002@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call} alt="" /> <p>+772-825-524</p>
        
            </div>
            <div className="contact-detail">
             <img src={location} alt="" /> <p>Hill palace ,villa road Angamaly</p>
                
            </div>
           </div>
           </div>
           <form  onSubmit={handleSubmit} className='contact-right'>
<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter your name' name='name' value={formData.name}
                            onChange={handleChange}
                            required />
<label htmlFor="">Your Email</label>
<input type="email" placeholder='enter your email' name='email' value={formData.email}
                            onChange={handleChange}
                            required />
<label htmlFor="">Write your message here</label>
<textarea name="message"  rows="8" placeholder='Enter your message here' value={formData.message}
                            onChange={handleChange}
                            required></textarea>
<button type='submit' className='contact-submit'>Submit Now</button>
           </form>
        </div>
        </div>
  )
}

export default Contact