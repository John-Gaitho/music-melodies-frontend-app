import React, { useState, useEffect } from 'react';

function PlaylistList() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("musichub_db_22q5")  
      .then((response) => response.json())
      .then((data) => setPlaylists(data));
  }, []);

  return (
    <div>
      <h1>Playlists</h1>
      <ul>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <li key={playlist.id}>{playlist.name} ({playlist.songs.length} songs)</li>
          ))
        ) : (
          <p>No playlists found</p>
        )}
      </ul>
    </div>
  );
}

export default PlaylistList;