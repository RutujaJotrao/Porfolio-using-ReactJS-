import React, { useState } from 'react';
import './Contact.css';
import Data from '../Data.json';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields here
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('All fields are required');
      return;
    }

    // Additional validation logic can be added here

    // Submit the form or perform other actions
    console.log('Form submitted:', formData);
  };

  return (
    <div className='contact-me' id='contact'>
      <h2>{Data.contact_title}</h2>

      <div className='contact-info'>
        <div className='contact-column'>
          <div className='contact-item'>
            <h3>Phone:</h3>
            <p>{Data.contact.phone}</p>
          </div>
        </div>

        <div className='contact-column'>
          <div className='contact-item'>
            <h3>Email:</h3>
            <p>{Data.contact.email}</p>
          </div>
        </div>
      </div>

      <div className='contact-form'>
        <h3>Have a question? I am at your service.</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
