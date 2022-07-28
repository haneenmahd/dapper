import { createState } from '../lib/index';

test('Reset state', () => {
	const [checker, setValue] = createState('default');

	const firstNewValue = 'new value';
	setValue(firstNewValue);

	const finalNewValue = 'final value';
	setValue(finalNewValue);

	expect(checker.get()).toEqual(finalNewValue);
});
