# ![Launch.IO Logo](./logo/logo-small.png)

[![Build](https://github.com/jbillmann/launch.io/workflows/Launch.IO%20Build/badge.svg)](https://github.com/jbillmann/launch.io/actions?query=workflow%3A%22Launch.IO+Build%22)
[![Npm version](https://img.shields.io/npm/v/launch.io.svg)](https://npmjs.org/package/launch.io)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/launch.io)](https://bundlephobia.com/result?p=launch.io)
[![Npm types](https://img.shields.io/npm/types/launch.io.svg)](https://npmjs.org/package/launch.io)

Launch.IO is an Ultra Hip, Simple, and Fast, Time Traveling React State Management Library.

It provides a means to easily and consistently split up your application state into different services. Create actions within those services that will predictably update your application state time and time again. (Batteries and [Time Travel Debugging](https://en.wikipedia.org/wiki/Time_travel_debugging) are included.)

You probably don't need all of the overhead and features of the other state management libraries. You just need Launch.IO and some good ice cream.

Simple. Fast. Tiny.

Everything you need. (Except for the ice cream.)

## Installation

```
npm install launch.io
```

## Getting Started

Create your application services. Each service should have a `name`, `initialState`, and a set of `actions`.

```javascript
const calculatorService = {
  name: "calculator",

  initialState: {
    value: 0,
  },

  // It is recommended that you do not mutate the incoming state; instead return a brand new state.
  actions: {
    increase: ({ state }) => ({ value: state.value + 1 }),
    decrease: ({ state }) => ({ value: state.value - 1 }),
  },
};
```

Wrap your React application with the Launch.IO `LaunchProvider` component and pass your `array` of application services along with any `options` you'd like to specify.

```jsx
import React from "react";
import { LaunchProvider } from "launch.io";

const App = () => {
  return (
    <LaunchProvider
      services={[calculatorService]}
      options={{ enableTimeTravel: true }}
    >
      <div className="MyApp">...</div>
    </LaunchProvider>
  );
};

export default App;
```

Use the Launch.IO `useLaunch` hook to access your services state and actions. Launch actions, using the `launch` function, within your React components.

```jsx
import React from "react";
import { useLaunch } from "launch.io";

const CalculatorForm = () => {
  const { state, actions, launch } = useLaunch();

  const handleIncrease = () => {
    launch(actions.calculator.increase());
  };

  const handleDecrease = () => {
    launch(actions.calculator.decrease());
  };

  return (
    <div>
      <p>Value: {state.calculator.value}</p>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
      <button type="button" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
};
```

## Tell Me More

Launch.IO is an abstraction around React's [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) and [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) with a healthy dose of time travel debugging. That's it! But, it's oh so cool, because you can launch things.

It relies on pure functions so it has the predictable state management of [Redux](https://github.com/reduxjs/redux), except there is no boilerplate and it's not Redux.

## Documentation

What do you mean?! You pretty much know the library by now. Get at it!

Anyway, you're probably wondering about time travel debugging, so here ya go:

[API Documentation](./docs/api/index.md)

## Stats

The hipness factor of this library is off the charts.

Check out the official stats.

| Category        | Rating         |
| --------------- | -------------- |
| Complexity      | `Ultra Simple` |
| Size            | `Ultra Tiny`   |
| Performance     | `Ultra Fast`   |
| Overall Ranking | `Ultra Hip`    |

## Reviews

> This is direction that React state management libraries need to be headed in!
> -- <cite>Anonymous</cite>

> I love ice cream.
> -- <cite>Anonymous</cite>

> Impressive! Makes me question why have I been using other complex state management libraries when this simply gets the job done?!
> -- <cite>Anonymous</cite>

> This library is lit and totally vibing!
> -- <cite>Anonymous</cite>

> Dad, are you working on your library, again?! Let's play some Minecraft.
> -- <cite>Anonymous</cite>

More coming soon!

## License

[MIT](LICENSE)
