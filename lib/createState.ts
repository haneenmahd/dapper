import State from './State';
import type { StateObject } from './types';

/**
 * Creates a new state object and returns the `State` object which has methods like
 * `get`, `set`, `verifyValue` and more. This is just a simplified form of the
 * `State` class.
 *
 *
 * ```ts
 * const name = createState('');
 *
 * // To retrieve the value from the state
 * name.get();
 *
 * // to set the value, a new value should be passed as the first argument.
 * name.set('john');
 * ```
 *
 * @type {T} Generic type for the value
 * @param value {T} Default value for the state
 * @returns {StateObject<T>} Returns a getter and a setter and the instance itself.
 */
function createState<T>(value: T): StateObject<T> {
	const state = new State(value);

	return state;
}

export default createState;
