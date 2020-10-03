import React, { useEffect } from "react";
import { useLaunchSelector } from "launch.io";
import { CalculatorState } from "./calculator.service";

const CalculatorDisplay = () => {
  const value = useLaunchSelector<CalculatorState>(
    (context) => context.state.calculator.value
  );
  useEffect(() => {
    console.log("CalculatorDisplay -> RENDER", value);
  });
  return <h2>Calculator: {value}</h2>;
};

export default React.memo(CalculatorDisplay);
