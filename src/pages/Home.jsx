import React from 'react';

function Home() {
  return (
    <>
      {/* image section */}
      <div style={{ 
        position: 'relative',
        width: '100vw',
        height: '350px',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200"
          alt="Indian food"
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}></div>
      </div>
      
    </>
  );
}

export default Home;
