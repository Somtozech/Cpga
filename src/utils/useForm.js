import { useState } from 'react';

const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    callback();
  };

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const clear = () => setValues(initialState);

  return {
    handleSubmit,
    handleChange,
    values,
    clear
  };
};

export default useForm;
