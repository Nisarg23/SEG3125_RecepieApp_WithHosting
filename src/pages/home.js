import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '90vh'
      }}
    >
      <div 
      style={{
        position: 'absolute',
        zIndex: '100',
        left: '0px',
        width: '50%',
        padding: '40px'
      }}>
        <h1 style={{
        padding: '20px'
      }}  
        >Try New Recipies Everyday</h1> 

        <plaintext style={{
        padding: '20px'
      }}
        
        >Cooking tips and tricks, videos by professionals, 
         </plaintext>

          <plaintext style={{
        padding: '20px'
      }}
        
        >
          and our favorite recipes from around the world
          </plaintext>

          <plaintext style={{
        padding: '20px'
      }}
        
        >
          wide web!</plaintext>
        
        <button style={{
        padding: '20px'
      }}
      
      type="submit">Read Full Article</button>
        </div>
      
        <img style={{
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        height: '80%',
        width: '80%'
      }}
      src={require('../images/background.jpg')} alt='logo' /> 
      
      


    </div>
  );
};

export default Home;
