export interface StateObject<T> {
	value: T;
	onChange?: StateCallback<T>;

	set: StateCallback<T>;
	get(): T;
}

export type StateCallback<T> = (newValue: T) => void;

export type StateDestructor<T> = [
	StateObject<T>,
	StateCallback<T>,
	StateObject<T>
];
