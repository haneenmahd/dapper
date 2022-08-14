import State from './State';
import type {
	ExtendedStateCallback,
	ExtendedStateDestructor,
	ExtendedStateInitialEffect,
	ExtendedStateObject
} from './types';
import InstanceError from './errors/InstanceError';

/**
 * An alternative to `createState()` but supports using the custom extended State object
 *
 * @type {T} Generic type for the value
 * @param {ExtendedStateObject<T>} extendedState extended state's instance
 * @param {StateInitialEffect<T>} initalEffect An initial effect function call for the state.
 * @returns {StateDestructor<T>} Returns a getter and a setter and the instance itself.
 */
function createStateWith<T>(
	extendedState: ExtendedStateObject<T>,
	initalEffect?: ExtendedStateInitialEffect<T>
): ExtendedStateDestructor<T> {
	// we don't have to create another instance, as the instance is passed in
	// as the parameter `extendedState`. This allows more flexibility and
	// customisability at the same time.

	if (extendedState instanceof State) {
		if (typeof initalEffect !== 'undefined') {
			initalEffect(extendedState.get());
		}

		const getter = () => extendedState.get();
		const setter: ExtendedStateCallback<T> = newValue =>
			extendedState.set(newValue);

		return [getter, setter, extendedState];
	} else {
		throw new InstanceError(
			`${extendedState} is not an instance of the State class.`
		);
	}
}

export default createStateWith;
