import { useEffect, useMemo } from "react";
import { useLaunch } from "launch.io";

export const useName = () => {
  const { state, actions, launch } = useLaunch();
  console.log("useName -> state", state);

  useEffect(() => {
    launch(actions.name.fetchName());
  }, [launch, actions.name]);

  return useMemo(() => {
    return {
      ...state.name,
      updateName: (updates) => {
        launch(actions.name.updateName(updates));
      },
    };
  }, [state.name, actions.name]);
};
