import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/">Songs</Link></li> 
        <li><Link to="/add-song">Add Songs</Link></li>
        <li><Link to="/playlists">Playlists</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;