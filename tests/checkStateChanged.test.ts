import { createState } from '../lib/index';

test('Check if state has been changed', () => {
	const [checker, setValue] = createState('default');

	const newValue = 'new value';
	setValue(newValue);

	expect(checker.get()).toEqual(newValue);
});
