import React from 'react';
import './Contact.css';
import Data from '../Data.json';

const ContactMe = () => {
  return (
    <div className='contact-me'>
      <h2>{Data.contact_title}</h2>

      <div className='contact-info'>
        <div className='contact-item'>
          <h4>Phone:</h4>
          <p>{Data.contact.phone}</p>
        </div>

        <div className='contact-item'>
          <h4>Email:</h4>
          <p>{Data.contact.email}</p>
        </div>

        {/* Add more contact information items as needed */}
      </div>

      <div className='contact-form'>
        <h3>Have a question? I am at your service.</h3>

        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows='4' required></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
