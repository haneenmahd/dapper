import State from "./State";
import type { StateDestructor } from "./types";

function createState<T>(value: T): StateDestructor<T> {
  const state = new State(value);

  const getter = state;
  const setter = (newValue: T) => state.set(newValue);

  return [getter, setter];
}

export default createState;
