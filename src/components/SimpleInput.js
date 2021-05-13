import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    setEnteredName('');
  };

  const nameInputClases = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClases}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange={nameInputChangeHandler}
        value={enteredName} />
        {!enteredNameIsValid && <p className='error-text'>Entered name is not valid</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
