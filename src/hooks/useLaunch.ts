import { useContext } from "react";
import Context from "../components/Context";
import { LaunchContext } from "../types";

/**
 * Returns a `Launch.IO` object containing current `state`, `actions`, and the `launch` function.
 *
 * `state` is an object that will contain your full application state, across all services provided,
 * and you can access service state via the name of the service along with the associating state property.
 * For example, `state.[Service Name].[Service State Property]`
 *
 * `actions` is an object that will contain your full application actions, across all services provided,
 * and you can access actions via the name of the service along with the associating action.
 * For example, `actions.[Service Name].[Service Action]`
 *
 * `launch` is a function that takes the return value from invoking the action creator associated with the service action.
 * In turn, the service function will fire and this will update state and re-render your React components.
 * For example, `launch(actions.[Service Name].[Service Action]())`
 *
 * @return {{state: Object, actions: Object, launch: Function}} A `Launch.IO` object containing the current `state`, and object of service `actions` functions, and a `launch` function
 */
const useLaunch = (): LaunchContext => {
  const context = useContext(Context);

  return {
    state: context.state,
    actions: context.actions,
    launch: context.dispatch,
  };
};

export default useLaunch;
