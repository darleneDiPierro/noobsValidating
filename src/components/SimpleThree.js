import { useState } from 'react';
import useInput from '../hooks/use-inputs';

const SimpleThree = (props) => {
  const {
    data: enteredName,
    isValid: enteredNameIsValid,
    notValid: nameInputNotValid,
    dataInputChangeHandler: nameInputChangeHandler,
    dataBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(data => data.trim() !== '');

  const {
    data: enteredLastName,
    isValid: enteredLastNameIsValid,
    notValid: lastnameInputNotValid,
    dataInputChangeHandler: lastnameInputChangeHandler,
    dataBlurHandler: lastnameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput(data => data.trim() !== '');

  const {
    data: enteredEmail,
    isValid: enteredEmailIsValid,
    notValid: emailInputNotValid,
    dataInputChangeHandler: emailInputChangeHandler,
    dataBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(data => data.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label>First Name</label>
        <input
          type='text'
          id='Fname'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputNotValid && <p>Firt name must not be empty.</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          id='Lname'
          onChange={lastnameInputChangeHandler}
          onBlur={lastnameInputBlurHandler}
          value={enteredLastName}
        />
        {lastnameInputNotValid && <p>Last name must not be empty.</p>}
      </div>
      <div>
        <label>E-mail</label>
        <input
          type='email'
          id='e-mail'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputNotValid && <p>Couldn't find that email address</p>}
      </div>
      <button disabled={!formIsValid} className='btn'>Submit</button>
    </form>
  );
};

export default SimpleThree;
