import State from './State';
import type {
	StateCallback,
	StateDestructor,
	StateInitialEffect
} from './types';

/**
 * Creates a new state object and return an array with it's first value
 * as the getter and second value as an setter and the third as the instance
 * of the state. Instead of creating a new new instance of `State`, this
 * function should be used. Expects a default value.
 *
 * This function also let's you pass a inital effect callback function that
 * will let you execute something when the state is initialised. This also
 * passes in the initial value as the parameter to this function. This fixes
 * the complexity of getting the initial value of the state before creating
 * a variable to hold it's value. This behind the scenes solves a lot of complexity.
 *
 *
 * ```ts
 * const [checked, setChecked, checkedObject] = createState(false);
 *
 * // To retrieve the value from the state
 * let value = checked();
 *
 * // to set the value, a new value should be passed as the first argument.
 * setChecked(true);
 * ```
 *
 * **Using an initial effect:**
 * ```ts
 * const initialEffect = initialValue => console.log(`The website is ${initialValue ? 'Already loaded' : 'Not loaded yet!'}`);
 *
 *
 * // You can pass in the initial effect as the second argument
 * const [isLoaded, setLoaded] = createState(false, initialEffect);
 * ```
 *
 * @type {T} Generic type for the value
 * @param value {T} Default value for the state
 * @param {StateInitialEffect<T>} initalEffect An initial effect function call for the state.
 * @returns {StateDestructor<T>} Returns a getter and a setter and the instance itself.
 */
function createState<T>(
	value: T,
	initalEffect?: StateInitialEffect<T>
): StateDestructor<T> {
	const state = new State(value);

	if (typeof initalEffect !== 'undefined') {
		initalEffect(state.get());
	}

	const getter = () => state.get();
	const setter: StateCallback<T> = newValue => state.set(newValue);

	return [getter, setter, state];
}

export default createState;
