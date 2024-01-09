import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter the duration greater than 0</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
