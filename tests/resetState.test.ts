import { createState } from '../lib/index';

test('Reset state', () => {
	const checker = createState('default');

	const firstNewValue = 'new value';
	checker.set(firstNewValue);

	const finalNewValue = 'final value';
	checker.set(finalNewValue);

	expect(checker.get()).toEqual(finalNewValue);
});
