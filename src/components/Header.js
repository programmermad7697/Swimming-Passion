import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header-components'>
        <div>
            <h1 className='special-font'>Swimming Passion</h1>
        </div>

        <div className='header-right'>
            <button>LOGIN</button>
        </div>
    </header>
  );
}

export default Header;