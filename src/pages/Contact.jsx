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
            width: '170%', 
            height: '700%'
          }}
        />
        <a href="mailto:pimmareddy5@gmail.com">
        < button class="overlay-button">Click Here to Contact Us
        </button>
        </a>
      </div>
    </div>
  )
}

export default Contact;
