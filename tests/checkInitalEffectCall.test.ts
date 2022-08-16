import { createState } from '../lib/index';

test('Check if the initial effect function is called', () => {
	const checker = createState(false);

	createState('hello', () => {
		checker.set(true);
	});

	expect(checker.get()).toEqual(true);
});

test('Check if the initial effect function is called and can access the initial value', () => {
	const checker = createState('');

	createState('hello', newValue => {
		checker.set(newValue);
	});

	expect(checker.get()).not.toBe('');
});
