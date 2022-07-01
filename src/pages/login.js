import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: '#e6f9ff',
      }}
    >
      <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius:'20px',
        margin: '0 auto',
        width: '33%',
        height: '80vh'
      }}>
        <form>
        <label for="fname">Username</label>
        <input type="text" id="fname" name="firstname" placeholder="Username" 
        style={{
          width: '100%',
          backgroundColor: '#8dcde2',
          color: 'white',
          padding: '14px 20px',
          margin: '20px 0',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}/>
        <label for="lname">Password</label>
        <input type="password" id="lname" name="lastname" placeholder="Password" style={{
          width: '100%',
          backgroundColor: '#8dcde2',
          color: 'white',
          padding: '14px 20px',
          margin: '20px 0',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}/>

        <input type="submit" value="Submit"style={{
          width: '100%',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '14px 20px',
          margin: '20px 0',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}/>
        </form>

      </div>
    </div>
  );
};

export default Login;
