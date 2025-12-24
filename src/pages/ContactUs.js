import React, { useState } from 'react';

const ContactUs = () => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const indiaPhoneRegex = /^[6-9]\d{9}$/;

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!indiaPhoneRegex.test(phone)) {
    setPhoneError('Please enter a valid 10-digit phone number.');
    return;
  }

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    })
    .then((data) => {
      alert("Message sent successfully!");
      // Optional: clear the form
      e.target.reset();
      setPhone('');
    })
    .catch((err) => {
      console.error("Error sending message:", err);
      alert("Something went wrong. Please try again later.");
    });
};


  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">

        <div className="contact-info card">
          <h2>Contact Information</h2>
          <p className="contact-desc">
            Feel free to reach out with any questions about the book, speaking engagements, or media inquiries.
          </p>

          <div className="info-item">
            <span className="icon email-icon" aria-label="email">&#9993;</span>
            <div>
              <strong>Email:</strong><br />
              <div className="contact-emails">
                <a href="mailto:HR@tarassolutions.com" className="contact-link">HR@tarassolutions.com</a><br />
                <a href="mailto:shriram@tarassolutions.com" className="contact-link">shriram@tarassolutions.com</a><br />
                <a href="mailto:Madhav.s@tarassolutions.com" className="contact-link">Madhav.s@tarassolutions.com</a>
              </div>
            </div>
          </div>

          <div className="info-item">
            <span className="icon phone-icon" aria-label="phone">&#9742;</span>
            <div>
              <strong>Phone:</strong><br />
              <a href="tel:+917845550414" className="contact-link">+91 7845550414</a>
            </div>
          </div>

          <div className="info-item">
            <span className="icon location-icon" aria-label="address">&#9873;</span>
            <div>
              <strong>Address:</strong><br />
              177/1, Sameem Garden
              <br />
              Dhanasri Garden, Sundakkamuthur,
              <br />
              Coimbatore,
              <br />
              Tamil Nadu - 641 010.
            </div>
          </div>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Name*" required />
          </div>

          <div className="form-row">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="john@example.com*" required />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="10-digit phone number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))}
              maxLength={10}
              required
            />
            {phoneError && <p style={{ color: 'red', marginTop: '4px' }}>{phoneError}</p>}
          </div>

          <div className="form-row full-width">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Your Subject" />
          </div>

          <div className="form-row full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here...*" required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
