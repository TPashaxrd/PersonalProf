import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Toprak | Blog</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="https://github.com">Github</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;