import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link className='link' to={'/'}>
            <img
              src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt=''
            />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECH</h6>
          </Link>
          <Link className='link' to='/?cat=spirituality'>
            <h6>SPIRITUAITY</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
