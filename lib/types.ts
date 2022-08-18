export interface StateObject<T> {
	value: T;
	onChange?: StateChangeCallback<T>;

	set: StateCallback<T>;
	get(): T;
}

export type StateCallback<T> = (newValue: T) => void;

export type StateChangeCallback<T> = (newValue: () => T) => void;

export type StateInitialEffect<T> = (initialValue: T) => void;

// extended state object types
export type ExtendedStateObject<T> = StateObject<T>;

export type ExtendedStateCallback<T> = (newValue: T) => void;

export type ExtendedStateInitialEffect<T> = (initialValue: T) => void;
