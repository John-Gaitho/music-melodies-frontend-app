import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SongList from './components/SongList';
import PlaylistList from './components/PlaylistList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SongForm from './components/SongForm';

function App() {
  // Handle song submission
  const handleSongSubmit = (values) => {
    console.log('Song submitted:', values);
    fetch('https://melodies-hub-backend.onrender.com/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Song added:', data);
      })
      .catch((error) => console.error('Error adding song:', error));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/playlists" element={<PlaylistList />} />
        <Route path="/add-song" element={<SongForm onSubmit={handleSongSubmit} />} />
      </Routes>
    </Router>
  );
}

export default App;
