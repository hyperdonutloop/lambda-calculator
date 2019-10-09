import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {numberState.map((button, index) => {
         return <NumberButton key={index} button={button} />
       })
       }
    </div>
  );
};

export default Numbers; 