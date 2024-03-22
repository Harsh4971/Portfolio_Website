import React, {useRef} from 'react'
import "./ContactMe.css"
import contactme from "../assets/Contact_Me.png"
import emailjs from '@emailjs/browser';

const ContactMe = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_907t2un', 'template_gl5csq9', form.current, 'TEB9P4g2DvGtasb9X')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='cm' id='contactme'>
      <div className="contactme">
      <div className="cm-left">
        <div className="cm-heading">
          Contact Me
        </div>
        <div className="cm-img">
          <img src={contactme} alt="" className="cm-image" />
        </div>
      </div>
      <form ref={form} className="cm-right" onSubmit={sendEmail}>
        <div><label htmlFor="name" className='cm-label'>Your Name:</label>
        <input type="text" id='name' className='cm-input cm-name' name='from_name' required/></div>
        <div><label htmlFor="email" className='cm-label'>Email:</label>
        <input type="text" id='email' className='cm-input cm-email' name='from_email' required/></div>
        <div><label htmlFor="message" className='cm-label'>Message:</label>
        <textarea type="text" id='message' className='cm-input cm-message' name='message' required/></div>
        <div className='cm-button'><button type='submit' value='Send' className="cm-btn">Submit</button></div>
      </form>
    </div>
    </div>
  )
}

export default ContactMe
