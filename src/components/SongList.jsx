import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';


// validation schema for Formik
const validateSearch = (values) => {
  const errors = {};
  if (!values.search) {
    errors.search = 'Please enter a search term';
  } else if (values.search.length < 3) {
    errors.search = 'Search term must be at least 3 characters long';
  }
  return errors;
};

function SongList() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://music_db/songs') 
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase())
  );

  
  );
}

export default SongList;