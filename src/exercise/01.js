// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, newState) =>
  typeof newState === 'function' ? newState(state) : {...state, ...newState}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () =>
    setState(currentState => ({
      ...currentState,
      count: count + step,
    }))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
