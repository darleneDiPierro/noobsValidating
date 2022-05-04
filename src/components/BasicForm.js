import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredDataTouched, setEnteredDataTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredDataTouched;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const [enteredEmail, setEnteredEmail] = useState('');
  const emailInputIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');

  const emailInputIsInvalid = !emailInputIsValid && enteredDataTouched;

  const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const dataBlurHandler = event => {
    setEnteredDataTouched(true);
  };

  let formIsValid = false;

  if(enteredNameIsValid && emailInputIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredDataTouched(true);

    if(!enteredNameIsValid && !emailInputIsValid){
        return;
    }

    console.log(enteredName)
    console.log(enteredEmail)
    setEnteredName('');
    setEnteredEmail('');
    setEnteredDataTouched(false);
  };


  const toggleClassInput = nameInputIsInvalid ? 'inputForm somethingswrong' : '';

  return (
    <form className="oneForm" onSubmit={formSubmissionHandler}>
    <div class="inputs">
        <div class="oneInput">
          <label className="label" htmlFor='name'>Your Name</label>
          <input className={toggleClassInput}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={dataBlurHandler}
          value={enteredName}
          />
          {nameInputIsInvalid && <p>Name must not be empty.</p>}
        </div>


        <div class="oneInput">
          <label className="label" htmlFor='email'>Email</label>
          <input className={toggleClassInput}
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={dataBlurHandler}
          value={enteredEmail}
          />
          {emailInputIsInvalid && <p>Couldn't find that email address</p>}
        </div>

      </div>
      <div>
        <button disabled={!formIsValid} className="submitBtn">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
