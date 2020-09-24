import { useEffect, useMemo } from "react";
import { useLaunch } from "launch.io";

export const useCalculator = () => {
  const { state, actions, launch } = useLaunch();

  return useMemo(() => {
    return {
      ...state.calculator,
      increase: () => launch(actions.calculator.increase()),
      decrease: () => launch(actions.calculator.decrease()),
    };
  }, [state.calculator, actions.calculator]);
};
