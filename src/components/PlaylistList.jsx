import React, { useState, useEffect } from 'react';

function PlaylistList() {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);  //  to track any errors

  useEffect(() => {
    fetch("https://melodies-hub-backend.onrender.com/playlists")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched playlists:', data);  // to log fetched data
        setPlaylists(data);
      })
      .catch((error) => {
        console.error('Error fetching playlists:', error);  // to log any error
        setError('Failed to load playlists');
      });
  }, []);

  return (
    <div>
      <h1>Playlists</h1>
      {error && <p className="error">{error}</p>}  {/* Display error message if any */}
      <ul>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <li key={playlist.id}>
              {playlist.name} ({playlist.songs.length} songs)
            </li>
          ))
        ) : (
          <p>No playlists found m</p>
        )}
      </ul>
    </div>
  );
}

export default PlaylistList;
