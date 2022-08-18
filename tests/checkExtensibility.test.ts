import { createStateWith, State } from '../lib';

class ExtendedState extends State<string> {
	constructor(value: string) {
		super(value);
		this.value = value;
	}

	verifyValue(newValue: string): boolean {
		if (newValue.length < 3) {
			return false;
		}

		return true;
	}
}

test('Check if it supports extending the state', () => {
	const value = createStateWith(new ExtendedState('Hello'));

	const newValue = 'World';
	value.set(newValue);

	expect(value.get()).toBe('World');
});

class InvalidExtendedState {
	value: string;

	constructor(value: string) {
		this.value = value;
	}

	verifyValue(newValue: string): boolean {
		if (newValue.length < 3) {
			return false;
		}

		return true;
	}

	get(): string {
		return this.value;
	}

	set(newValue: string): void {
		this.value = newValue;
	}
}

test('Check if throws an error if the extended state is not an instance of State', () => {
	try {
		createStateWith(new InvalidExtendedState('Hello'));
	} catch (e) {
		expect(true).toEqual(true);

		return;
	}

	expect(true).toBe(false); // fail if there is no error thrown
});
