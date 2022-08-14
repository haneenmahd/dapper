export interface StateObject<T> {
	value: T;
	onChange?: StateCallback<T>;

	set: StateCallback<T>;
	get(): T;
}

export type StateGetter<T> = () => T;

export type StateCallback<T> = (newValue: T) => void;

export type StateDestructor<T> = [
	StateGetter<T>,
	StateCallback<T>,
	StateObject<T>
];

export type StateInitialEffect<T> = (initialValue: T) => void;

// extended state object types
export type ExtendedStateObject<T> = StateObject<T>;

export type ExtendedStateGetter<T> = () => T;

export type ExtendedStateCallback<T> = (newValue: T) => void;

export type ExtendedStateDestructor<T> = [
	ExtendedStateGetter<T>,
	ExtendedStateCallback<T>,
	ExtendedStateObject<T>
];

export type ExtendedStateInitialEffect<T> = (initialValue: T) => void;
