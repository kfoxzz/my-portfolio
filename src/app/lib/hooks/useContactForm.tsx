'use client';

import { useState, type ChangeEvent } from 'react';

export default function useContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return { values, handleChange };
}
