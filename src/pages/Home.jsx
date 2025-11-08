import React from 'react';

function Home() {
  return (
    <>
      {/* image section */}
      <div style={{ 
        position: 'relative',
        width: '100vw',
        height: '250px',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <img
          src="/header.png"
          alt="Header Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        
        {/* Dark overlay/tint on the image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }}></div>
      </div>
      
    </>
  );
}

export default Home;
