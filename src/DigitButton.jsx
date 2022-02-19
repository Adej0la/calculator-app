import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {/*  the dispatch from the useReducer hook in App.jsx will be passed into the 'dispatch' prop above */}
      {digit}
    </button>
  );
}
