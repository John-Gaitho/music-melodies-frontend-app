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

  return (
    <div className="song-list-container">
      <h1 className="song-list-title">Song List</h1>

      <Formik
        initialValues={{ search: '' }}
        validate={validateSearch}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSearch(values.search); // to set the search term to filter songs
          resetForm(); // to reset the search input after submission
          setSubmitting(false); // to stop the submitting state
        }}
      >
        {({ isSubmitting }) => (
          <Form className="search-form">
            <Field
              type="text"
              name="search"
              placeholder="Search by title or artist..."
              className="search-bar"
            />
            <ErrorMessage name="search" component="div" className="error-message" />
            <button type="submit" className="search-button" disabled={isSubmitting}>
              {isSubmitting ? 'Searching...' : 'Search'}
            </button>
          </Form>
        )}
      </Formik>

      <ul className="song-list">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => <SongItem key={song.id} song={song} />)
        ) : (
          <p>No songs found</p>
        )}
      </ul>
    </div>
  );
}

export default SongList;