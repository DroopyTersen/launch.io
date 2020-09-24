import { useEffect } from "react";
import { useLaunch } from "launch.io";

export const useName = () => {
  const { state, actions, launch } = useLaunch();
  console.log("useName -> state", state);

  useEffect(() => {
    launch(actions.name.fetchName());
  }, [launch, actions.name]);

  const updateName = (updates) => {
    launch(actions.name.updateName(updates));
  };

  return {
    state: state,
    updateName,
  };
};
