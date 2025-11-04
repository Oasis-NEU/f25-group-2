import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h1 style={{ color: '#00ff00', fontSize: '3rem', marginBottom: '2rem' }}>CONTACT US</h1>
      
      {/* arcade image */}
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <img 
          src="/arcade-contact.png" 
          alt="Arcade Contact" 
          style={{ 
            width: '100%', 
            height: 'auto',
            display: 'block',
            borderRadius: '15px'
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
