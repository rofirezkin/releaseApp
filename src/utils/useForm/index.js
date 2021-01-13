import {useState} from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (formType, formValue) => {
      return setValues({...values, [formType]: formValue});
    },
  ];
};

export default useForm;
