import { createState } from '../lib/index';

test('Check if the initial effect function is called', () => {
	const [checker, setChecker] = createState(false);

	createState('hello', () => {
		setChecker(true);
	});

	expect(checker()).toEqual(true);
});

test('Check if the initial effect function is called and can access the initial value', () => {
	const [checker, setChecker] = createState('');

	createState('hello', newValue => {
		setChecker(newValue);
	});

	expect(checker()).not.toBe('');
});
