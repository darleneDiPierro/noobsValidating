import { useState } from 'react';

const useInput = (validateData) => {
  const [enteredData, setEnteredData] = useState('');
  const [dataTouched, setDataTouched] = useState(false);

  const enteredDataIsValid = validateData(enteredData);
  const notValid = !enteredDataIsValid && dataTouched;

  const dataInputChangeHandler = (event) => {
    setEnteredData(event.target.value);
  }

  const dataBlurHandler = (event) => {
    setDataTouched(true);
  }

  const reset = () => {
    setEnteredData('');
    setDataTouched(false);
  }

  return {
    data: enteredData,
    isValid: enteredDataIsValid,
    notValid,
    dataInputChangeHandler,
    dataBlurHandler,
    setDataTouched,
    reset
  };

};

export default useInput;
