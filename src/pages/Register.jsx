import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='UserName' required />
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Have an account ? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
