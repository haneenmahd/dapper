import type { StateCallback, StateChangeCallback, StateObject } from './types';
import TypeError from './errors/TypeError';

/**
 * Class responsible for storing data in the program.
 * Hooks like `createState` and `registerEffect` depends on this class.
 * This class will be exported when ready for extensible purposes in production.
 *
 * @implements {StateObject<T>}
 * @method `set(newValue)` Sets value to the state
 * @method `get()` Get the value from the state
 */
class State<T> implements StateObject<T> {
	value: T;
	onChange?: StateChangeCallback<T>;

	/**
	 *
	 * @type {T} Generic type for the value
	 * @param value {T} default value
	 */
	constructor(value: T) {
		this.value = value;
	}

	/**
	 * Checks if the value has been updated or not to optimise performance.
	 * Also does type checking.
	 *
	 * @type {T} Generic type for the value
	 * @param {T} newValue
	 * @returns {boolean}
	 */
	verifyValue(newValue: T): boolean {
		const recievedType = typeof newValue;
		const valueType = typeof this.value;

		if (typeof newValue !== valueType) {
			throw new TypeError(
				`Expected type of ${valueType} but recieved ${recievedType}`
			);
		}

		return this.value !== newValue;
	}

	/**
	 * Sets the value to the `newValue` argument.
	 *
	 * @type {T} Generic type for the value
	 * @param newValue {T}
	 */
	set(newValue: T) {
		if (this.verifyValue(newValue)) {
			this.value = newValue;

			if (this.onChange) {
				this.onChange(() => this.value);
			}
		}
	}

	/**
	 * Returns the value of the state
	 *
	 * @returns {T}
	 */
	get(): T {
		return this.value;
	}
}

export default State;
