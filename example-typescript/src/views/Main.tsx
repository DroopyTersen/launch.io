import React from "react";
import { useName, NameForm } from "../features/name";
// import useName from "../hooks/useName";
// import useHistory from "../hooks/useHistory";
// import useCalculator from "../hooks/useCalculator";
// import NameForm from "../components/NameForm";
// import HistoryForm from "../components/HistoryForm";
// import CalculatorForm from "../components/CalculatorForm";

export default function Main() {
  const { updateName, ...name } = useName();
  // console.log("Main -> nameContext", nameContext);
  //   const historyContext = useHistory();
  //   const calculatorContext = useCalculator();

  const handleNameChange = (value, propName) => {
    updateName({ [propName]: value });
  };

  return (
    <div>
      <NameForm {...name} onChange={handleNameChange} />
      {/* <NameForm name={nameContext.state} nameChange={handleNameChange} />
      <CalculatorForm
        value={calculatorContext.state.value}
        increase={calculatorContext.increase}
        decrease={calculatorContext.decrease}
      />
      <HistoryForm
        rewind={historyContext.rewind}
        fastForward={historyContext.fastForward}
      ></HistoryForm> */}
    </div>
  );
}
