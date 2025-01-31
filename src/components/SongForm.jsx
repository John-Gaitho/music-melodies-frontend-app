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

};

export default SongForm;