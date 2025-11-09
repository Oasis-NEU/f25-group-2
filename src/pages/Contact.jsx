import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      
      {/* arcade image */}
      <div style={{ maxWidth: '400px', margin: '0 auto', position: 'absolute', 
        left: '550px'}}>
        <img
          src="/arcade-contact.png" 
          alt="Arcade Contact" 
          style={{ 
            width: '170%', 
            height: '1000%'
          }}
        />
      </div>
        <a href="mailto:pimmareddy5@gmail.com">
        < button class="overlay-button">Click Here <br></br>to Contact Us
        </button>
        </a>
    </div>
  )
}

export default Contact;
