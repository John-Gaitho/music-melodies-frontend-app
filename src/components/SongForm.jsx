import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SongForm = ({ onSubmit }) => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'Title must be at least 2 characters')
      .required('Title is required'),
    artist: Yup.string()
      .min(2, 'Artist name must be at least 2 characters')
      .required('Artist name is required'),
    duration: Yup.number()
      .positive('Duration must be a positive number')
      .required('Duration is required'),
  });

  return (
    <div className="song-form-container">
      <h1>Add Song</h1>
      <Formik
        initialValues={{ title: '', artist: '', duration: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="song-form">
            <div>
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder =  "     Enter song title"
              />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="artist">Artist</label>
              <Field
                type="text"
                id="artist"
                name="artist"
                placeholder="    Enter artist name"
              />
              <ErrorMessage name="artist" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="duration">Duration </label>
              <Field
                type="number"
                id="duration"
                name="duration"
                placeholder="    Enter song duration"
              />
              <ErrorMessage name="duration" component="div" className="error" />
            </div>

            <button type="submit">Add Song</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SongForm;