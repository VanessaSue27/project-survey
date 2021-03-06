import React, { useState } from 'react';
import { ThirdQuestion } from './ThirdQuestion';

export const SecondQuestion = (props) => {
  const [numberOption, setNumberOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if (numberOption) {
      setVisible(true);
    }
  };

  const onNumberChange = (newNumber) => {
    setNumberOption(newNumber);
  };

  return (
    <>
      <form className="second-question" onSubmit={(event) => event.preventDefault()}>
        <img className="first-question-img" src="assets/question2-img.png" alt="Tourist couple" />
        <div className="number-select-text">
          <label key={numberOption} htmlFor="numberInput">
            <p>Favorite number (between 5 and 10):</p>
            <input
              id="numberInput"
              className="number-input"
              type="number"
              name="quantity"
              min="5"
              max="10"
              value={numberOption}
              onChange={(event) => onNumberChange(event.target.value)}
              required />
          </label>
          <button className="first-button" onClick={checkInput} type="submit">NEXT</button>
        </div>
      </form>
      {(visible === true) && (
        <ThirdQuestion
          finalDestination={props.chosenDestination}
          chosenNumber={numberOption} />
      )}
    </>
  );
};