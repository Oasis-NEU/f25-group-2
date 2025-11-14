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
       {/* Text instead of logo */}
        <div
          style={{
            position: 'absolute',
            bottom: '450px', // adjust distance from bottom of header
            left: '0%',
            transform: 'translateX(35%)',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Aldrich'
          }}
        >
          From Cravings to Quests - Insert Choice and Let The Game Begin

        </div>
        <img
          src="/instructions.png"
          alt="instructions"
          style={{
            position: 'absolute',
            top: '82%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            objectFit: 'contain'
          }}
        ></img>
                <img
          src="/funfacts.png"
          alt="FunFacts"
          style={{
            position: 'absolute',
            top: '82%',
            left: '78%',
            transform: 'translate(-50%, -50%)',
            width: '550px',
            height: '550px',
            objectFit: 'contain'
          }}
        ></img>
      </>
  );
}

export default Home;