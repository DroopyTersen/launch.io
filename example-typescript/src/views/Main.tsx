import React from "react";
import NameForm from "../features/name/NameForm";
import CalculatorForm from "../features/calculator/CalculatorForm";

export default function Main() {
  return (
    <div>
      <NameForm />
      <CalculatorForm />

      {/* <HistoryForm
        rewind={historyContext.rewind}
        fastForward={historyContext.fastForward}
      ></HistoryForm> */}
    </div>
  );
}
