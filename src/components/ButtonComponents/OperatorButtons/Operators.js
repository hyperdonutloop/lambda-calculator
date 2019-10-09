import React, { useState } from "react";
import { operators } from "../../../data";
//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator] = useState(operators);
  return (
    <div>
      {operator.map((button, index) => {
         return <OperatorButton key={index} button={button.char} /> //need to get the char, not just the object.
      })
       }
    </div>
  );
};

export default Operators;
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/