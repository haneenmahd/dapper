import { createState, registerEffect } from '../lib/index';

test('Check if registerEffect hook is being called', () => {
	const value = createState('default');
	const hasCalled = createState(false);

	registerEffect(() => {
		hasCalled.set(true);
	}, [value]);

	value.set('new value');

	expect(hasCalled.get()).toEqual(true);
});

test('Check if registerEffect hook with multiple objects is called', () => {
	const value = createState('default');
	const value2 = createState('default');
	const hasCalled = createState(false);
	const hasCalled2 = createState(false);

	registerEffect(() => {
		hasCalled.set(true);
		hasCalled2.set(true);
	}, [value, value2]);

	value.set('new value');
	value.set('new value - 2');

	expect(hasCalled.get()).toEqual(true);
	expect(hasCalled2.get()).toEqual(true);
});
