import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      
      {/* arcade image */}
      <div style={{ maxWidth: '400px', margin: '0 auto'}}>
        <img
          src="/arcade-contact.png" 
          alt="Arcade Contact" 
          style={{ 
            width: '150%', 
            height: '200%'
          }}
        />
        < a href="mailto:pimmareddy5@gmail.com" class="overlay-button">Click Here to Contact Us</a>
      </div>
    </div>
  )
}

export default Contact;
