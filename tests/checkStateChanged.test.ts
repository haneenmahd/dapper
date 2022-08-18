import { createState } from '../lib/index';

test('Check if state has been changed', () => {
	const checker = createState('default');

	const newValue = 'new value';
	checker.set(newValue);

	expect(checker.get()).toEqual(newValue);
});
