import React from 'react';
import {NavLink} from 'react-router-dom';

const Browse = () => {
  return (
    <div
      style={{
        display: 'absoulte',
        height: '90vh'
      }}
    >
      <div
      style={{
        backgroundColor:'#38797B',
        height: '30%',
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <input type="text" id="fname" name="firstname" placeholder="search over a 1M+ recepies" 
        style={{
          width: '20%',
          backgroundColor: '#8dcde2',
          color: 'white',
          padding: '14px 20px',
          margin: '20px 0',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transform: 'translate(0, -50%)'
        }}/>

            <select style={{
              padding: '10px',
              margin: '10px'
            }}>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>


            <select style={{
              padding: '10px',
              margin: '10px'
            }}>
              <option value="American">American</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Indian">Indian</option>
              <option value="Russian">Russian</option>
              <option value="Mexican">Mexican</option>             
            </select>

            <select style={{
              padding: '10px',
              margin: '10px'
            }}>
              <option value="Sweet">Sweet</option>
              <option value="Spicy">Spicy</option>
              <option value="Sour">Sour</option>
              <option value="Savory">Savory</option>
              <option value="Salty">Salty</option>          
            </select>
        </div>
      <div
      style={{
        backgroundColor:'#e6f9ff',
        height: '70%'
      }}
      >
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
    </div>
    
      
    </div>
  );
};

export default Browse;
