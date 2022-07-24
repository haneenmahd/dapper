import State from "./State";
import type { StateDestructor } from "./types";

/**
 * Creates a new state object and return an array with it's first value
 * as the getter and second value as an setter. Instead of creating a new
 * new instance of `State`, this function should be used.
 *
 *
 * ```ts
 * const [checked, setChecked] = createState(false);
 *
 * // To retrieve the value from the state
 * let value = checked();
 *
 * // to set the value, a new value should be passed as the first argument.
 * setChecked(true);
 * ```
 *
 * @type {T} Generic type for the value
 * @param value {T} Default value for the state
 * @returns {StateDestructor<T>} Returns a getter and a setter
 */
function createState<T>(value: T): StateDestructor<T> {
  const state = new State(value);

  const getter = state;
  const setter = (newValue: T) => state.set(newValue);

  return [getter, setter];
}

export default createState;
