import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className='navbar container'>
      <div  className='col-2'>
          <h1><a href="#about">Lotfey</a></h1>
        
      </div>
      <nav className='col-10'>
        <ul>
          <li>
            <a href="#about" onClick={() => handlePageChange('About')}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange('Resume')}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
