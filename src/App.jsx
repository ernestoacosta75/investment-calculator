import Header from "@features/Header/Header"
import UserInput from "@features/UserInput/UserInput.jsx";
import Results from "@features/Results/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  }); 

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          }
      });
  };

  return (
    <>
      <Header title="Investment Calculator"/>
      <UserInput userInput={userInput} onInputChange={handleChange}/>
      {!inputIsValid && <p className="center">Please, enter a duration greater than zero.</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
