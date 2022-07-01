import React from 'react';
import {NavLink} from 'react-router-dom';

const MyRecepie = () => {
  return (
    <div
      style={{
        backgroundColor: '#e6f9ff',
      }}
    >
      <div
      style={{
        backgroundColor: '#e6f9ff',
        margin: '0 auto',
        height: '80vh'
      }}>
        <div style={{
        textAlign: 'center',
        fontSize: 'larger',
        margin: '0 auto',
        padding: '15px'
      }}> Your recepies</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '5px',
        gridAutoRows: 'minmax(100px, auto)'
      }}>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

        <div class="wrapper2">
          <NavLink to='/recepie'>
            <img class="image" src={require('../images/recepie.jpg')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          </NavLink>
          <h6>Cookies and Cream Cake Pops</h6>
          <plaintext>The Whole Cook</plaintext>
          <img class="image" src={require('../images/star.png')} alt='Star' style={{
            width: '35%',
            height: '15%'
          }}/>
        </div>

      </div>

        {/* <button type="submit"style={{
          width: '150px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '14px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          position: 'absolute',
          bottom: '10%',
          left: '45%'
        }}>Create New Recepie</button> */}

        
      </div>
    </div>
  );
};


export default MyRecepie;
