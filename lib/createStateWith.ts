import State from './State';
import type { ExtendedStateObject } from './types';
import InstanceError from './errors/InstanceError';

/**
 * An alternative to `createState()` but supports using the custom extended State object
 *
 * @type {T} Generic type for the value
 * @param {ExtendedStateObject<T>} extendedState extended state's instance
 * @returns {StateDestructor<T>} Returns a getter and a setter and the instance itself.
 */
function createStateWith<T>(
	extendedState: ExtendedStateObject<T>
): ExtendedStateObject<T> {
	// we don't have to create another instance, as the instance is passed in
	// as the parameter `extendedState`. This allows more flexibility and
	// customisability at the same time.

	if (extendedState instanceof State) {
		return extendedState;
	} else {
		throw new InstanceError(
			`${extendedState} is not an instance of the State class.`
		);
	}
}

export default createStateWith;
